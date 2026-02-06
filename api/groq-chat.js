// API route để gọi Groq API - Bảo mật API key trên server
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { imageData, systemPrompt } = req.body;
    
    // Validate input
    if (!imageData || !imageData.startsWith('data:image')) {
      return res.status(400).json({ error: 'Invalid image data' });
    }

    // Lấy API key từ environment variable (bảo mật)
    const groqApiKey = process.env.GROQ_API_KEY;
    
    if (!groqApiKey) {
      console.error('GROQ_API_KEY not configured');
      return res.status(500).json({ error: 'API not configured' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
        messages: [
          {
            role: 'system',
            content: systemPrompt || 'Bạn là AI thân thiện, nhận xét tranh bằng tiếng Việt.'
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Nhận xét bức tranh này:' },
              { type: 'image_url', image_url: { url: imageData } }
            ]
          }
        ],
        temperature: 0.8,
        max_completion_tokens: 500
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Groq API error:', data);
      throw new Error(data.error?.message || 'Groq API error');
    }

    return res.status(200).json({ 
      content: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Groq API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}