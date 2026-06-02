# Strapi Backend API

Welcome to the backend repository for our Strapi application. This project serves as a Headless CMS providing structured content data through a REST API to our frontend applications.

---

## Getting Started

Strapi comes with a full-featured Command Line Interface (CLI) which lets you scaffold and manage your project in seconds.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and npm (or yarn) installed on your machine.

### Installation

Clone the repository and install the dependencies:

```bash
cd your-repository-name
npm install
# or
yarn install
```

🛠️ Available Scripts
Inside the project directory, you can run the following commands:

develop
Starts the Strapi application with autoReload enabled. This is the recommended mode for local development (changing content types, adding plugins, etc.).

```bash
npm run dev
# or
yarn dev
```

### API for CMS

- GET /api/globle - For header footer compnent
- GET /api/landing-page - For componets of landing page (blocks )
- GET /api/articles - For Articles and blog posts
- GET /api/pricings - Pricing components
