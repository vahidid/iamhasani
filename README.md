# Personal Branding Website

A modern, creative personal branding website built with Next.js 16 and shadcn/ui, featuring a dark theme perfect for a software engineer portfolio.

## 🚀 Features

- **Next.js 16** - Latest version with Turbopack for fast development
- **shadcn/ui** - Beautiful, accessible component library
- **Dark Theme** - Elegant dark design with cyan/blue accent colors
- **Animated Components** - Creative animations using Framer Motion
- **Responsive Design** - Mobile-first approach, works on all devices
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling

## 🎨 Creative Components Used

- **Background Beams** - Animated gradient beams in the background
- **Typing Text** - Dynamic typing animation for role titles
- **Gradient Text** - Animated gradient text effects with neon glow
- **Motion Effects** - Smooth animations and transitions

## 📦 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Motion (React)
- GSAP
- Lucide Icons
- shadcn/ui

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

Dependencies are already installed. To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
iamhasani/
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx       # Hero/landing section
│   │   └── features-section.tsx   # Features showcase
│   └── ui/
│       ├── background-beams.tsx   # Animated background
│       ├── typing-text.tsx        # Typing animation
│       └── gradient-text.tsx      # Gradient text effect
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Customization

### Update Your Information

1. **Edit Hero Section** ([components/sections/hero-section.tsx](components/sections/hero-section.tsx)):
   - Change "Your Name" to your actual name
   - Update the typing text roles
   - Modify the description text
   - Add your social media links (GitHub, LinkedIn, Email)

2. **Update Metadata** ([app/layout.tsx](app/layout.tsx)):
   - Change the title and description

3. **Customize Colors**:
   - The theme uses cyan/blue gradients
   - Edit [app/globals.css](app/globals.css) to change color schemes

### Features Section

The features section showcases your skills with animated cards. Edit [components/sections/features-section.tsx](components/sections/features-section.tsx) to customize:
- Feature titles
- Descriptions
- Icons
- Gradient colors

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 shadcn/ui Components

This project uses components from shadcn.io. To add more components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)

---

Built with ❤️ for software engineers who want to stand out
