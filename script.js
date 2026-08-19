// Database definition mapping exact resume information for Harini Dasari
const PROJECTS_DATABASE = [
  {
    id: "spatio_temporal_air_quality",
    title: "Fast-Adapting Spatio-Temporal Air Quality Forecasting",
    tags: "#PyTorch #PyTorchGeometric #DynamicGNN #BiLSTM #ONNX #RayTune",
    desc: "Engineered a 2-stage spatio-temporal deep learning pipeline in PyTorch Geometric to forecast urban PM2.5 levels across multi-station sensor networks using non-overlapping temporal block validation. Integrated wind-advection GNN with kinetics-gated BiLSTM layers and Generalized Pareto tail loss to model directional pollution transport. Achieved >80% reduction in training overhead with high accuracy (R² > 0.90).",
    tech: ["PyTorch", "PyTorch Geometric", "Dynamic GNN", "BiLSTM", "Ray Tune", "ONNX"],
    accuracy: "R² > 0.90 & >80% Training Cost Reduction",
    installation: "git clone https://github.com/Harini8919/Spatio-Temporal-Air-Quality.git\ncd Spatio-Temporal-Air-Quality\npip install -r requirements.txt\npython train.py",
    files: {
      "model.py": `import torch\nimport torch.nn as nn\n\nclass SpatioTemporalGNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # Kinetics-gated BiLSTM and Dynamic GNN definition\n        self.bilstm = nn.LSTM(input_size=12, hidden_size=64, batch_first=True, bidirectional=True)\n    \n    def forward(self, x):\n        out, _ = self.bilstm(x)\n        return out`,
      "train.py": `import torch\nfrom model import SpatioTemporalGNN\n\nprint("Initializing Spatio-Temporal Deep Learning Pipeline...")\nmodel = SpatioTemporalGNN()\nprint("Executing non-overlapping temporal block validation...")`,
      "requirements.txt": "torch\ntorch-geometric\nray-tune\nonnx\npandas\nnumpy"
    }
  },
  {
    id: "kisan_saathi",
    title: "KisanSaathi (The Farmer's Companion)",
    tags: "#ReactNative #TypeScript #GeminiAPI #ComputerVision #NLP",
    desc: "Engineered a cross-platform mobile app leveraging Gemini LLM APIs and computer vision to automate crop diagnostic analytics for 5K+ users. Integrated an offline voice NLP pipeline with predictive ML models to process regional weather telemetry with 98% accuracy while reducing supply chain data tracking latency by 35%.",
    tech: ["React Native", "TypeScript", "Gemini API", "Computer Vision", "NLP"],
    accuracy: "98% Telemetry Accuracy (5K+ Users)",
    installation: "git clone https://github.com/Harini8919/KisanSaathi.git\ncd KisanSaathi\nnpm install\nnpx react-native run-android",
    files: {
      "App.tsx": `import React from 'react';\nimport { Text, View } from 'react-native';\n\nexport default function App() {\n  return (\n    <View>\n      <Text>KisanSaathi - Telemetry Dashboard Operational</Text>\n    </View>\n  );\n}`,
      "package.json": "{\n  \"name\": \"kisansaathi\",\n  \"dependencies\": {\n    \"react\": \"18.2.0\",\n    \"react-native\": \"0.72.6\"\n  }\n}"
    }
  },
  {
    id: "ai_resume_analyser",
    title: "AI Resume Analyser",
    tags: "#Python #Streamlit #NLP #PyPDF2 #NLTK",
    desc: "Engineered an automated ATS resume parser using Python and Streamlit to extract key candidate metadata, tech stack skills, and experience metrics. Implemented NLTK-based text processing pipelines and vector similarity scoring algorithms to match candidate profiles against target job descriptions in real-time.",
    tech: ["Python", "Streamlit", "NLP", "PyPDF2", "NLTK"],
    accuracy: "Real-time ATS Prescreening",
    installation: "git clone https://github.com/Harini8919/AI-Resume-Analyser.git\ncd AI-Resume-Analyser\npip install -r requirements.txt\nstreamlit run app.py",
    files: {
      "app.py": `import streamlit as st\nimport PyPDF2\nimport nltk\n\nst.title("AI Resume Analyser")\nfile = st.file_uploader("Upload Candidate Resume", type=["pdf"])\nif file:\n    st.success("Resume parsed successfully!")`,
      "requirements.txt": "streamlit\npypdf2\nnltk\nscikit-learn"
    }
  }
];

