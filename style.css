
:root {
  --bg: #030611;
  --cyan: #53e8ff;
  --muted: #9aacc8;
  --panel: rgba(7, 15, 34, 0.88);
  --line: rgba(111, 201, 255, 0.2);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: var(--bg);
  color: #f4f8ff;
  font-family: Arial, Helvetica, sans-serif;
}

button,
a {
  font: inherit;
}

button {
  color: inherit;
  cursor: pointer;
}

#universe {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  outline: none;
  touch-action: none;
}

#loading-screen {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #030611;
  transition: opacity 0.5s ease;
}

#loading-screen h2 {
  font-size: 19px;
  letter-spacing: 7px;
}

#loading-screen p {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 3px;
}

.loader {
  width: 45px;
  height: 45px;
  border: 2px solid #17324b;
  border-top-color: var(--cyan);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.topbar {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 82px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(135, 180, 255, 0.1);
  background: linear-gradient(
    to bottom,
    rgba(3, 6, 17, 0.8),
    transparent
  );
  pointer-events: none;
}

.brand {
  color: white;
  text-decoration: none;
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 3px;
  pointer-events: auto;
}

.brand span {
  color: var(--cyan);
}

.live-status {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #b4c6e1;
  font-size: 10px;
  letter-spacing: 1.5px;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #5bffb0;
  border-radius: 50%;
  box-shadow: 0 0 12px #5bffb0;
}

.intro {
  position: fixed;
  z-index: 2;
  top: 22%;
  left: 7%;
  width: min(370px, 37%);
  pointer-events: none;
}

.eyebrow {
  color: var(--cyan);
  font-size: 10px;
  letter-spacing: 2.7px;
  line-height: 1.8;
}

.intro h1 {
  margin: 19px 0;
  font-size: clamp(39px, 5vw, 69px);
  line-height: 0.99;
  letter-spacing: -2px;
  font-weight: 900;
}

.intro h1 span {
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(83, 232, 255, 0.18);
}

.intro-text {
  max-width: 310px;
  color: #a7b6d0;
  font-size: 13px;
  line-height: 1.9;
}

#explore-button,
#focus-button {
  margin-top: 24px;
  padding: 14px 18px;
  background: var(--cyan);
  color: #03101c;
  border: 1px solid var(--cyan);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.4px;
  pointer-events: auto;
  transition: background 0.2s, transform 0.2s;
}

#explore-button:hover,
#focus-button:hover {
  background: white;
  transform: translateY(-2px);
}

.planet-panel {
  position: fixed;
  z-index: 4;
  top: 50%;
  right: 5%;
  transform: translateY(-45%);
  width: 290px;
  padding: 25px;
  border: 1px solid var(--line);
  background: var(--panel);
  backdrop-filter: blur(18px);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
  transition: opacity 0.25s, transform 0.25s;
}

.planet-panel.hidden {
  opacity: 0;
  pointer-events: none;
  transform: translate(15px, -45%);
}

.close-panel {
  position: absolute;
  top: 12px;
  right: 14px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 25px;
}

.planet-number {
  margin-top: 19px;
  color: #8093b3;
  font-size: 10px;
  letter-spacing: 2px;
}

.planet-panel h2 {
  margin-top: 8px;
  font-size: 28px;
  letter-spacing: 2px;
}

#planet-description {
  margin-top: 12px;
  color: #afbdd2;
  font-size: 12px;
  line-height: 1.8;
}

.planet-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 12px;
  margin-top: 23px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.planet-stats div {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.planet-stats span {
  color: #8498b8;
  font-size: 9px;
  letter-spacing: 1.5px;
}

.planet-stats strong {
  color: #eef7ff;
  font-size: 12px;
  font-weight: 600;
}

#focus-button {
  width: 100%;
  margin-top: 22px;
  padding: 12px 8px;
}

.planet-nav {
  position: fixed;
  z-index: 5;
  left: 50%;
  bottom: 67px;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  max-width: 94%;
  padding: 8px;
  overflow-x: auto;
  border: 1px solid var(--line);
  background: rgba(3, 8, 22, 0.86);
  backdrop-filter: blur(12px);
  scrollbar-width: none;
}

.planet-nav::-webkit-scrollbar {
  display: none;
}

.planet-nav button {
  flex: 0 0 auto;
  padding: 12px 13px;
  background: transparent;
  border: 1px solid transparent;
  color: #92a5c4;
  font-size: 9px;
  letter-spacing: 1px;
  transition: 0.2s;
}

.planet-nav button:hover,
.planet-nav button.active {
  color: var(--cyan);
  border-color: var(--line);
  background: rgba(83, 232, 255, 0.08);
}

.control-hint {
  position: fixed;
  z-index: 3;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 9px;
  align-items: center;
  color: #8798b4;
  font-size: 9px;
  letter-spacing: 1px;
  white-space: nowrap;
  pointer-events: none;
}

.control-hint span {
  margin-left: 8px;
  color: var(--cyan);
  font-weight: 700;
}

@media (max-width: 800px) {
  .topbar {
    height: 65px;
    padding: 0 18px;
  }

  .brand {
    font-size: 15px;
    letter-spacing: 2px;
  }

  .live-status {
    font-size: 8px;
    letter-spacing: 0.7px;
  }

  .intro {
    top: 105px;
    left: 20px;
    width: 45%;
  }

  .intro h1 {
    font-size: clamp(30px, 7vw, 48px);
  }

  .intro-text {
    font-size: 11px;
    line-height: 1.6;
  }

  .intro .eyebrow {
    font-size: 8px;
    letter-spacing: 1.5px;
  }

  #explore-button {
    margin-top: 15px;
    padding: 12px;
    font-size: 9px;
  }

  .planet-panel {
    top: auto;
    bottom: 125px;
    right: 12px;
    width: 230px;
    max-height: 43vh;
    overflow-y: auto;
    padding: 17px;
    transform: none;
  }

  .planet-panel.hidden {
    transform: translateY(10px);
  }

  .planet-panel h2 {
    font-size: 22px;
  }

  .planet-number {
    margin-top: 10px;
  }

  .planet-stats {
    margin-top: 15px;
    gap: 12px;
  }

  #focus-button {
    margin-top: 15px;
  }

  .planet-nav {
    bottom: 54px;
    justify-content: flex-start;
    width: 96%;
  }

  .planet-nav button {
    padding: 11px 12px;
  }

  .control-hint {
    bottom: 19px;
    gap: 4px;
    font-size: 8px;
  }

  .control-hint span {
    margin-left: 4px;
  }
}

@media (max-width: 430px) {
  .intro {
    top: 100px;
    width: 55%;
  }

  .intro h1 {
    font-size: 33px;
    margin: 12px 0;
  }

  .intro-text {
    max-width: 190px;
  }

  .intro .eyebrow {
    max-width: 200px;
  }

  .planet-panel {
    width: 190px;
    bottom: 120px;
    padding: 13px;
  }

  .planet-panel h2 {
    font-size: 19px;
  }

  #planet-description {
    font-size: 11px;
  }

  .planet-stats {
    gap: 12px 7px;
  }

  .planet-stats strong {
    font-size: 10px;
  }

  .live-status {
    font-size: 7px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
