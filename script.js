    const mv = document.getElementById('mv');
    const modelSelect = document.getElementById('modelSelect');
    const placeBtn = document.getElementById('placeBtn');
    const rotateBtn = document.getElementById('rotateBtn');
    const scaleUp = document.getElementById('scaleUp');
    const scaleDown = document.getElementById('scaleDown');
    const screenshot = document.getElementById('screenshot');
    const downloadGLB = document.getElementById('downloadGLB');
    
    const loading = document.getElementById('loading');
    const loadingText = document.querySelector('.loading-text');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // --- TROCAR FUNDO ---
    const viewerWrap = document.getElementById('viewerWrap');
    const bgToggle = document.getElementById('bgToggle');
    let bgDark = true;
    
    // --- FULLSCREEN ---
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    let rotating = true;
    let scale = 1;

    modelSelect.addEventListener('change', (ev) => {
      // Mostra mensagem
      loading.style.display = 'flex';
      loadingProgress.style.width = '0%';
      loadingText.textContent = "Carregando 0%";
      mv.src = ev.target.value;
    });

    placeBtn.addEventListener('click', async () => {
      try {
        if (mv.activateAR) mv.activateAR();
        else if (mv.enterAR) await mv.enterAR();
        else alert('Modo AR não suportado neste navegador.');
      } catch (err) {
        alert('Erro ao abrir AR: ' + err.message);
      }
    });

    rotateBtn.addEventListener('click', () => {
      rotating = !rotating;
      mv.autoRotate = rotating;
      rotateBtn.textContent = rotating ? '⟳ Pausar Rotação' : '▶️ Iniciar Rotação';
    });

    scaleUp.addEventListener('click', () => {
      scale = +(scale + 0.1).toFixed(2);
      mv.style.transform = `scale(${scale})`;
    });

    scaleDown.addEventListener('click', () => {
      scale = +(Math.max(0.1, scale - 0.1)).toFixed(2);
      mv.style.transform = `scale(${scale})`;
    });

    screenshot.addEventListener('click', async () => {
      try {
        const blob = await mv.toBlob({ imageType: 'image/png' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mv-screenshot.png';
        a.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        alert('Captura não suportada neste navegador.');
      }
    });

    downloadGLB.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = mv.src;
      a.download = mv.src.split('/').pop();
      a.click();
    });

// Evento de progresso do model-viewer
mv.addEventListener('progress', (e) => {
  const progress = Math.floor(e.detail.totalProgress * 100);

  loadingText.textContent = `Carregando ${progress}%`;
  loadingProgress.style.width = `${progress}%`;

  if (progress >= 100) {
    setTimeout(() => {
      loading.style.display = 'none';
    }, 300); // pequeno atraso para evitar corte brusco
  }
});

bgToggle.addEventListener('click', () => {
  bgDark = !bgDark;

  if (bgDark) {
    viewerWrap.classList.remove("bg-light");
    viewerWrap.classList.add("bg-dark");
    bgToggle.textContent = "Fundo: Escuro";
  } else {
    viewerWrap.classList.remove("bg-dark");
    viewerWrap.classList.add("bg-light");
    bgToggle.textContent = "Fundo: Claro";
  }
});

// Define fundo inicial
viewerWrap.classList.add("bg-dark");

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    viewerWrap.requestFullscreen().catch(err => {
      alert(`Erro ao entrar em fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

const environments = [
  "neutral.hdr",
  "venice_sunset_1k.hdr",
  "studio_small_03_1k.hdr"
];

let currentEnv = 0;

document.getElementById("toggleEnv").addEventListener("click", () => {
  const model = document.querySelector("model-viewer");

  currentEnv = (currentEnv + 1) % environments.length;

  model.environmentImage = environments[currentEnv];

  // Feedback rápido para o usuário
  model.dismissPoster(); // remove poster se ainda estiver

  // Exibe mensagem temporária
  const msg = document.createElement("div");
  msg.textContent = "Iluminação alterada!";
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "rgba(0,0,0,0.7)";
  msg.style.color = "#fff";
  msg.style.padding = "8px 16px";
  msg.style.borderRadius = "6px";
  msg.style.zIndex = 9999;
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 1500);
});

mv.addEventListener("load", () => {
  mv.classList.add("loaded");
});