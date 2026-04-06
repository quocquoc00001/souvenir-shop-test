// ============================================
// MÙA HẠ - SUMMER PAGE JAVASCRIPT
// ============================================

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false, currentTool = 'brush';
let brushColor = '#ff6b35', brushSize = 5, lastX = 0, lastY = 0;
let drawHistory = [], historyStep = -1;
const MAX_HISTORY = 50;

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initTools();
});

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

function drawSunset() {
    saveState();
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
    gradient.addColorStop(0, '#ff6b35');
    gradient.addColorStop(0.5, '#f7931e');
    gradient.addColorStop(1, '#ffd54f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    ctx.fillStyle = '#ff5722';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 - 30, 50, 0, Math.PI * 2);
    ctx.fill();

    const oceanGradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
    oceanGradient.addColorStop(0, '#4fc3f7');
    oceanGradient.addColorStop(1, '#01579b');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
    saveState();
    showAiMessage(t('canvas.summer.drew.sunset'));
}

function drawBeach() {
    saveState();
    ctx.fillStyle = '#87ceeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    ctx.fillStyle = '#00d4ff';
    ctx.fillRect(0, canvas.height / 2 - 50, canvas.width, 100);

    ctx.fillStyle = '#f4e4c1';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2 + 50);
    ctx.quadraticCurveTo(canvas.width / 2, canvas.height / 2 + 20, canvas.width, canvas.height / 2 + 50);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();

    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(canvas.width - 100, canvas.height);
    ctx.quadraticCurveTo(canvas.width - 80, canvas.height / 2 + 100, canvas.width - 60, canvas.height / 2);
    ctx.stroke();

    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 4;
    for (let i = 0; i < 6; i++) {
        const angle = (i * 60) * Math.PI / 180;
        ctx.beginPath();
        ctx.moveTo(canvas.width - 60, canvas.height / 2);
        ctx.lineTo(
            canvas.width - 60 + Math.cos(angle) * 60,
            canvas.height / 2 + Math.sin(angle) * 60
        );
        ctx.stroke();
    }
    saveState();
    showAiMessage(t('canvas.summer.drew.beach'));
}

function drawSummerAI() {
    drawSunset();
    setTimeout(() => drawBeach(), 300);
}

async function analyzeDrawing() {
    document.getElementById('aiChatBox').classList.add('active');
    showLoadingMessage();

    try {
        const imageData = canvas.toDataURL('image/png');
        const systemPrompt = t('canvas.systemPrompt.summer');

        const result = await window.SupabaseAPI.callGroqAPI(imageData, systemPrompt);

        removeLoadingMessage();
        showAiMessage(result.content);
    } catch (error) {
        removeLoadingMessage();
        showAiMessage(t('canvas.error.summer'));
    }
}

function showLoadingMessage() {
    const div = document.createElement('div');
    div.className = 'message loading';
    div.id = 'loadingMessage';
    div.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('canvas.loading')}`;
    document.getElementById('chatMessages').appendChild(div);
}

function removeLoadingMessage() {
    document.getElementById('loadingMessage')?.remove();
}

function showAiMessage(message) {
    const div = document.createElement('div');
    div.className = 'message ai';
    div.innerHTML = `<strong>${t('canvas.aiName')}:</strong> ${message}`;
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