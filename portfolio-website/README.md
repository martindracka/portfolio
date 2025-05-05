# Portfolio Website

This project is a portfolio website built using Vue.js. It showcases various projects and includes sections for an introduction, about me, projects, a video CV, and contact information.

## Project Structure

```
portfolio-website
├── src
│   ├── assets
│   │   └── styles
│   │       ├── animations.css
│   │       ├── base.css
│   │       ├── components.css
│   │       └── responsive.css
│   ├── components
│   │   ├── AboutSection.vue
│   │   ├── FooterSection.vue
│   │   ├── HeaderNav.vue
│   │   ├── HeroSection.vue
│   │   ├── ProjectCard.vue
│   │   ├── ProjectsSection.vue
│   │   └── VideoCVSection.vue
│   ├── i18n
│   │   ├── da.js
│   │   ├── en.js
│   │   └── index.js
│   ├── data
│   │   └── projects.js
│   ├── composables
│   │   └── use3DEffect.js
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Multi-language Support**: The application supports both English and Danish languages.
- **3D Effects**: Interactive 3D effects are implemented for project cards to enhance user engagement.
- **Video CV**: A dedicated section for a video CV to showcase skills and experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

Open your browser and navigate to `http://localhost:3000` to view the portfolio website.

## License

This project is licensed under the MIT License.