let activeProjectId = PROJECTS_DATABASE[0].id;

document.addEventListener("DOMContentLoaded", () => {
  initBootSequence();
  initTypewriter();
  initParticles();
  initScrollAnimations();
  initStatCounters();
  renderProjectCards();
  initTelemetryMap();
  initDashboardEvents();
  initContactForm();
});

/* Boot Screen */
function initBootSequence() {
  const bootScreen = document.getElementById("bootScreen");
  const bootLine = document.getElementById("bootLine");
  if (!bootScreen || !bootLine) return;
  const text = "booting harini.dev...";
  let idx = 0;

  function type() {
    if (idx < text.length) {
      bootLine.textContent += text.charAt(idx);
      idx++;
      setTimeout(type, 40);
    } else {
      setTimeout(() => {
        bootScreen.classList.add("hidden");
      }, 300);
    }
  }
  type();
}

/* Hero Typewriter */
function initTypewriter() {
  const target = document.querySelector(".type-animation");
  if (!target) return;
  const phrases = ["Computer Science Student", "AI/ML Researcher", "GenAI Certified Professional", "NLP & Deep Learning Innovator"];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function loop() {
    const current = phrases[phraseIdx];
    target.textContent = isDeleting 
      ? current.substring(0, charIdx - 1) 
      : current.substring(0, charIdx + 1);
    
    charIdx += isDeleting ? -1 : 1;
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === current.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }
    setTimeout(loop, speed);
  }
  loop();
}

/* Background Particles */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 2 + 1
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(96, 165, 250, 0.25)";
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();

  const glow = document.getElementById("cursorGlow");
  window.addEventListener("pointermove", (e) => {
    if (glow) {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }
  });
}

/* Scroll Reveal and Nav Tracking */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const signalNodes = document.querySelectorAll(".signal-node");
  const signalFill = document.getElementById("signalFill");
  const backToTop = document.getElementById("backToTop");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((el) => observer.observe(el));

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-section") === current);
    });

    if (signalFill) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / docHeight) * 100;
      signalFill.style.height = `${Math.min(100, Math.max(0, progress))}%`;
    }

    signalNodes.forEach((node) => {
      node.classList.toggle("active", node.getAttribute("data-target") === current);
    });

    if (backToTop) {
      backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));
    document.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", () => navMenu.classList.remove("active")));
  }
}

/* Stat Counters */
function initStatCounters() {
  const stats = document.querySelectorAll(".stat-value");
  stats.forEach((stat) => {
    const target = parseFloat(stat.getAttribute("data-count"));
    const decimals = parseInt(stat.getAttribute("data-decimals") || "0", 10);
    let count = 0;
    const speed = target / 40;

    function update() {
      count += speed;
      if (count < target) {
        stat.textContent = count.toFixed(decimals);
        setTimeout(update, 30);
      } else {
        stat.textContent = target.toFixed(decimals);
      }
    }
    update();
  });
}

/* Render Bento Cards */
function renderProjectCards() {
  const container = document.getElementById("curatedProjectsGrid");
  if (!container) return;

  container.innerHTML = PROJECTS_DATABASE.map((proj) => `
    <div class="project-card" data-id="${proj.id}">
      <div>
        <div class="project-tags">${proj.tags}</div>
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
      </div>
      <div class="card-action-link">Open Interactive Repository →</div>
    </div>
  `).join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openDashboardModal(card.getAttribute("data-id")));
  });
}

