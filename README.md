# 🌐 Freddy Samjacob V — Portfolio

> **A creative, interactive, and responsive developer portfolio** built using **React**, **Tailwind CSS**, and **Framer Motion**, showcasing my projects, skills, and achievements in a unique storytelling layout.

---

## ✨ Overview

This portfolio is designed as a dynamic and visually immersive site to highlight my technical and design abilities.  
It combines smooth animations, interactive UI elements, and detailed case study pages for my major projects — **DigiBridge**, **AquaVision**, and **ClickShield**.

---

## 🧩 Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| **Frontend Framework** | [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom CSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **3D & Interaction** | Three.js / PlayCanvas (for 3D elements like *Lanyard*) |
| **Fonts** | Figtree, Sue Ellen Francisco, Stadium Display |
| **Build Tool** | Vite |
| **Version Control** | Git & GitHub |

---

## 🧠 Features

- 🎨 **Custom Design Language** — Built from scratch with unique fonts, hand-drawn cursor icons, and playful animations.
- ⚡ **Framer Motion Animations** — Smooth transitions and scroll reveals across pages.
- 🧭 **Multi-Page Routing** — `/`, `/aboutme`, `/digibridge`, `/aquavision`, `/clickshield`.
- 🧱 **Component-Driven Architecture** — Each section modularized for easy updates.
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile.
- 🧰 **Custom Cursors** — Dynamic cursor switching (normal, link, pencil, thumb).
- 📜 **Project Case Studies** — Each project has its own detailed, story-driven page.
- 🧍‍♂️ **Personal Touch** — Integrated mascot animations and creative typography.


---

## 📖 Page Breakdown

### 🏠 **Home Page (`/`)**
- Hero intro with animated greeting.
- Custom cursor & parallax desk section.
- Interactive dice & sticky notes.
- Projects list with preview GIFs.
- Footer contact with mascot.

### 👨‍💻 **About Me (`/aboutme`)**
- Introduction + 3D *Lanyard* component.
- Skills grid with icons and motion effects.
- Experience Timeline (NIOT, Nanotechnologies, IEEE).
- Services overview (Frontend, UI/UX, Integration, Design).

### 🧠 **DigiBridge (`/digibridge`)**
- Smart India Hackathon 2023 Finalist project.
- Problem → Solution → AI-based early warning system.
- Desktop & mobile app walkthroughs.
- NEP 2020 alignment and impact story.

### 🌊 **AquaVision (`/aquavision`)**
- Underwater robotics project, winner of Kurukshetra 2025.
- Problem-solution-impact flow.
- ML-based pollution detection.
- Payload, dashboard, and video showcase.
- Real-world photos and hackathon highlights.

### 🛡️ **ClickShield (`/clickshield`)**
- Cybersecurity project (under development).
- “Under Construction” page with animated mascot.

---

## 🎨 Design System

| Variable | Description | Value |
|-----------|-------------|-------|
| `--color-dark` | Primary text | `#010101` |
| `--color-niceorange` | Accent / CTA | `#ff7557` |
| `--color-light` | Background | `#f8f8f8` |
| `--font-figtree` | Main font | `"Figtree", sans-serif` |
| `--font-sue` | Artistic font | `"Sue Ellen Francisco", cursive` |

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/freddysamjacob/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the app locally
npm run dev

# Build for production
npm run build
