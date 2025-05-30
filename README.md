# 🚀 Ahmed Ayman Portfolio Website

A modern, responsive portfolio website showcasing data science and machine learning projects with stunning animations and professional design.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://ahmedayman.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/AhmedAyman4/Pwebsite)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ahmed-alhofy/)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:ahmedalhofy42@gmail.com)

## 📖 Table of Contents

- [🌟 Overview](#-overview)
- [📁 Project Structure](#-project-structure)
- [⚡ Tech Stack](#-tech-stack)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Development](#️-development)
- [📄 License](#-license)

## 🌟 Overview

This portfolio website represents my journey as a data scientist and machine learning engineer. Built with modern web technologies, it features:

- **Interactive Project Showcase**: Detailed presentations of ML and data science projects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Contact Integration**: Direct contact form and social media links

## 📁 Project Structure

```
Pwebsite/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 layout.tsx          # Root layout with theme provider
│   │   ├── 📄 page.tsx            # Main page component
│   │   └── 📄 globals.css         # Global styles and custom CSS
│   ├── 📁 components/
│   │   ├── 🏠 HeroSection.jsx     # Landing section with intro
│   │   ├── 🎯 ProjectsComponent.tsx # Interactive projects showcase
│   │   ├── 🛠️ SkillsSection.tsx   # Skills and technologies display
│   │   ├── 📧 ContactSection.tsx  # Contact form with validation
│   │   ├── 🧭 Navbar.tsx          # Navigation with theme toggle
│   │   └── 📁 ui/                 # Reusable UI components
│   ├── 📁 assets/                 # Images and media files
│   └── 📁 data/                   # Project data and configurations
├── 📁 public/
│   ├── 📁 images/                 # Project screenshots and assets
│   └── 📄 Ahmed_Ayman_Alhofy.pdf  # Latest resume/CV
├── 📄 package.json                # Dependencies and scripts
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
└── 📄 next.config.js              # Next.js configuration
```

## ⚡ Tech Stack

### Frontend Framework

- **Next.js 15** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **CSS Modules** - Scoped styling

### Animations & Interactions

- **GSAP** - Professional-grade animation library
- **Framer Motion** - Motion library for React
- **CSS Transitions** - Smooth hover effects

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

## ✨ Features

### 🎨 Design & UX

- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🌙 **Dark/Light Mode**: Persistent theme switching with smooth transitions
- ⚡ **Smooth Animations**: GSAP and Framer Motion powered interactions
- 🎯 **Modern UI**: Clean, professional design with glassmorphism effects

### 🔧 Functionality

- 📄 **Resume Integration**: Downloadable PDF resume
- 🎠 **Project Carousel**: Interactive showcase with filtering
- 📧 **Contact Form**: Functional contact form with validation
- 🔗 **Social Links**: Direct links to GitHub, LinkedIn, and email
- 🚀 **Performance Optimized**: Fast loading with Next.js optimization

### 📊 Project Features

- **Detailed Descriptions**: Comprehensive project explanations
- **Technology Badges**: Visual tech stack indicators
- **Live Demo Links**: Direct access to project demos
- **GitHub Integration**: Repository links for code review

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

```powershell
# Clone the repository
git clone https://github.com/AhmedAyman4/Pwebsite.git

# Navigate to project directory
cd Pwebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

🌐 Open [http://localhost:9002](http://localhost:9002) to view in your browser.

## 🛠️ Development

### Available Scripts

```powershell
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

### Environment Setup

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:9002
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### Customization

1. **Update Personal Information**: Edit project data in `src/data/`
2. **Modify Styling**: Customize Tailwind config in `tailwind.config.js`
3. **Add Projects**: Update project arrays in components
4. **Change Theme**: Modify color schemes in CSS variables

## 📞 Contact

**Ahmed Ayman Alhofy**

- 📧 Email: [ahmedalhofy42@gmail.com](mailto:ahmedalhofy42@gmail.com)
- 💼 LinkedIn: [ahmed-alhofy](https://www.linkedin.com/in/ahmed-alhofy/)
- 🐙 GitHub: [AhmedAyman4](https://github.com/AhmedAyman4)
- 🌐 Portfolio: [ahmedayman.vercel.app](https://ahmedayman.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by Ahmed Ayman</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
