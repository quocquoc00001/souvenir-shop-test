// ============================================
// MÙA XUÂN - SPRING PAGE JAVASCRIPT
// ============================================

// Supabase config
const supabaseUrl = 'https://pacdedekrilpryicissg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhY2RlZGVrcmlscHJ5aWNpc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MzE2MDksImV4cCI6MjA4NTMwNzYwOX0.CNE274tkcgJCHBXq8SlvN59aaecK2qP2CRuKaDY-S1g';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Canvas variables
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentTool = 'brush';
let brushColor = '#e91e63';
let brushSize = 5;
let lastX = 0;
let lastY = 0;

// Undo history
let drawHistory = [];
let historyStep = -1;
const MAX_HISTORY = 50;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCanvas();
    initTools();
});

// ============================================
// PARTICLES ANIMATION
// ============================================
function initParticles() {
    const container = document.getElementById('springParticles');
    const flowers = ['🌸', '🌺', '🌼', '🏵️', '💮'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'spring-particle';
        particle.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
        container.appendChild(particle);
    }
}

// ============================================
// CANVAS INITIALIZATION
// ============================================
function initCanvas() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    // Save initial blank state
    saveState();
}

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

function initTools() {
    // Tool buttons
    document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTool = btn.dataset.tool;
            updateCursor();
        });
    });
    
    // Color picker
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('change', (e) => {
        brushColor = e.target.value;
        currentTool = 'brush';
        updateToolSelection();
    });
    
    // Brush size
    const sizeSlider = document.getElementById('brushSize');
    const sizeDisplay = document.getElementById('sizeDisplay');
    sizeSlider.addEventListener('input', (e) => {
        brushSize = parseInt(e.target.value);
        sizeDisplay.textContent = brushSize + 'px';
    });
    
    // Keyboard shortcut for undo
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
            e.preventDefault();
            undoLastStroke();
        }
    });
}

function updateCursor() {
    canvas.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair';
}

function updateToolSelection() {
    document.querySelectorAll('.tool-btn[data-tool]').forEach(b => {
        b.classList.toggle('active', b.dataset.tool === currentTool);
    });
}

// ============================================
// DRAWING FUNCTIONS
// ============================================
function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function startDrawing(e) {
    isDrawing = true;
    const coords = getCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
    
    // For single dot
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    
    const coords = getCoordinates(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    
    if (currentTool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = brushSize * 2;
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }
    
    ctx.stroke();
    [lastX, lastY] = [coords.x, coords.y];
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        saveState();
    }
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// ============================================
// UNDO FUNCTIONALITY
// ============================================
function saveState() {
    historyStep++;
    if (historyStep < drawHistory.length) {
        drawHistory.length = historyStep;
    }
    drawHistory.push(canvas.toDataURL());
    if (drawHistory.length > MAX_HISTORY) {
        drawHistory.shift();
        historyStep--;
    }
}

function undoLastStroke() {
    if (historyStep > 0) {
        historyStep--;
        const img = new Image();
        img.src = drawHistory[historyStep];
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
    }
}

// ============================================
// AI DRAWING FUNCTIONS
// ============================================
function drawFlowers() {
    saveState();
    const colors = ['#e91e63', '#f48fb1', '#ad1457', '#f06292'];
    
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;
        const size = Math.random() * 30 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Draw flower petals
        for (let j = 0; j < 5; j++) {
            ctx.fillStyle = color;
            ctx.beginPath();
            const angle = (j * 72) * Math.PI / 180;
            ctx.ellipse(
                x + Math.cos(angle) * size/2,
                y + Math.sin(angle) * size/2,
                size/3, size/5, angle, 0, Math.PI * 2
            );
            ctx.fill();
        }
        
        // Center
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(x, y, size/5, 0, Math.PI * 2);
        ctx.fill();
    }
    saveState();
    showChatMessage('🤖 Llama 4', 'Tôi đã vẽ những bông hoa đào rực rỡ cho bạn! 🌸');
}

function drawRiceField() {
    saveState();
    
    // Sky
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height/2);
    skyGradient.addColorStop(0, '#81d4fa');
    skyGradient.addColorStop(1, '#e1f5fe');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height/2);
    
    // Rice field
    const fieldGradient = ctx.createLinearGradient(0, canvas.height/2, 0, canvas.height);
    fieldGradient.addColorStop(0, '#a5d6a7');
    fieldGradient.addColorStop(1, '#4caf50');
    ctx.fillStyle = fieldGradient;
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
    
    // Rice plants
    for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height/2 + Math.random() * canvas.height/2;
        ctx.strokeStyle = `rgba(46, 125, 50, ${Math.random() * 0.5 + 0.5})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.random() * 10 - 5, y - 15 - Math.random() * 20);
        ctx.stroke();
    }
    
    saveState();
    showChatMessage('🤖 Llama 4', 'Đồng lúa xanh mướt đã sẵn sàng! 🌾');
}

function drawSpringAI() {
    drawRiceField();
    setTimeout(() => drawFlowers(), 300);
}

// ============================================
// GROQ API INTEGRATION
// ============================================
async function getGroqApiKey() {
    const { data, error } = await supabaseClient
        .from('settings')
        .select('value')
        .eq('key', 'groq_api_key')
        .single();
    
    if (error || !data || !data.value) {
        throw new Error('Chưa cấu hình API key');
    }
    return data.value;
}

async function analyzeDrawing() {
    const chatBox = document.getElementById('aiChatBox');
    chatBox.classList.add('active');
    
    showLoadingMessage();
    
    try {
        const apiKey = await getGroqApiKey();
        const imageData = canvas.toDataURL('image/png');
        const base64Image = imageData.split(',')[1];
        
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
                messages: [
                    {
                        role: 'system',
                        content: 'Bạn là Llama - họa sĩ AI yêu mến mùa xuân Việt Nam. Hãy nhận xét bức tranh một cách chân thành, ấm áp, dùng tiếng Việt. Nhận xét về màu sắc, cảm xúc và ý nghĩa mùa xuân trong bức vẽ. Trả lời ngắn gọn 2-3 câu.'
                    },
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: 'Bạn thấy bức tranh mùa xuân của tôi thế nào?' },
                            { 
                                type: 'image_url', 
                                image_url: { url: `data:image/png;base64,${base64Image}` } 
                            }
                        ]
                    }
                ],
                temperature: 0.8,
                max_completion_tokens: 500,
                stream: false
            })
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        removeLoadingMessage();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            showChatMessage('🤖 Llama 4', data.choices[0].message.content);
        }
        
    } catch (error) {
        removeLoadingMessage();
        console.error('Error:', error);
        showChatMessage('🤖 Llama 4', 'Bức tranh của bạn thật tuyệt! Tôi cảm nhận được không khí xuân rộn ràng và tràn đầy sức sống! 🌸✨');
    }
}

function showLoadingMessage() {
    const messagesDiv = document.getElementById('chatMessages');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message loading';
    loadingDiv.id = 'loadingMessage';
    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang phân tích bức vẽ...';
    messagesDiv.appendChild(loadingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function removeLoadingMessage() {
    const loading = document.getElementById('loadingMessage');
    if (loading) loading.remove();
}

function showChatMessage(sender, message) {
    const messagesDiv = document.getElementById('chatMessages');
    const isAI = sender.includes('Llama');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isAI ? 'ai' : 'user'}`;
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function toggleChat() {
    const chatBox = document.getElementById('aiChatBox');
    chatBox.classList.toggle('active');
}

function clearCanvas() {
    saveState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('aiChatBox').classList.remove('active');
}