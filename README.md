# Faraz Alam Portfolio

A modern, responsive portfolio website built with React.js, Express.js, and Tailwind CSS featuring dark theme with yellow accents.

## Prerequisites

Before running this project on your PC, make sure you have:

- **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Download and Extract
Download the project files and extract them to your desired folder.

### 2. Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

### 3. Run the Project

**For Windows users (you're on Windows):**
```bash
dev.bat
```

**For Mac/Linux users:**
```bash
npm run dev
```

The portfolio will open automatically in your browser at `http://localhost:5000`

## Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check TypeScript types
npm run check
```

## Project Structure

```
├── client/src/          # Frontend React components
│   ├── components/      # Portfolio sections (Hero, About, etc.)
│   ├── pages/          # Main pages
│   └── hooks/          # Custom React hooks
├── server/             # Backend Express server
├── shared/             # Shared types and schemas
└── package.json        # Dependencies and scripts
```

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes
- **Contact Form** - Functional email contact form
- **Smooth Animations** - Framer Motion animations
- **Professional Sections** - Hero, About, Education, Experience, Projects, Skills, etc.

## Contact Form Setup (Optional)

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update the EmailJS configuration in `client/src/hooks/use-emailjs.ts`

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Build Tools**: Vite, ESBuild
- **UI Components**: Radix UI, Lucide React

## Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.

---

**Developed by Faraz Alam** - Front-End Developer