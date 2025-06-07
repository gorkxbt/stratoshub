# StratosHub - Decentralized AI Agents

A modern, professional website for StratosHub built with Next.js, React, and Tailwind CSS, featuring a white background with sky blue and marine blue accents.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with sky blue and marine blue color scheme
- **Responsive Layout**: Fully responsive design for desktop and mobile devices
- **Interactive Components**: Drag-and-drop agent builder with real-time chatbox
- **Modular Architecture**: Highly reusable components with code splitting
- **Accessibility**: Built with accessibility best practices and keyboard navigation
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience

## 📱 Pages & Features

### 🏠 Homepage
- Centered StratosHub logo
- Hero section with main title and subtitle
- Animated background elements
- Call-to-action button

### 🔧 The Hub (Agent Forge)
- Drag-and-drop interface for building AI agents
- Component library with predefined modules:
  - Data Source
  - Model Type (Grok 3, Llama 4, XGBoost, GNNs, PPO)
  - Strategy
  - Execution Layer
- Real-time chatbox appears after agent creation
- One agent per user limitation

### 🛒 Marketplace
- Modal overlay with "Coming Soon" message
- Progress bar and loading animations
- Blurred background effect

### 💰 $Stratos Token
- Interactive cards showcasing token use cases:
  - **Governance**: DAO participation and voting
  - **Staking**: Earn rewards and support the network
  - **Agent Licensing**: Access premium AI agents

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Drag & Drop**: React DnD
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and Tailwind utilities

## 🎨 Design System

### Color Palette
- **Sky Blue**: Primary accent color (`#0ea5e9` family)
- **Marine Blue**: Secondary accent color (`#1e40af` family)
- **White**: Primary background
- **Gray**: Text and subtle elements

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Responsive text sizing with semantic headings

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── hub/             # Agent Forge page
│   │   ├── marketplace/     # Marketplace page
│   │   └── stratos/         # $Stratos token page
│   └── components/          # Reusable components
│       ├── Header.tsx       # Navigation header
│       ├── Footer.tsx       # Site footer
│       ├── Hero.tsx         # Homepage hero section
│       ├── StratosLogo.tsx  # SVG logo component
│       ├── AgentForge.tsx   # Main agent builder
│       ├── ComponentLibrary.tsx # Draggable components
│       ├── AgentBuilder.tsx # Drop zone and builder
│       ├── ChatBox.tsx      # Agent interaction chat
│       ├── MarketplaceModal.tsx # Coming soon modal
│       └── TokenUseCases.tsx # STRATOS token features
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### Tailwind CSS
Custom color palette and animations defined in `tailwind.config.js`:
- Sky blue and marine blue color variations
- Custom animations (fade-in, slide-up, float)
- Responsive breakpoints

### Next.js
App Router configuration with TypeScript support and path aliases (`@/*`).

## 🎯 Key Components

### AgentForge
Main component orchestrating the agent building experience:
- Manages layout transitions when agent is created
- Coordinates between ComponentLibrary, AgentBuilder, and ChatBox

### Drag & Drop System
Implemented with React DnD:
- Components can be dragged from library to builder
- Visual feedback during drag operations
- Smooth animations and state management

### ChatBox
Interactive chat interface:
- Appears after agent creation
- Simulated AI responses
- Message history with timestamps
- Responsive design

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Traditional hosting with Node.js support

## 📄 License

This project is part of the StratosHub ecosystem. All rights reserved.

## 🤝 Contributing

This is a proprietary project for StratosHub. Please contact the development team for contribution guidelines.

---

**StratosHub**: Building the future of decentralized AI agents on Solana. 