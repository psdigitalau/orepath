# Scripts

Use the following scripts for your development workflow:

```bash
# Start the development server
npm run dev

# Checks your code for any linting errors
npm run lint

# Tries to automatically fix any linting errors present in your code
npm run lint:fix

# Formats your code in a consistent, predefined style using Prettier
npm run format

# Build for production
npm run build

# Preview the build
npm run preview

# Build and preview the project
npm run buildpreview

# Deploy to GitHub Pages
npm run deploy
```

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
