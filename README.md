# Hussein Emam's Personal Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React.js, Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach ensuring great UX across all devices
- **Animated UI**: Smooth animations using Framer Motion
- **AWS Integration**: User authentication with Amazon Cognito
- **Component-Based**: Modular architecture for easy maintenance
- **Performance Optimized**: Fast loading times with Vite's build optimization

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18.2.0
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Authentication**: AWS Cognito
- **UI Components**: Headless UI

## 📦 Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── assets/
│   ├── styles/
│   ├── utils/
│   └── App.jsx
├── docs/
│   ├── cognito-signin-flow.puml
│   └── database-schema.puml
├── public/
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🌟 Key Features

1. **Professional Portfolio Showcase**
   - Project gallery with live demos and GitHub links
   - Skills and expertise presentation
   - Professional experience timeline

2. **Interactive UI Elements**
   - Smooth scroll navigation
   - Animated section transitions
   - Responsive navigation menu

3. **Contact Integration**
   - Contact form with validation
   - Social media links
   - Professional email integration

4. **AWS Integration**
   - Secure user authentication
   - Protected routes
   - Profile management

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Database Schema

The project includes a comprehensive database design for storing:
- User profiles
- Projects and their tags
- Skills and expertise levels
- Professional experiences
- Contact messages
- Social media links

Refer to `docs/database-schema.png` for the complete ERD.

## 🔐 Authentication Flow

The authentication system uses AWS Cognito for secure user management:
- User registration and login
- Multi-factor authentication
- Token management
- Session handling

See `docs/cognito-signin-flow.png` for the detailed flow diagram.

## 🛠️ Development

### Prerequisites
- Node.js >= 14.x
- npm >= 6.x
- AWS account for Cognito integration

### Code Style
- ESLint configuration for consistent code style
- Prettier for code formatting
- Husky for pre-commit hooks

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 🚀 Deployment

The website can be deployed to various platforms:
- Vercel
- Netlify
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Hussein Emam**
- Website: [husseinemam.com](https://husseinemam.com)
- GitHub: [@husseinemam](https://github.com/husseinemam)
- LinkedIn: [Hussein Emam](https://linkedin.com/in/husseinemam)

## 🙏 Acknowledgments

- React.js community
- Tailwind CSS team
- AWS Documentation
- Open source contributors
