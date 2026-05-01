![image](/percent/public/PercentTitleLogo.png)

# [Percent](https://type-percent.vercel.app/)


A web-app aimed to make designing typefaces more approachable and streamlined while educating beginners on best practices

---

## ✨ Features

- **Node-based glyph editing** with live control over circle size and position
- **System Design mode** for editing linked letter groups together
- **Editor mode** for single-glyph refinement and direct typing previews
- **Built-in tutorials** (page-specific, replayable) to guide first-time users
- **Font export pipeline** with preview tools and downloadable outputs
- **Persistent workspace state** via LocalStorage so progress is retained

---

## ⚙️ How It Works

Percent represents each glyph as a configurable base path plus adjustable control nodes.
As nodes are resized or moved, the app recomputes glyph geometry in real time and renders updated outlines immediately in the workspace.
In System mode, linked nodes across grouped glyphs update together for consistent type systems; in Editor mode, you can focus on precise single-letter edits and test results by typing directly in the canvas.

---

## 🚀 Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Language**: JavaScript
- **Font Parser**: Opentype.js
- **Styling**: CSS / Tailwind
- **Data storage**: LocalStorage
- **Hosting**: Vercel

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YilmazMelih/Percent.git
cd Percent/percent
```

Install dependencies:

```bash
npm install
```

---

## 🧑‍💻 Development

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🏗️ Build

To create a production build:

```bash
npm run build
```
---


