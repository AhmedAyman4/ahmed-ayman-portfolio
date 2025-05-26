# 🌟 Ahmed Ayman's Portfolio Website

<div align="center">
  <h3>Modern • Responsive • Interactive</h3>
  <p>A showcase of data science expertise and machine learning innovation</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
    <br/>
  
  [🌐 Live Demo](https://ahmedayman.vercel.app/) • [📧 Contact](mailto:ahmedalhofy42@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/ahmed-alhofy/)
</div>

---

## 📖 Overview

This is the personal portfolio website of **Ahmed Ayman**, an aspiring Data Scientist and Machine Learning Engineer currently studying Information Systems at the Faculty of Computers & AI, University of Sadat City. The website serves as a comprehensive showcase of skills, projects, and professional experience in the field of data science and AI.

## ✨ Key Features

### 🎨 **Modern Design & Experience**

- **Responsive Design** - Seamlessly adapts to all devices (desktop, tablet, mobile)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Animations** - GSAP-powered animations for engaging user experience
- **Interactive Elements** - Dynamic components with hover effects and micro-interactions
- **Glassmorphism UI** - Modern glass-like design elements with backdrop blur effects

### 🔧 **Advanced Functionality**

- **Resume Integration** - Preview and download resume functionality with modal dialog
- **Project Carousel** - Interactive showcase of featured projects with navigation
- **Skills Animation** - Animated skill badges with scroll-triggered reveals
- **Contact Integration** - Direct email links and social media connections
- **Performance Optimized** - Image optimization and lazy loading for fast performance

### 📱 **Navigation & Sections**

- **Hero Section** - Professional introduction with animated typing effects
- **Projects Showcase** - Featured projects carousel + grid layout for all projects
- **Experience Timeline** - Interactive accordion-style professional experience
- **Skills Section** - Animated technology stack and competencies
- **Contact Section** - Professional contact information and social links

## 🚀 Featured Projects

The portfolio showcases several key projects demonstrating expertise in data science and machine learning:

### 🤖 **Semantic Book Recommender with LLMs**

> Advanced recommendation system using Large Language Models

- **Tech Stack:** Python, LangChain, Chroma, Pandas
- **Features:** Vector database, semantic search, sentiment analysis, zero-shot classification
- **Interface:** Gradio web application
- **[Live Demo](https://huggingface.co/spaces/ahmed-ayman/Semantic-Book-Recommender-with-LLMs)** | **[GitHub](https://github.com/AhmedAyman4/llm-semantic-book-recommender)**

### 📊 **Campaign Conversion Predictor**

> Machine learning model for digital marketing campaign optimization

- **Tech Stack:** Python, Scikit-learn, Gradio, EDA
- **Features:** Real-time predictions, Random Forest model, demographic analysis
- **[Live Demo](https://huggingface.co/spaces/ahmed-ayman/Predict-Conversion-in-Digital-Marketing)** | **[GitHub](https://github.com/AhmedAyman4/customer-conversion-predictor)**

### 📈 **HR Analytics Dashboard**

> Comprehensive workforce analysis and visualization

- **Tech Stack:** Tableau, Data Visualization, HR Analytics
- **Insights:** 16% attrition rate analysis, demographic trends, workforce optimization
- **[GitHub](https://github.com/AhmedAyman4/HR-Analytics-in-Tableau)**

### 🎬 **Movie Library Application**

> React-based movie discovery platform

- **Tech Stack:** React, Vite, TailwindCSS, Appwrite, TMDb API
- **Features:** Movie search, trending titles, detailed information
- **[Live Demo](https://movie-library-blush.vercel.app/)** | **[GitHub](https://github.com/AhmedAyman4/movie-library)**

### 🎭 **Movie Sentiment Analysis**

> Multi-model sentiment prediction application

- **Tech Stack:** Scikit-learn, Transformers, TensorFlow, Gradio
- **Features:** Three different models, interactive web interface
- **[Live Demo](https://huggingface.co/spaces/ahmed-ayman/Sentiment-Analysis)** | **[GitHub](https://github.com/AhmedAyman4/Movie-Review-Sentiment-Analysis-App)**

## 🛠️ Technology Stack

### **Frontend Framework**

- **Next.js 15.3.0** - React framework for production
- **TypeScript** - Type-safe development
- **React 18.3.1** - UI library with hooks

### **Styling & Design**

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **CSS Custom Properties** - Theme variables and customization

### **UI Components & Libraries**

- **Radix UI** - Accessible, unstyled UI primitives
  - Dialog, Dropdown Menu, Accordion, Tabs, etc.
- **Lucide React** - Beautiful icon library
- **React Icons** - Popular icon sets
- **Class Variance Authority** - Component variant management

### **Animations & Interactions**

- **GSAP 3.13.0** - Professional animation library
- **Scroll Trigger** - Scroll-based animations
- **Framer Motion principles** - Smooth transitions

### **Development Tools**

- **TypeScript 5.0** - Static type checking
- **PostCSS** - CSS processing
- **ESLint & Prettier** - Code quality and formatting
- **GitHub Pages** - Deployment platform

### **Data Science & ML Tools** _(Featured in projects)_

- **Python** - Primary programming language
- **Pandas & NumPy** - Data manipulation and analysis
- **Scikit-learn** - Machine learning algorithms
- **LangChain** - LLM application framework
- **Gradio** - ML web interfaces
- **Tableau** - Data visualization platform

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager
- Git

### **Installation**

```bash
# Clone the repository
git clone https://github.com/AhmedAyman4/Pwebsite.git

# Navigate to project directory
cd Pwebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### **Available Scripts**

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start development server (Turbopack enabled) |
| `npm run build`     | Build for production                         |
| `npm run start`     | Start production server                      |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Run TypeScript compiler check                |
| `npm run deploy`    | Deploy to GitHub Pages                       |

### **Development Server**

- **Local:** http://localhost:9002
- **Network:** Available on local network
- **Hot Reload:** Instant updates during development

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Navbar.tsx        # Navigation with resume functionality
│   ├── HeroSection.jsx   # Landing section with intro
│   ├── ProjectsComponent.tsx # Projects showcase
│   ├── ExperienceTimeline.tsx # Professional experience
│   ├── SkillsSection.tsx # Technical skills
│   ├── ContactSection.tsx # Contact information
│   ├── FractalTree.tsx   # Animated background element
│   ├── Footer.tsx        # Site footer
│   └── projectsData.tsx  # Project information data
├── assets/               # Static assets
└── lib/                  # Utility functions
```

## 🎨 Design System

### **Color Palette**

- **Primary:** `#4de9d2` (Teal gradient)
- **Secondary:** Purple/Blue gradients
- **Dark Mode:** Gray scale with accent colors
- **Light Mode:** Clean whites with subtle grays

### **Typography**

- **Primary Font:** System fonts (sans-serif)
- **Accent Font:** Patrick Hand (Google Fonts)
- **Responsive:** Fluid typography scales

### **Components**

- **Consistent spacing** using Tailwind utilities
- **Accessible** color contrasts and focus states
- **Interactive** hover and focus animations
- **Responsive** breakpoints for all devices

## 📊 Performance & Optimization

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Tree Shaking** - Unused code elimination
- **Lazy Loading** - Components and images load on demand
- **TypeScript** - Compile-time error checking
- **Build Optimization** - Production-ready builds

## 🌐 Deployment

The website is deployed using **GitHub Pages** with automatic deployment:

1. **Production Build:** `npm run build`
2. **Static Export:** Next.js static export
3. **GitHub Actions:** Automated deployment pipeline
4. **Custom Domain:** Available at https://ahmedayman.vercel.app/

## 👨‍💻 About Ahmed Ayman

**Data Scientist & ML Engineer** | **Information Systems Student**

> "I create stuff sometimes." - Passionate about solving real-world problems with data and exploring AI technologies.

### **Professional Focus**

- **Machine Learning** - Model development and deployment
- **Data Analysis** - Statistical analysis and insights
- **Web Development** - Full-stack applications
- **AI Applications** - LLM integration and automation

### **Current Role**

- **DEPI (Oct 2024 - May 2025)** - Data Scientist
- **Previous:** CIB Egypt Intern (Jul 2024)

## 📞 Contact & Social

<div align="center">

**📧 Email:** [ahmedalhofy42@gmail.com](mailto:ahmedalhofy42@gmail.com)  
**💼 LinkedIn:** [ahmed-alhofy](https://www.linkedin.com/in/ahmed-alhofy/)  
**🐙 GitHub:** [AhmedAyman4](https://github.com/AhmedAyman4)  
**🏆 Credly:** [Professional Certifications](https://www.credly.com/users/ahmedayman)

</div>

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome! Please feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><strong>Built with ❤️ by Ahmed Ayman</strong></p>
  <p><em>Passionate about data science, machine learning, and creating meaningful impact through technology.</em></p>
</div>
