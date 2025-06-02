# Pilot Project

This is a pilot project built using **React**, **TypeScript**, **Redux**, **Ant Design**, and **Tailwind CSS**. The project is designed as a restaurant admin panel, providing functionalities for managing menu items, user authentication, and navigation.

## Features

### Menu Management
- Add, edit, and delete menu items.
- Filter menu items by name and category.
- Upload images for menu items.

### Authentication
- Login functionality with username and password validation.
- Persistent authentication state using local storage.

### Dashboard
- Overview of total menu items and categories.

### Navigation
- Sidebar for navigation between pages.
- Responsive design with a drawer for mobile devices.

### Error Handling
- 404 Not Found page for invalid routes.

### Styling
- Light and dark theme support.
- Styled using Tailwind CSS and Ant Design components.

### State Management
- Redux Toolkit for managing application state.

### Build and Deployment
- Configured with Vite for fast development and optimized builds.
- Integrated with Sentry for error tracking.
- SonarCloud integration for code quality analysis.

## Project Structure
src/ ├── assets/ # Static assets ├── components/ # Reusable UI components │ ├── atoms/ # Small, reusable components (e.g., buttons, inputs) │ ├── molecules/ # Grouped components (e.g., form inputs) │ ├── organism/ # Larger components (e.g., menu table, sidebar) ├── pages/ # Page-level components ├── redux/ # Redux slices and store ├── routes/ # Application routes ├── styles/ # CSS files ├── types/ # TypeScript types └── vite-env.d.ts # Vite environment types

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/pilot-project.git
   cd pilot-project

2. Install dependencies:
npm install
npm run dev




