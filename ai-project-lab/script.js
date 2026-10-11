* {
  box-sizing: border-box;
}

:root {
  --bg: #07151f;
  --bg-soft: #0d1f2d;
  --card: rgba(14, 31, 44, 0.96);
  --card-alt: rgba(12, 24, 34, 0.84);
  --line: rgba(148, 182, 214, 0.18);
  --primary: #67e8f9;
  --primary-2: #7dd3fc;
  --accent: #fbbf24;
  --text: #eaf7ff;
  --muted: #b5d3ea;
  --success: #34d399;
  --danger: #f87171;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: linear-gradient(180deg, #05141d 0%, #0b1f2c 52%, #120f1d 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(7, 21, 31, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 0 18px rgba(103, 232, 249, 0.7);
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}

.hero {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;
}

.label {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
  margin: 0 0 10px;
}

.hero h1,
.section-head h2,
.page-content h1 {
  margin: 0;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  max-width: 700px;
}

.hero-copy p {
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.05rem;
  margin-top: 18px;
  max-width: 660px;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn,
.copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary-btn,
.copy-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #052a38;
  box-shadow: 0 18px 34px rgba(103, 232, 249, 0.15);
}

.secondary-btn {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover,
.copy-btn:hover {
  transform: translateY(-2px);
}

.stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin: 34px 0 0;
}

.stats li {
  min-width: 120px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.stats strong {
  display: block;
  font-size: 1.4rem;
  color: var(--primary);
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 440px);
  background: linear-gradient(180deg, rgba(15, 33, 46, 0.95), rgba(13, 21, 30, 0.96));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 26px 48px rgba(0,0,0,0.22);
}

.mini-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-weight: 700;
}

.pulse {
  width: 10px;
  height: 10px;
  background: var(--success);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.9);
}

.panel-card h3 {
  margin: 18px 0 18px;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.sample-box {
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  padding: 14px 16px;
  color: var(--muted);
}

.sample-box p {
  margin: 0 0 8px;
  color: var(--text);
  font-weight: 700;
}

.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.mini-tags span,
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.42rem 0.72rem;
  font-size: 0.78rem;
  font-weight: 700;
  border: 1px solid rgba(103, 232, 249, 0.25);
  background: rgba(103, 232, 249, 0.10);
  color: var(--primary);
}

.badge.alt {
  background: rgba(251, 191, 36, 0.1);
  border-color: rgba(251, 191, 36, 0.15);
  color: var(--accent);
}

.categories,
.generator,
.workflow,
.tips {
  padding: 42px 0;
}

.section-head {
  margin-bottom: 24px;
}

.section-head h2 {
  font-size: clamp(1.9rem, 2.7vw, 3rem);
}

.category-grid,
.tool-grid,
.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.category-card,
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

.category-card,
.tool-card,
.workflow-card {
  padding: 20px 18px;
}

.category-card h3,
.tool-card h3,
.workflow-card h3,
.task-box h3 {
  margin: 0 0 12px;
}

.category-card p,
.tool-card p,
.workflow-card p,
.page-content p,
.page-content li,
.footer-wrap p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.generator-wrap {
  display: grid;
  gap: 20px;
}

.controls {
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
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
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
  margin: 12px 0 16px;
  font-size: clamp(1.7rem, 2.5vw, 2.4rem);
}

.prompt-box {
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
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
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: rgba(103, 232, 249, 0.1);
  color: var(--primary);
  font-weight: 700;
  border: 1px solid rgba(103, 232, 249, 0.15);
}

.page-shell {
  padding: 48px 0 36px;
}

.page-content {
  display: grid;
  gap: 28px;
}

.page-content h1 {
  font-size: clamp(2rem, 4vw, 3.1rem);
}

.doc-section {
  padding: 24px 22px;
}

.doc-section h2 {
  margin: 0 0 18px;
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
  padding: 28px 0 50px;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  border-top: 1px solid var(--line);
  padding-top: 18px;
}

@media (max-width: 900px) {
  .hero-grid,
  .category-grid,
  .tool-grid,
  .workflow-grid,
  .controls,
  .task-boxes {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }
}
