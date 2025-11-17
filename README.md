# Gurukul Reading Program

A modern web application for viewing and tracking student reading progress data from SharePoint. Built with React, TypeScript, and Vite, featuring a comprehensive UI component library and seamless SharePoint integration.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
  - [Development Workflow](#development-workflow)
  - [Code Style Guidelines](#code-style-guidelines)
  - [Component Development](#component-development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 🎯 Overview

The Gurukul Reading Program is a web-based viewer that displays student reading conversations and progress data stored in SharePoint Excel files. It provides an embedded, interactive interface for educators and administrators to monitor student reading activities.

## ✨ Features

- **Live SharePoint Integration**: Real-time embedded Excel data viewer
- **Modern UI Components**: Comprehensive component library built with Radix UI
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Full TypeScript support
- **Fast Development**: Hot module replacement with Vite
- **Motion & Animations**: Smooth transitions using Framer Motion
- **Accessible**: WCAG-compliant components
- **Theme Support**: Dark/light mode with next-themes
- **Static Web App Ready**: Configured for Azure Static Web Apps deployment

## 🛠 Tech Stack

### Core
- **React 19** - UI library
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool & dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Additional Libraries
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching & caching
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **date-fns** - Date utilities

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**
- **Windows OS** (native modules are configured for Windows x64)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/nagarajpatil/GurukulReadingProgram.git
cd GurukulReadingProgram
```

2. **Install dependencies**

```bash
npm install
```

> **Note for Windows Users**: The project includes native bindings for Windows x64. If you encounter module errors related to `@rollup/rollup-win32-x64-msvc` or `@swc/core-win32-x64-msvc`, they should be automatically installed. If not, run:

```bash
npm install @rollup/rollup-win32-x64-msvc @swc/core-win32-x64-msvc
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Other Available Scripts

- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint
- **`npm run optimize`** - Optimize Vite dependencies

## 📁 Project Structure

```
GurukulReadingProgram/
├── src/
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ... (30+ components)
│   ├── hooks/               # Custom React hooks
│   │   └── use-mobile.ts
│   ├── lib/                 # Utilities
│   │   └── utils.ts
│   ├── styles/              # Global styles
│   │   └── theme.css
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── ErrorFallback.tsx    # Error boundary component
│   └── index.css            # Global CSS
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── staticwebapp.config.json # Azure Static Web App config
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**

Click the "Fork" button at the top right of the repository page.

2. **Create a feature branch**

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-student-filter`
- `fix/sharepoint-embed-error`
- `docs/update-readme`

3. **Make your changes**

Follow the code style guidelines below and ensure your code is well-documented.

4. **Test your changes**

```bash
# Run the dev server
npm run dev

# Run linting
npm run lint

# Build to ensure no errors
npm run build
```

5. **Commit your changes**

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add student filter component"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

6. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

7. **Create a Pull Request**

- Go to the original repository
- Click "New Pull Request"
- Select your fork and branch
- Provide a clear description of your changes
- Reference any related issues

### Code Style Guidelines

#### TypeScript
- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type unless absolutely necessary
- Use functional components with hooks

#### React Components
- Use functional components
- Implement proper prop types
- Follow the single responsibility principle
- Keep components small and focused

Example:
```tsx
interface StudentCardProps {
  name: string
  progress: number
  onViewDetails: (id: string) => void
}

export function StudentCard({ name, progress, onViewDetails }: StudentCardProps) {
  // Component logic
  return (
    // JSX
  )
}
```

#### Styling
- Use Tailwind CSS utility classes
- Follow the existing component patterns
- Maintain responsive design (mobile-first)
- Use CSS variables from `theme.css`

#### File Organization
- Place components in appropriate directories
- Use named exports for components
- Keep related files together
- Use index files for cleaner imports

### Component Development

When creating new UI components:

1. **Use shadcn/ui patterns**
```bash
# If adding a new shadcn component
npx shadcn@latest add [component-name]
```

2. **Follow the established structure**
```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary"
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component }
```

3. **Document props**
- Add JSDoc comments for complex props
- Provide usage examples in comments

### Pull Request Guidelines

- **Keep PRs focused**: One feature/fix per PR
- **Update documentation**: Include relevant documentation updates
- **Add tests**: If applicable (when testing infrastructure is added)
- **Ensure it builds**: PR must build successfully
- **No linting errors**: Code must pass ESLint
- **Responsive**: Ensure changes work on mobile/tablet/desktop

## 🏗 Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Build Optimization

The project uses:
- **SWC** for fast transpilation
- **Vite** for optimized bundling
- **Tree shaking** for smaller bundle sizes
- **Code splitting** for lazy loading

## 🚀 Deployment

The project is configured for **Azure Static Web Apps** deployment.

### Configuration Files

- `staticwebapp.config.json` - Azure SWA configuration
- Content Security Policy configured for SharePoint embeds
- Navigation fallback for SPA routing

### Deploy to Azure

Follow the [DEPLOYMENT.md](./DEPLOYMENT.md) guide for detailed deployment instructions.

## 🔧 Troubleshooting

### Common Issues

**1. Native Module Errors**

If you see errors about missing native modules:

```bash
npm install @rollup/rollup-win32-x64-msvc @swc/core-win32-x64-msvc
```

**2. Port Already in Use**

If port 5173 is in use, Vite will automatically use the next available port.

**3. TypeScript Errors**

Ensure you're using TypeScript 5.7:

```bash
npm install typescript@~5.7.2
```

**4. SharePoint Embed Issues**

- Check Content Security Policy in `staticwebapp.config.json`
- Verify SharePoint URLs are correct in `App.tsx`
- Ensure proper authentication if required

**5. Build Failures**

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## 📝 License

See the [LICENSE](./LICENSE) file for details.

---

## 🆘 Need Help?

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check existing docs and code comments

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [shadcn/ui](https://ui.shadcn.com)

---

**Happy Contributing! 🎉**
