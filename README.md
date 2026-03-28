# DCS PLM - Next.js Website

A modern, performant Next.js application recreating the DCS PLM website with enhanced UI/UX, smooth animations, and optimal performance.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Forms**: React Hook Form with Zod validation
- **Carousel**: Swiper.js

## 📦 Installation

```bash
cd nextjs-app
npm install
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/                # App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── about-us/       # About page
│   │   ├── contact-us/     # Contact page
│   │   ├── blogs/          # Blog pages
│   │   └── ...             # Other pages
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   ├── home/           # Home page components
│   │   └── ui/             # Reusable UI components
│   └── lib/                # Utility functions
├── public/                 # Static assets
│   ├── images/            # Images
│   └── logo.png           # Logo
└── package.json
```

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth page transitions and animations
- ✅ SEO optimized with proper meta tags
- ✅ Image optimization with WebP format
- ✅ Sticky header with dropdown navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Form validation
- ✅ Animated counters and scroll effects
- ✅ Hero slider with auto-play
- ✅ Service cards with hover effects

## 📄 Pages

- Homepage
- About Us
- Contact Us
- Blogs
- LMS Courses
- Services Pages (Drug Discovery, Clinical Research, etc.)
- Career Pages (Join Us, Hire From Us)
- Placement Pages

## 🚀 Deployment

This project can be deployed on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📝 License

© 2025 DCS PLM. All rights reserved.
