# MLE Made — Luxury Cosmetic Tattoo Studio

A premium, production-quality website for MLE Made, a boutique cosmetic tattoo and fine line tattoo studio.

## 🎨 Design

The website features a moody, sophisticated editorial aesthetic inspired by luxury beauty brands like Aesop, SKKN, and Bang Bang Tattoo. The color palette uses warm blacks, charcoal, deep olive, soft sage, warm ivory, and brushed gold accents.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # All page sections (Hero, About, Services, etc.)
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── utils/              # Animation variants, constants
├── App.tsx             # Main application
├── main.tsx            # Entry point
└── index.css           # Design system & Tailwind config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy to Firebase
```bash
# First time setup
npm install -g firebase-tools
firebase login
firebase init

# Deploy
firebase deploy
```

## 🔧 Configuration

1. Copy `.env.example` to `.env` and fill in your values
2. Update `firebase.json` and `.firebaserc` with your Firebase project ID
3. Add `FIREBASE_SERVICE_ACCOUNT` secret to your GitHub repository for CI/CD

## 📋 Sections

1. **Hero** — Cinematic full-screen hero with animated gradient background
2. **About** — Editorial split-layout introducing Emily
3. **Services** — Premium service cards with hover animations
4. **Portfolio** — Masonry gallery with category filters and lightbox
5. **Why Choose** — Feature icons highlighting studio differentiators
6. **Process** — Horizontal timeline of the client experience
7. **Testimonials** — Auto-advancing carousel with client reviews
8. **FAQ** — Elegant accordion with common questions
9. **Instagram** — Grid preview ready for API integration
10. **Booking** — Prominent CTA section
11. **Contact** — Business info, hours, and map placeholder
12. **Footer** — Minimal footer with links and social

## 📄 License

© 2026 MLE Made. All rights reserved.
