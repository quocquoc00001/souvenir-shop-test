// ============================================
// MÙA THU - AUTUMN PAGE JAVASCRIPT
// ============================================

const supabaseUrl = 'https://pacdedekrilpryicissg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhY2RlZGVrcmlscHJ5aWNpc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MzE2MDksImV4cCI6MjA4NTMwNzYwOX0.CNE274tkcgJCHBXq8SlvN59aaecK2qP2CRuKaDY-S1g';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false, currentTool = 'brush';
let brushColor = '#d35400', brushSize = 5, lastX = 0, lastY = 0;
let drawHistory = [], historyStep = -1;
const MAX_HISTORY = 50;

document.addEventListener('DOMContentLoaded', () => {
    initLeaves();
    initCanvas();
    initTools();
});

function initLeaves() {
    const container = document.getElementById('fallingLeaves');
    for (let i = 0; i < 20; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.style.left = Math.random() * 100 + '%';
        leaf.style.animationDuration = (Math.random() * 5 + 5) + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        leaf.style.width = (Math.random() * 20 + 20) + 'px';
        leaf.style.height = leaf.style.width;
        container.appendChild(leaf);
    }
}

function initCanvas() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    saveState();
}

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

function initTools() {
    document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTool = btn.dataset.tool;
        });
    });
    
    document.getElementById('colorPicker').addEventListener('change', (e) => {
        brushColor = e.target.value;
        currentTool = 'brush';
    });
    
    const sizeSlider = document.getElementById('brushSize');
    sizeSlider.addEventListener('input', (e) => {
        brushSize = parseInt(e.target.value);
        document.getElementById('sizeDisplay').textContent = brushSize + 'px';
    });
    
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
            e.preventDefault();
            undoLastStroke();
        }
    });
}

function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function startDrawing(e) {
    isDrawing = true;
    const coords = getCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
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
    if (isDrawing) { isDrawing = false; saveState(); }
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    canvas.dispatchEvent(new MouseEvent('mousedown', {
        clientX: touch.clientX, clientY: touch.clientY
    }));
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    canvas.dispatchEvent(new MouseEvent('mousemove', {
        clientX: touch.clientX, clientY: touch.clientY
    }));
}

function saveState() {
    historyStep++;
    if (historyStep < drawHistory.length) drawHistory.length = historyStep;
    drawHistory.push(canvas.toDataURL());
    if (drawHistory.length > MAX_HISTORY) { drawHistory.shift(); historyStep--; }
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

function drawFallingLeaves() {
    saveState();
    const colors = ['#d35400', '#e67e22', '#f39c12', '#8b4513', '#c0392b'];
    
    for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 15 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, size, size/2, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    }
    saveState();
    showChatMessage('🤖 Llama 4', 'Lá vàng rơi xào xạc... 🍂');
}

function drawOldStreet() {
    saveState();
    // Sky
    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height/2);
    skyGradient.addColorStop(0, '#87ceeb');
    skyGradient.addColorStop(1, '#b3e5fc');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height/2);
    
    // Street
    ctx.fillStyle = '#9e9e9e';
    ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
    
    // Buildings
    const colors = ['#d7ccc8', '#bcaaa4', '#a1887f'];
    for (let i = 0; i < 5; i++) {
        const x = i * (canvas.width/5);
        const height = Math.random() * 150 + 200;
        ctx.fillStyle = colors[i % 3];
        ctx.fillRect(x + 10, canvas.height/2 - height, canvas.width/5 - 20, height);
        
        // Windows
        ctx.fillStyle = '#5d4037';
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 4; k++) {
                ctx.fillRect(x + 25 + j * 40, canvas.height/2 - height + 30 + k * 50, 25, 35);
            }
        }
    }
    saveState();
    showChatMessage('🤖 Llama 4', 'Phố cổ Hà Nội hiện lên thật hoài niệm! 🏮');
}

function drawAutumnAI() {
    drawOldStreet();
    setTimeout(() => drawFallingLeaves(), 300);
}

async function getGroqApiKey() {
    const { data } = await supabaseClient.from('settings').select('value').eq('key', 'groq_api_key').single();
    if (!data?.value) throw new Error('Chưa cấu hình API key');
    return data.value;
}

async function analyzeDrawing() {
    document.getElementById('aiChatBox').classList.add('active');
    showLoadingMessage();
    
    try {
        const apiKey = await getGroqApiKey();
        const base64Image = canvas.toDataURL('image/png').split(',')[1];
        
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
                messages: [
                    { role: 'system', content: 'Bạn là Llama - nhà thơ mùa thu. Nhận xét bức tranh lãng mạn, sâu lắng, ngắn gọn, tiếng Việt.' },
                    { role: 'user', content: [{ type: 'text', text: 'Nhận xét bức tranh mùa thu:' }, { type: 'image_url', image_url: { url: `data:image/png;base64,${base64Image}` } }] }
                ],
                temperature: 0.9,
                max_completion_tokens: 500
            })
        });
        
        const data = await response.json();
        removeLoadingMessage();
        if (data.choices?.[0]?.message?.content) {
            showChatMessage('🤖 Llama 4', data.choices[0].message.content);
        }
    } catch (error) {
        removeLoadingMessage();
        showChatMessage('🤖 Llama 4', 'Bức tranh mang vẻ buồn man mác đặc trưng của mùa thu Hà Nội. Thật đẹp! 🍁');
    }
}

function showLoadingMessage() {
    const div = document.createElement('div');
    div.className = 'message loading';
    div.id = 'loadingMessage';
    div.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chiêm ngưỡng...';
    document.getElementById('chatMessages').appendChild(div);
}

function removeLoadingMessage() {
    document.getElementById('loadingMessage')?.remove();
}

function showChatMessage(sender, message) {
    const div = document.createElement('div');
    div.className = `message ${sender.includes('Llama') ? 'ai' : 'user'}`;
    div.innerHTML = `<strong>${sender}:</strong> ${message}`;
    document.getElementById('chatMessages').appendChild(div);
    document.getElementById('chatMessages').scrollTop = 999999;
}

function toggleChat() {
    document.getElementById('aiChatBox').classList.toggle('active');
}

function clearCanvas() {
    saveState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('aiChatBox').classList.remove('active');
}