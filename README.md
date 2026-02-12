# University Guide Web Application

A modern, responsive university guide platform built with Next.js 16, React 19, and Tailwind CSS. This application helps students discover universities, explore courses, and connect with educational communities.

## 🚀 Features

### Core Functionality
- **University Discovery**: Browse and search through a comprehensive database of universities
- **Course Catalog**: Explore detailed course information with pricing and curriculum
- **Authentication System**: Secure login and registration for users
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Header**: Sticky navigation with scroll-based styling transitions

### Pages & Sections
- **Home**: Hero section, search functionality, top universities, and popular courses
- **Universities**: Browse and filter educational institutions
- **Courses**: Detailed course pages with curriculum and enrollment options
- **Community**: Connect with other students and educators
- **News**: Latest updates and educational news
- **About**: Information about the platform
- **Authentication**: Login, registration, and password recovery
- **Legal Pages**: Terms, privacy policy, cookie policy, FAQs

### Interactive Components
- **Dynamic Header**: Transforms from full-width to 80% width with rounded corners on scroll
- **Auth Modal**: Seamless authentication experience without page redirects
- **Search Functionality**: Advanced search for universities and courses
- **Newsletter Subscription**: Stay updated with latest educational content
- **Course Enrollment**: Interactive enrollment system with status tracking

## 🛠️ Technology Stack

### Frontend
- **Next.js 16**: React framework with App Router and Server Components
- **React 19**: Latest React version with modern hooks and features
- **TypeScript**: Type-safe development experience
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

### Fonts & Styling
- **Playfair Display**: Elegant serif font for headings (Google Fonts)
- **Geist Sans & Mono**: Modern sans-serif and monospace fonts (Vercel fonts)

### Development Tools
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Turbopack**: Fast development server and bundler

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Clone and Install
```bash
git clone <repository-url>
cd university-web
npm install
```

### Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
# etc.
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
university-web/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── auth/              # Authentication pages
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration page
│   │   └── forgot-password/ # Password recovery
│   ├── community/         # Community page
│   ├── contact/           # Contact page
│   ├── courses/           # Course pages
│   │   └── [id]/         # Dynamic course details
│   ├── faqs/              # FAQ page
│   ├── news/              # News page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── universities/      # Universities listing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── AuthModal.tsx     # Authentication modal
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header with dynamic styling
│   ├── Hero.tsx          # Hero section
│   ├── Newsletter.tsx    # Newsletter subscription
│   ├── PopularCourse.tsx # Popular courses display
│   ├── SearchSection.tsx # Search functionality
│   ├── TopUniversities.tsx # Top universities showcase
│   └── HelpSection.tsx   # Help and support section
├── public/               # Static assets
│   ├── logo.png         # Application logo
│   └── u*.jpg           # University images
└── README.md            # This file
```

## 🎨 Design Features

### Typography
- **Primary Font**: Playfair Display (elegant serif for headings)
- **Secondary Font**: Geist Sans (clean sans-serif for body text)
- **Monospace**: Geist Mono (for code and technical content)

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized images and assets

### Animations & Interactions
- Smooth scroll-based header transitions
- Hover effects on interactive elements
- Loading states and micro-interactions
- Page transitions with Framer Motion

## 🔧 Key Components

### Dynamic Header
The header features sophisticated scroll-based behavior:
- **Initial State**: Full-width (100%) header
- **Scrolled State**: 80% width, centered, rounded corners with top margin
- **Smooth Transitions**: 300ms duration for all state changes
- **Sticky Positioning**: Always accessible while scrolling

### Authentication System
- Modal-based authentication without page redirects
- Support for login and registration modes
- URL-based mode handling for deep linking
- Form validation and error handling

### Course Management
- Dynamic course pages with detailed information
- Curriculum display with weekly breakdown
- Instructor profiles and expertise
- Student reviews and ratings
- Enrollment system with status tracking

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Production Build
```bash
npm run build
npm start
```

### Environment Setup
Ensure all environment variables are properly configured for production:
- API endpoints
- Authentication secrets
- Database connections
- Third-party service keys

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Implement responsive design principles
- Write semantic HTML5

### Component Structure
- Keep components focused and reusable
- Use proper TypeScript interfaces
- Implement proper error boundaries
- Add loading states where appropriate
- Document complex logic

### Performance Optimization
- Optimize images with Next.js Image component
- Use dynamic imports for large components
- Implement proper caching strategies
- Minimize bundle size
- Use React.memo where beneficial

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the FAQ page
- Contact through the community page

## 🌟 Live Demo

Check out the live application: [University Guide](https://university-web-two.vercel.app)

---

Built with ❤️ using Next.js, React, and Tailwind CSS