# Andnet DeBoer - Portfolio Website

A clean, academic-style portfolio website built with Jekyll and optimized for showcasing robotics research projects.

## 🌐 Live Site

Visit: [andnet-deboer.github.io](https://andnet-deboer.github.io)

## Project Structure

```
├── index.html               # Homepage
├── _layouts/                # Page templates
│   ├── default.html        # Base layout
│   ├── home.html           # Homepage layout
│   ├── project.html        # Project detail layout
│   └── page.html           # Simple page layout
├── _includes/              # Reusable components
│   ├── head.html           # HTML head with meta tags
│   ├── navigation.html     # Site navigation
│   ├── project-card.html   # Project card component
│   └── footer.html         # Site footer
├── _projects/              # Project markdown files
│   ├── project1.md
│   └── project2.md
├── _pages/                 # Standalone pages
│   └── resume.md
├── assets/
│   ├── css/
│   │   └── main.css        # All styles
│   ├── js/
│   │   └── main.js         # Interactivity
│   ├── images/
│   │   ├── profile.jpg     # Your profile photo
│   │   └── projects/       # Project images & GIFs
│   └── resume/
│       └── resume.pdf      # Your resume
└── README.md               # This file
```

## Quick Start

### Prerequisites

- Ruby 2.7+ and Bundler
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/andnet-deboer/andnet-deboer.github.io.git
   cd andnet-deboer.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run local server**
   bundle exec jekyll serve   ```bash

   ```

4. **Visit in browser**
   ```
   http://localhost:4000
   ```

### Deployment

If this project is clone to agithub profile name repository automatically deploys to GitHub Pages when you push to the `main` branch.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Wait 1-2 minutes for GitHub Pages to rebuild and deploy.

## Adding a New Project

1. **Create project markdown file** in `_projects/`:
   ```bash
   _projects/my-new-project.md
   ```

2. **Add frontmatter and content**:
   ```markdown
   ---
   layout: project
   title: "My New Project"
   preview_gif: "/assets/images/projects/my-new-project.gif"
   tags: ["Python", "ROS2", "AI"]
   date: 2024-11-02
   description: "Short project description"
   ---

### Update Your Information

Edit `_config.yml`:
```yaml
title: Your Name
email: your.email@example.com
linkedin: https://www.linkedin.com/in/your-profile
github: https://github.com/your-username
```

### Update About Section

Edit the bio text in `_layouts/home.html` (search for "About Section").

### Change Colors

All colors are defined as CSS variables in `assets/css/main.css`:
```css
:root {
  --color-black: #000000;
  --color-white: #ffffff;
  /* Add your custom colors */
}
```

### Add Profile Photo

Add your photo as:
- `assets/images/profile.jpg` (recommended size: 400x400px)

### Add Resume

Add your resume as:
- `assets/resume/resume.pdf`

##  Design Specifications

- **Project Card GIFs**: 450x450px (square)
- **Profile Photo**: 400x400px minimum (displays as 200px circle)
- **Resume PDF**: Under 5MB recommended
- **Typography**: Roboto font family
- **Grid**: 3 columns (desktop), 2 (tablet), 1 (mobile)

## 📄 License

This portfolio template is open source and available under the MIT License.


## 📧 Contact

- **Email**: deboerandnet@gmail.com
- **LinkedIn**: [linkedin.com/in/andnet-deboer](https://www.linkedin.com/in/andnetdeboer/)
- **GitHub**: [github.com/andnet-deboer](https://github.com/andnet-deboer)

---
