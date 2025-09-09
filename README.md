# NovaTrend - E-commerce Platform

A modern, full-stack e-commerce application built with Next.js 15, featuring Stripe payment integration, responsive design, and a complete shopping experience.

## 🚀 Features

- **Product Catalog**: Browse and search through products with real-time filtering
- **Product Details**: Detailed product pages with image galleries and descriptions
- **Shopping Cart**: Add/remove items with persistent cart state using Zustand
- **Payment Processing**: Secure checkout powered by Stripe
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Product Carousel**: Dynamic product showcase on homepage
- **Search Functionality**: Real-time product search by name and description
- **Smart Navigation**: Modern navbar with active states, icons, and smooth animations
- **Professional Footer**: Complete footer with links, social media, newsletter signup
- **Modern Hero Section**: Gradient backgrounds, call-to-action buttons, and visual effects
- **Feature Highlights**: Service benefits display (free shipping, secure payment, quality guarantee)
- **Enhanced Mobile Experience**: Animated mobile menu with consistent design language

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payment**: Stripe Checkout
- **UI Components**: Radix UI + Custom Components
- **Icons**: Heroicons, Lucide React
- **Deployment**: Vercel-ready

## 📦 Dependencies

### Core Dependencies

- `next`: 15.5.0
- `react`: 19.1.0
- `typescript`: ^5
- `stripe`: ^18.4.0
- `zustand`: ^5.0.8

### UI & Styling

- `tailwindcss`: ^4
- `@radix-ui/react-slot`: ^1.2.3
- `lucide-react`: ^0.540.0
- `@heroicons/react`: ^2.2.0

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Stripe account for payment processing

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd e-com
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
e-com/
├── app/                    # Next.js App Router pages
│   ├── checkout/          # Checkout page and actions
│   ├── products/          # Product listing and detail pages
│   ├── success/           # Payment success page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── carousel.tsx      # Product carousel
│   ├── navbar.tsx        # Navigation bar
│   ├── product-card.tsx  # Product card component
│   └── product-list.tsx  # Product listing component
├── lib/                  # Utility libraries
│   ├── stripe.ts         # Stripe configuration
│   └── utils.ts          # Helper functions
├── store/                # State management
│   └── cart-store.ts     # Shopping cart store
└── public/               # Static assets
```

## 🎯 Key Features

### Shopping Cart

- Persistent cart state using Zustand with localStorage
- Add/remove items with quantity management
- Real-time cart count in navigation
- Cart persistence across browser sessions

### Product Management

- Dynamic product loading from Stripe
- Product search and filtering
- Responsive product grid layout
- Detailed product pages with image galleries

### Payment Integration

- Secure Stripe Checkout integration
- Support for multiple payment methods
- Automatic cart clearing after successful payment
- Error handling and redirect management

### Responsive Design

- Mobile-first approach
- Responsive navigation with mobile menu
- Adaptive product grid layouts
- Touch-friendly interactions

## 🔧 Configuration

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your secret key from the Stripe dashboard
3. Add it to your `.env.local` file
4. Configure webhook endpoints for production

### Environment Variables

- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `NEXT_PUBLIC_BASE_URL`: Base URL for your application

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created by Isaac Zhou - [GitHub](https://github.com/isaaczhou)

---

## 📝 Recent Updates

### Navigation Bar Enhancement (Latest)

#### 🧭 **Modern Navigation Design**

- **Active State Indicators**:

  - Smart path detection using `usePathname()`
  - Blue highlight for current page
  - Small dot indicator at bottom of active links
  - Consistent styling across desktop and mobile

- **Enhanced Link Styling**:

  - Icon + text combination for better UX
  - Home: HomeIcon, Products: ShoppingBagIcon, Checkout: ShoppingCartIcon
  - Smooth hover transitions with background color changes
  - Professional rounded button appearance

- **Improved Visual Effects**:
  - Semi-transparent background with backdrop blur (`bg-white/95 backdrop-blur-md`)
  - Subtle border and refined shadows
  - Logo hover scale effect
  - Gradient text effect for brand name

#### 📱 **Mobile Menu Improvements**

- **Animated Menu Toggle**:

  - Rotating hamburger/close icon animation
  - Smooth height and opacity transitions
  - Auto-close menu after navigation

- **Better Mobile Layout**:
  - Icon-text layout consistent with desktop
  - Active state indicators (colored dots)
  - Improved spacing and touch targets

#### 🛒 **Shopping Cart Enhancements**

- **Visual Improvements**:
  - Active state styling when on checkout page
  - Animated cart count badge with pulse effect
  - Smart count display (99+ for large numbers)
  - Better positioning and hover effects

#### 🔧 **Technical Features**

- Intelligent active state detection
- Responsive design with consistent experience
- Accessibility-friendly navigation
- Performance-optimized CSS transitions

### UI/UX Optimization

#### 🎨 Homepage Redesign

- **Modern Hero Section**:

  - Gradient background with blue-to-purple theme
  - Large typography with brand gradient text effect
  - Dual call-to-action buttons (primary + secondary)
  - Product image with shadow and hover effects
  - "New Collection Available" badge

- **Feature Benefits Section**:

  - Three-column layout showcasing key benefits
  - Icon-based cards with hover effects
  - Free shipping, secure payment, and quality guarantee highlights
  - Professional card design with shadows

- **Enhanced Product Showcase**:
  - Improved section headers and descriptions
  - Better spacing and typography
  - Call-to-action section with dark gradient background

#### 🦶 Complete Footer Redesign

- **Four-Column Layout**:

  - Brand section with customer rating display (5-star)
  - Quick navigation links
  - Customer service links
  - Contact information and social media

- **Advanced Features**:
  - Newsletter subscription form
  - Social media icons with hover effects
  - Payment security badges (Stripe + SSL)
  - Legal links (Privacy Policy, Terms of Service)
  - Responsive design for mobile devices

#### 🎯 Technical Improvements

- Enhanced accessibility with proper ARIA labels
- Improved semantic HTML structure
- Better responsive breakpoints
- Smooth transitions and hover effects
- Optimized image loading with `priority` flag

---

Built with ❤️ using Next.js and Stripe