/* Telemetry Map */
function initTelemetryMap() {
  const mapElement = document.getElementById("liveTelemetryMap");
  if (!mapElement || typeof L === "undefined") return;

  const vitApCoords = [16.4971, 80.4992];
  const map = L.map("liveTelemetryMap", { zoomControl: false }).setView(vitApCoords, 10);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19
  }).addTo(map);

  L.circleMarker(vitApCoords, {
    radius: 8,
    color: "#3b82f6",
    fillColor: "#60a5fa",
    fillOpacity: 0.8
  }).addTo(map).bindPopup("VIT Amaravati").openPopup();
}

/* Modal and Tab Switchers */
function initDashboardEvents() {
  const overlay = document.getElementById("projectDashboardSpa");
  const triggerBtn = document.getElementById("triggerDashboardBtn");
  const closeBtn = document.getElementById("closeDashboardBtn");
  const readmeTabBtn = document.querySelector('[data-tab="readme"]');

  if (triggerBtn) triggerBtn.addEventListener("click", () => openDashboardModal(PROJECTS_DATABASE[0].id));
  if (closeBtn) closeBtn.addEventListener("click", () => overlay.classList.remove("active"));

  if (readmeTabBtn) {
    readmeTabBtn.addEventListener("click", () => showReadmeView());
  }

  const copyBtn = document.getElementById("spaCopyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const code = document.getElementById("spaSourceCodeDisplay").textContent;
      navigator.clipboard.writeText(code);
      copyBtn.innerHTML = `<i class="fas fa-check"></i> Copied`;
      setTimeout(() => copyBtn.innerHTML = `<i class="fas fa-copy"></i> Copy Code`, 1500);
    });
  }
}

function openDashboardModal(projectId) {
  const overlay = document.getElementById("projectDashboardSpa");
  activeProjectId = projectId;
  const repo = PROJECTS_DATABASE.find((p) => p.id === projectId) || PROJECTS_DATABASE[0];

  document.getElementById("spaRepoName").textContent = repo.title;
  document.getElementById("spaProjectTitle").textContent = repo.title;
  document.getElementById("spaProjectDesc").textContent = repo.desc;
  document.getElementById("spaAccuracyValue").textContent = repo.accuracy;
  document.getElementById("spaInstallationCode").textContent = repo.installation;

  const techContainer = document.getElementById("spaTechStackContainer");
  techContainer.innerHTML = repo.tech.map((t) => `<span class="skill-tag">${t}</span>`).join(" ");

  const selectorList = document.getElementById("spaRepoSelectorList");
  selectorList.innerHTML = PROJECTS_DATABASE.map((p) => `
    <li class="${p.id === repo.id ? "active" : ""}" data-id="${p.id}">
      <i class="fas fa-book"></i> ${p.title}
    </li>
  `).join("");

  selectorList.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => openDashboardModal(item.getAttribute("data-id")));
  });

  const fileTree = document.getElementById("spaFileTreeList");
  const files = Object.keys(repo.files);
  fileTree.innerHTML = files.map((f) => `
    <li data-file="${f}">
      <i class="fas fa-file-code"></i> ${f}
    </li>
  `).join("");

  fileTree.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => loadFileContent(repo.id, item.getAttribute("data-file")));
  });

  showReadmeView();
  overlay.classList.add("active");
}

function showReadmeView() {
  document.getElementById("spaTabReadme").style.display = "block";
  document.getElementById("spaTabFile").style.display = "none";
  document.querySelectorAll("#spaFileTreeList li").forEach(li => li.classList.remove("active"));
}

function loadFileContent(repoId, fileName) {
  const repo = PROJECTS_DATABASE.find((p) => p.id === repoId);
  if (!repo || !repo.files[fileName]) return;

  document.getElementById("spaTabReadme").style.display = "none";
  document.getElementById("spaTabFile").style.display = "block";

  document.getElementById("spaActiveFileName").textContent = fileName;
  document.getElementById("spaSourceCodeDisplay").textContent = repo.files[fileName];

  document.querySelectorAll("#spaFileTreeList li").forEach(li => {
    li.classList.toggle("active", li.getAttribute("data-file") === fileName);
  });
}

/* Form Handler */
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (status) {
      status.style.color = "#60a5fa";
      status.textContent = "Transmitting message to Harini...";
      setTimeout(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      }, 1000);
    }
  });
}
