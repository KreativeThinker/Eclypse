# Eclypse

A modern e-commerce application built for internship application demonstration.

## Developer

**Anumeya Sehgal**  
Email: anumeyasehgal@proton.me

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

## Project Structure

```
.
├── backend
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── src
│   │   ├── index.ts
│   │   └── routes
│   │       ├── buy.ts
│   │       ├── product.ts
│   │       └── testimonials.ts
│   └── tsconfig.json
├── frontend
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── fonts
│   │   │   ├── helvetica-neue-bold.ttf
│   │   │   ├── helvetica-neue-regular.ttf
│   │   │   ├── helvetica-neue-thin.ttf
│   │   │   └── montreal-neue-regular.otf
│   │   ├── icons
│   │   │   ├── arrow.svg
│   │   │   ├── chevron.svg
│   │   │   └── copyright.svg
│   │   ├── logo.jpg
│   │   └── media
│   │       ├── avatars
│   │       │   ├── man1.jpg
│   │       │   ├── woman1.jpg
│   │       │   └── woman2.jpg
│   │       ├── images
│   │       │   ├── cloth-1.jpg
│   │       │   ├── cutting-fabric.jpg
│   │       │   ├── hand-in-pocket.jpg
│   │       │   ├── product-back-long.png
│   │       │   ├── product-back.png
│   │       │   └── product-side.png
│   │       └── videos
│   │           ├── video-1.mp4
│   │           ├── video-2.mp4
│   │           └── video-3.mp4
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── buy
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components
│   │   │   ├── faq.tsx
│   │   │   ├── layout
│   │   │   │   ├── checkoutHeader.tsx
│   │   │   │   ├── footer.tsx
│   │   │   │   └── navbar.tsx
│   │   │   ├── shop
│   │   │   │   ├── addressForm.tsx
│   │   │   │   ├── orderSummary.tsx
│   │   │   │   ├── product.tsx
│   │   │   │   └── sizeSelector.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── ui
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── icon.tsx
│   │   │       └── input.tsx
│   │   └── utils
│   │       └── api.ts
│   └── tsconfig.json
├── README.md
└── shared
    └── types
        └── index.ts

22 directories, 56 files
```

## Features

- Modern e-commerce interface
- Product catalog and detailed views
- Shopping cart functionality
- Checkout process with address forms
- Customer testimonials section
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Shared types between frontend and backend

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KreativeThinker/Eclypse.git
cd Eclypse
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
pnpm install

# Install frontend dependencies
cd ../frontend
pnpm install
```

### Development

1. Start the backend server:
```bash
cd backend
pnpm dev
```

2. Start the frontend development server:
```bash
cd frontend
pnpm dev
```

The application will be available at `http://localhost:3000` with the API running on the configured backend port.

## Repository

https://github.com/KreativeThinker/Eclypse

## Contact

For questions or inquiries, please contact Anumeya Sehgal at anumeyasehgal@proton.me
