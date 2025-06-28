# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React.js and Express.js, showcasing a front-end developer's professional work and experience. The application features a clean, responsive design with dark/light theme support and email contact functionality.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React.js with TypeScript, Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Replit-optimized with autoscale deployment target

## Key Components

### Frontend Architecture
- **Component-Based Design**: Modular React components for each portfolio section
- **Theme System**: Custom dark/light theme provider with persistent storage
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **UI Library**: shadcn/ui components for consistent design system
- **State Management**: React Query for server state, React hooks for local state

### Backend Architecture
- **Express Server**: RESTful API structure ready for future endpoints
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Development Tools**: Hot reload with Vite integration in development
- **Error Handling**: Centralized error handling middleware

### Database Design
- **Schema**: User model defined with Drizzle ORM
- **Migration Support**: Drizzle Kit configured for database migrations
- **Type Safety**: Generated TypeScript types from schema

## Data Flow

1. **Client Requests**: Frontend makes requests to Express API
2. **Server Processing**: Express routes handle business logic
3. **Data Storage**: Storage interface manages data persistence
4. **Response**: JSON responses sent back to client
5. **UI Updates**: React Query manages cache and UI updates

## External Dependencies

### Core Technologies
- **React 18**: Component framework with hooks
- **Express.js**: Web application framework
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI Components
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Unstyled component primitives
- **Lucide React**: Icon library

### Database & ORM
- **PostgreSQL**: Production database
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Serverless PostgreSQL driver

### Email Integration
- **EmailJS**: Client-side email service for contact form

### Development Tools
- **Replit Plugins**: Development environment integration
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundler

## Deployment Strategy

The application is configured for Replit's autoscale deployment:

1. **Development**: `npm run dev` starts both client and server with hot reload
2. **Build Process**: Vite builds client assets, ESBuild bundles server
3. **Production**: `npm run start` serves the built application
4. **Database**: PostgreSQL module configured for production data persistence

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built client assets
- **Database**: Environment variable-based connection string

## Recent Changes

- **June 26, 2025**: Added comprehensive Education section after About Me
  - Bachelor of Computer Science from University of Karachi, UBIT (2021-2024)
  - Intermediate from Government Dehli College (2017-2019)
  - Timeline-based design with academic achievements showcase
- **June 26, 2025**: Enhanced Future Goals section
  - Added SQL & Java Spring Boot learning objectives
  - Restructured layout to 4-column grid for better presentation
- **June 26, 2025**: Fixed CSS import ordering issue for proper styling
- **June 26, 2025**: Initial portfolio migration from ReactJS to modern stack
  - Implemented dark theme with yellow (yellow) accents
  - Created all portfolio sections with Faraz Alam's professional information

## User Preferences

Preferred communication style: Simple, everyday language.