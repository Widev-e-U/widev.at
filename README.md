# WiDev Landing Page

A modern, creative developer landing page built with React, TypeScript, and shadcn/ui.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive layout
- 🌙 Dark mode support via Tailwind
- ⚡ Fast and optimized with Vite
- 🎯 Contact form with email integration
- 🎭 Smooth animations and transitions
- 🧩 Modular component architecture

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite + Bun
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Bun installed on your system

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
WidevHomepage/
├── src/
│   ├── assets/          # Images and static assets
│   │   └── Logo.png     # Company logo
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles with Tailwind
│   └── main.tsx         # Application entry point
├── public/              # Public assets
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Features Overview

### Hero Section
- Eye-catching gradient design
- Animated logo display
- Call-to-action buttons

### Services Section
- Three main service offerings
- Interactive card hover effects
- Detailed service descriptions

### About Section
- Company values and strengths
- Clean, organized layout

### Contact Section
- Fully functional contact form
- Direct email integration to jakob.winkler@widev.at
- Alternative email link

### Footer
- Company branding
- Social media links
- Copyright information

## Customization

### Changing Colors
Edit `src/index.css` to modify the color scheme variables.

### Adding Components
Use shadcn/ui CLI to add more components:
```bash
bunx shadcn@latest add [component-name]
```

### Modifying Content
Edit `src/App.tsx` to update text, sections, or functionality

## Contact

For any inquiries, reach out at: jakob.winkler@widev.at
