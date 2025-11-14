## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 🌐 Projeto Web AR — Visualizador 3D Interativo com `<model-viewer>`

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Model Viewer](https://img.shields.io/badge/model--viewer-3D%20%2B%20AR-blue?logo=googlechrome&logoColor=white)
![WebXR](https://img.shields.io/badge/WebXR-Advanced-purple?logo=webxr)
![AR Ready](https://img.shields.io/badge/AR-Ready-success)
![HDRI Lighting](https://img.shields.io/badge/HDRI-Lighting-0A84FF)
![Responsive](https://img.shields.io/badge/UI-Responsive-brightgreen)
![Dark Mode](https://img.shields.io/badge/Dark-Mode-black)
![Mobile First](https://img.shields.io/badge/Mobile-First-0FA958)
![3D Viewer](https://img.shields.io/badge/3D-Viewer-orange?logo=threedotjs&logoColor=white)
![AR Web](https://img.shields.io/badge/AR-WebXR%20%7C%20Scene%20Viewer%20%7C%20QuickLook-blueviolet)
![GLB](https://img.shields.io/badge/Format-GLB%2FGLTF-yellow)
![Performance](https://img.shields.io/badge/Optimized-Performance-success)
![Cross Platform](https://img.shields.io/badge/Cross--Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey)

Este projeto oferece uma experiência completa de visualização 3D com suporte a Realidade Aumentada (AR) diretamente no navegador. Compatível com Android, iOS e Desktop, utiliza `<model-viewer>` para renderização 3D, WebXR, Scene Viewer e Quick Look para AR, além de controles interativos e uma interface moderna.

---

## 🚀 Recursos Principais

- ✔ Visualização 3D em tempo real (GLB/GLTF)  
- ✔ Suporte a AR via WebXR, Scene Viewer (Android) e Quick Look (iOS)  
- ✔ Carregamento com **barra de progresso premium + fade-in + spinner animado**  
- ✔ Controles: rotação, zoom, escala, captura de tela e download do GLB  
- ✔ Alteração dinâmica de ambiente HDRI  
- ✔ Suporte a poster, iluminação física e sombras realistas  
- ✔ Interface responsiva (mobile-first)  
- ✔ Modo fullscreen  
- ✔ Fácil de estender e reutilizar  

---

## 📦 Tecnologias Utilizadas

- **HTML5 + CSS3**
- **JavaScript**
- **`<model-viewer>` (Google)**
- **WebXR**
- **HDRI environment maps**
- **GLB/GLTF**

---

## 📱 Compatibilidade

| Plataforma | AR Suportado | Tecnologia |
|-----------|--------------|------------|
| **Android** | ✔ | Scene Viewer / WebXR |
| **iOS** | ✔ | Quick Look (.usdz necessário) |
| **Desktop** | ✖ (sem AR) | Visualização 3D normal |

---

## 🖼 Funções Implementadas

- Seleção de diferentes modelos `.glb`
- Controle de rotação (on/off)
- Ajuste de escala
- Mudança de fundo
- Mudança de ambiente HDRI
- Modo fullscreen
- Download do modelo
- Captura de tela (PNG)

---

## 🔧 Como Usar

1. Hospede o projeto em um servidor HTTPS  
2. Coloque seus arquivos `.glb` na raiz ou em `/models`  
3. Atualize o src no `<model-viewer>` ou no `<select>` do JavaScript  
4. Abra no navegador e teste

---

## 📁 Estrutura do Projeto

```bash
web-ar-3d-viewer/
├── index.html
├── script.js
├── style.css
├── RobotExpressive.glb
├── Astronaut.glb
├── DamagedHelmet.glb
├── neutral.hdr
├── venice_sunset_1k.hdr
├── studio_small_03_1k.hdr
├── carregando.jpg
├── README.md
└── LICENSE
```

---

## 🛠 Como adicionar novos modelos

1. Adicione o arquivo `.glb` na raiz
2. Inclua no `<select>` no HTML:

```html
<option value="NewModel.glb">Meu Novo Modelo</option>
```

🔮 Futuras melhorias (opcionais)
Modo foto com fundo transparente
Gravação de vídeo 3D
Uso de Draco compression (GLTF otimizado)
Menu lateral com thumbnails
Integração com backend (upload de modelos)

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/web-ar-3d-viewer/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/web-ar-3d-viewer/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
