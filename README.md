# Portfolio Website

A responsive portfolio website built with Next.js and TailwindCSS, based on the freeCodeCamp article.

## Features

- Responsive design that works on all devices
- Dark mode support
- SEO optimized with custom meta tags
- Animated hero section with RoughNotation
- GitHub integration to showcase latest repositories
- Contact form for easy communication
- Project showcase with hover effects
- Detailed about and experience pages

## Tech Stack

- **Next.js** - React framework with server-side rendering
- **TailwindCSS** - Utility-first CSS framework
- **React Rough Notation** - Library for creating animated highlights
- **Next Themes** - For dark mode support
- **Axios** - For making API requests

## Getting Started

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yocodigo/portfolio-website.git
```

2. Navigate to the project directory
```bash
cd portfolio-website
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
Edit the following files to add your personal information:

- Update meta information in `components/ContainerBlock.js`
- Edit social links in `components/Navbar.js` and `components/Footer.js`
- Modify the hero section in `components/Hero.js`
- Update project cards in `components/FavouriteProjects.js` and `pages/projects.js`
- Change experience details in `pages/experience.js`
- Update about page in `pages/about.js`
- Modify contact information in `pages/contact.js`

### GitHub Integration
To fetch your own GitHub repositories, update the GitHub username in `pages/index.js`:

```javascript
<LatestCode githubUsername="yocodigo" />
```

### Styling
You can customize colors and styling in the `tailwind.config.js` file.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository

2. Sign up or log in to [Vercel](https://vercel.com)

3. Click on "New Project" and import your GitHub repository

4. Keep the default settings and click "Deploy"

5. Wait for the build to complete, and your site will be live!

### Custom Domain

To use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Add your domain and follow the instructions to configure DNS settings

## License

This project is open source and available under the [MIT License](LICENSE).