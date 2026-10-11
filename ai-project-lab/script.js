* {
  box-sizing: border-box;
}

:root {
  --bg: #07141d;
  --bg-2: #0d1f2d;
  --card: rgba(15, 28, 38, 0.94);
  --card-soft: rgba(10, 19, 29, 0.88);
  --line: rgba(160, 196, 255, 0.14);
  --primary: #5eead4;
  --primary-2: #7dd3fc;
  --accent: #fbbf24;
  --text: #edf8ff;
  --muted: #b9d0df;
  --success: #34d399;
  --shadow: 0 24px 56px rgba(6, 19, 29, 0.42);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: linear-gradient(180deg, #06141d 0%, #0b1d2a 50%, #0f1f2d 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

.container {
  width: min(1180px, calc(100% - 34px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(7, 20, 29, 0.76);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-mark {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 0 18px rgba(94, 234, 212, 0.75);
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

nav a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 600;
}

.hero {
  padding: 72px 0 52px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary);
}

.hero h1,
.section-header h2,
.page-content h1 {
  margin: 0;
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.hero h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  max-width: 720px;
}

.lead {
  margin-top: 18px;
  max-width: 700px;
  line-height: 1.75;
  color: var(--muted);
  font-size: 1.05rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.primary-btn,
.secondary-btn,
.copy-btn {
  min-height: 48px;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-size: 0.96rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn,
.copy-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #062b3a;
  box-shadow: 0 18px 36px rgba(94, 234, 212, 0.18);
}

.secondary-btn {
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border: 1px solid var(--line);
}

.primary-btn:hover,
.secondary-btn:hover,
.copy-btn:hover {
  transform: translateY(-2px);
}

.stats-grid {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin: 30px 0 0;
}

.stats-grid li {
  min-width: 130px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
}

.stats-grid strong {
  display: block;
  color: var(--primary);
  font-size: 1.5rem;
}

.stats-grid span {
  color: var(--muted);
  font-size: 0.88rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.glass-card {
  width: min(100%, 430px);
  background: linear-gradient(180deg, rgba(18, 35, 49, 0.95), rgba(10, 18, 27, 0.96));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.mini-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  font-weight: 700;
}

.pulse {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.9);
}

.glass-card h3 {
  margin: 18px 0 18px;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.3;
}

.sample-box {
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  padding: 16px;
}

.sample-box p {
  margin: 0 0 8px;
  color: var(--text);
  font-weight: 700;
}

.sample-box small {
  color: var(--muted);
  line-height: 1.7;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.tag-row span,
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.44rem 0.75rem;
  background: rgba(94, 234, 212, 0.08);
  border: 1px solid rgba(94, 234, 212, 0.16);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
}

.badge.alt {
  background: rgba(251, 191, 36, 0.12);
  border-color: rgba(251, 191, 36, 0.18);
  color: var(--accent);
}

.section-block,
.generator-section,
.workflow-section,
.tool-section {
  padding: 28px 0 48px;
}

.section-header {
  margin-bottom: 26px;
}

.section-header h2 {
  font-size: clamp(2rem, 3vw, 3rem);
}

.left-align {
  text-align: left;
}

.feature-grid,
.tool-grid,
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-card,
.tool-card,
.workflow-card,
.result-card,
.doc-section,
.task-box,
.quote-box {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 12px 22px rgba(0,0,0,0.12);
}

.feature-card,
.tool-card,
.workflow-card {
  padding: 22px 20px;
}

.feature-card h3,
.tool-card h3,
.workflow-card h3,
.task-box h3 {
  margin: 0 0 12px;
}

.feature-card p,
.tool-card p,
.workflow-card p,
.footer-wrap p,
.page-content p,
.page-content li {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.generator-wrap {
  display: grid;
  gap: 20px;
}

.controls-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: end;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-weight: 600;
}

select {
  width: 100%;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 0.9rem 0.9rem;
  font-size: 1rem;
}

.result-card {
  padding: 24px;
}

.result-header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.result-card h3 {
  margin: 14px 0 14px;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
}

.prompt-box {
  margin-top: 16px;
  padding: 16px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
}

.prompt-box strong {
  display: block;
  margin-bottom: 8px;
}

.prompt-box p {
  white-space: pre-wrap;
  word-break: break-word;
}

.copy-btn {
  margin-top: 12px;
}

.workflow-card span {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(94, 234, 212, 0.09);
  border: 1px solid rgba(94, 234, 212, 0.18);
  color: var(--primary);
  font-weight: 800;
}

.page-shell {
  padding: 52px 0 36px;
}

.page-content {
  display: grid;
  gap: 26px;
}

.page-content h1 {
  font-size: clamp(2.1rem, 3.8vw, 3rem);
}

.doc-section {
  padding: 24px 22px;
}

.doc-section h2 {
  margin: 0 0 16px;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.doc-section ul,
.doc-section ol {
  margin: 0;
  padding-left: 22px;
  display: grid;
  gap: 10px;
}

.task-boxes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.task-box,
.quote-box {
  padding: 18px 20px;
}

.quote-box strong {
  display: block;
  margin-bottom: 8px;
  color: var(--primary);
}

.footer {
  padding: 22px 0 52px;
}

.footer-wrap {
  border-top: 1px solid var(--line);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-wrap strong {
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .feature-grid,
  .tool-grid,
  .workflow-grid,
  .controls-panel,
  .task-boxes {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }
}
