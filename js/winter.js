// ============================================
// MÙA ĐÔNG - WINTER PAGE JAVASCRIPT
// ============================================

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false, currentTool = 'brush';
let brushColor = '#0984e3', brushSize = 5, lastX = 0, lastY = 0;
let drawHistory = [], historyStep = -1;
const MAX_HISTORY = 50;

document.addEventListener('DOMContentLoaded', () => {
    initSnow();
    initCanvas();
    initTools();
});

function initSnow() {
    const container = document.getElementById('snowContainer');
    const symbols = ['❄', '❅', '❆'];
    
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (Math.random() * 3 + 3) + 's';
        flake.style.animationDelay = Math.random() * 5 + 's';
        flake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        flake.style.opacity = Math.random() * 0.6 + 0.4;
        container.appendChild(flake);
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

function drawSnow() {
    saveState();
    ctx.fillStyle = '#2d3436';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 100);
    for (let i = 0; i <= canvas.width; i += 50) {
        ctx.lineTo(i, canvas.height - 100 - Math.random() * 30);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();
    
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
    saveState();
    showChatMessage('🤖 Llama 4', 'Tuyết rơi trắng xóa! ❄️');
}

function drawFireplace() {
    saveState();
    const fireGradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, 200);
    fireGradient.addColorStop(0, '#ff6b35');
    fireGradient.addColorStop(0.5, '#e74c3c');
    fireGradient.addColorStop(1, '#2d3436');
    ctx.fillStyle = fireGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 20; i++) {
        ctx.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, 0.8)`;
        const x = canvas.width/2 - 50 + Math.random() * 100;
        const y = canvas.height/2 + 50 - Math.random() * 100;
        const height = Math.random() * 60 + 40;
        ctx.beginPath();
        ctx.moveTo(x, canvas.height/2 + 50);
        ctx.lineTo(x - 15, y);
        ctx.lineTo(x + 15, y);
        ctx.fill();
    }
    
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(canvas.width/2 - 60, canvas.height/2 + 60);
    ctx.lineTo(canvas.width/2 + 60, canvas.height/2 + 60);
    ctx.stroke();
    saveState();
    showChatMessage('🤖 Llama 4', 'Bếp lửa hồng ấm áp! 🔥');
}

function drawWinterAI() {
    drawSnow();
    setTimeout(() => drawFireplace(), 300);
}

async function analyzeDrawing() {
    document.getElementById('aiChatBox').classList.add('active');
    showLoadingMessage();
    
    try {
        const imageData = canvas.toDataURL('image/png');
        const systemPrompt = 'Bạn là Llama - người bạn ấm áp mùa đông. Nhận xét bức tranh chân thành, ấm áp, ngắn gọn, tiếng Việt.';
        
        const result = await window.SupabaseAPI.callGroqAPI(imageData, systemPrompt);
        
        removeLoadingMessage();
        showChatMessage('🤖 Llama 4', result.content);
    } catch (error) {
        removeLoadingMessage();
        showChatMessage('🤖 Llama 4', 'Bức tranh mang cảm giác ấm áp giữa mùa đông lạnh giá. Thật tuyệt! ❄️❤️');
    }
}

function showLoadingMessage() {
    const div = document.createElement('div');
    div.className = 'message loading';
    div.id = 'loadingMessage';
    div.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang sưởi ấm và phân tích...';
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