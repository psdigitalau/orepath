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
```

## Folder Structure

This is the structure of the project:

```plaintext
/
├── .github                 # Github actions and workflows
├── node_modules            # Node.js dependencies for the project.
├── public                  # Public assets and resources
├── src                     # Source code
│   ├── assets              # General assets for your project
│   │   ├── images          # Store your images here
│   ├── js                  # Javascript files of your project
│   ├── styles              # CSS styles for your project
├── .editorconfig           # Configuration for the EditorConfig plugin
├── .eslintignore           # Files to be ignored by ESLint
├── .eslintrc.json          # Configuration for ESLint
├── .gitignore              # Files and folders to be ignored by Git
├── .prettierignore         # Files to be ignored by Prettier
├── .prettierrc             # Configuration for Prettier
├── index.html              # The HTML file for your project
├── LICENSE                 # The license for your project
├── package-lock.json       # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.cjs      # Configuration for PostCSS
├── README.md               # This file
├── vite.config.js          # Configuration for Vite
```

## License

This template was created under the [MIT License](LICENSE.md).

**Happy coding!** 👨‍💻
