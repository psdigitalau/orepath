# Orepath

# Getting Started

## Setup

```bash
# Clone the repository
git clone https://github.com/cullenwebber/orepath.git

# Navigate to the project directory
cd orepath

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Making Changes
Most content changes should be made in the partials directory:

- partials/about.html - About section content
- partials/hero.html - Hero section content
- partials/team.html - Team members information
- partials/solutions-01.html , partials/solutions-02.html , partials/solutions-03.html - Solutions sections
- partials/testimonials.html - Customer testimonials
- partials/footer.html - Footer testimonials
- partials/components/ - Reusable components like team-member cards, testimonials, etc.
After making changes, run the development server to see them in real-time:
```bash
npm run dev
```

## Building for Production
To build the project for production, run:
```bash
npm run build
```
This will generate optimized files in the dist directory, you can then copy the contents of this file straight to the server.

## Deployment
The project is configured to deploy using GitHub Actions. To modify the deployment to use FTPS:

1. Edit the .github/workflows/deploy.yml file
2. Replace the GitHub Pages deployment section with FTPS configuration

# Example FTPS deployment configuration
name: Deploy to FTPS

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to FTPS
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftps
          local-dir: ./dist/
          server-dir: /path/to/destination/

## Configuration
Add the necessary secrets (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD) to your GitHub repository's settings.
- Go to Settings > Secrets and Variables > Actions
- Add FTP_SERVER , FTP_USERNAME , and FTP_PASSWORD secrets

## Folder Structure

This is the structure of the project:

```plaintext
/
├── .github                # Github actions and workflows
├── node_modules          # Node.js dependencies for the project
├── partials              # Handlebars partial templates
│   ├── components        # Reusable component partials
├── public                # Public assets and resources
├── src                   # Source code
│   ├── js               # Javascript files
│   ├── styles           # CSS styles
│   │   ├── utils.css    # Utility styles
│   │   ├── header.css   # Header styles
│   │   ├── typography.css # Typography styles
│   │   ├── button.css   # Button styles
├── .editorconfig        # Configuration for the EditorConfig plugin
├── .eslintignore        # Files to be ignored by ESLint
├── .eslintrc.json       # Configuration for ESLint
├── .gitignore           # Files and folders to be ignored by Git
├── .prettierignore      # Files to be ignored by Prettier
├── .prettierrc          # Configuration for Prettier
├── index.html           # The main HTML file
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration with plugins
```
