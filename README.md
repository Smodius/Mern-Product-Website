# MERN Crash Course Project README

## 📚 Project Purpose
This repository documents my journey through a MERN (MongoDB, Express, React, Node.js) crash course project, with the primary goal of learning **JavaScript**, understanding the **MERN stack**, and improving full-stack development skills. I also integrated **Chakra UI** and **Zustand** to understand modern frontend design and state management practices.

## 🎯 Learning Objectives

- Learn and apply JavaScript effectively in a real-world project
- Understand the architecture and interaction of MERN stack components
- Implement CRUD functionality using React and Express
- Use Zustand for simple global state management
- Apply Chakra UI for responsive and modern UI design
- Handle routing and navigation in React (using React Router)
- Manage modal components and UI feedback via Chakra and Toast
- Learn how to fix common MERN stack issues through hands-on debugging
- Understand how environment variables and deployment scripts work in Node
- Apply Git and version control effectively throughout development

## ✅ Accomplishments So Far

### ✅ Frontend (React + Chakra UI)
- Created product listing and card components
- Integrated Chakra UI components (Modal, Toast, IconButton, etc.)
- Added toast notifications for feedback
- Designed modals for product editing
- Hooked up buttons to modal triggers
- Used `useDisclosure()` properly for managing modal visibility
- Implemented `useState` to control form values and product updates
- Used `useEffect` to fetch product data
- Debugged multiple rendering and logic issues, especially with modal behavior and state syncing
- Navigated to Home page upon Create Product action using `useNavigate()`

### ✅ State Management (Zustand)
- Created a Zustand store for managing product state
- Implemented actions: `createProduct`, `updateProduct`, `deleteProduct`, `setProducts`
- Applied Zustand's `set()` to locally update products after API interaction

### ✅ Backend (Express + MongoDB)
- Set up product routes for CRUD operations
- Built and connected controllers for `get`, `post`, `put`, `delete`
- Connected to MongoDB using Mongoose
- Debugged Express routing and fetch errors (e.g., `[Object Object]` in URLs)
- Fixed ESM import issues and defined `__dirname` using `fileURLToPath`
- Used `dotenv` for environment variables
- Troubleshot path-to-regexp and NODE_ENV issues on Windows

## 🐞 Challenges & Fixes
- Chakra Toast not recognized: fixed with `const toast = useToast()` instead of destructuring
- Modal `onClose` undefined: fixed by ensuring it's in scope from `useDisclosure()`
- API returned `[object Object]`: fixed by passing the correct `_id` from the product
- Vite alias resolution issues: replaced `@/store/product` with relative path
- Environment variable incompatibility on Windows: used `cross-env`
- `path` errors in ESM: fixed by manually setting `__filename` and `__dirname`
- Incorrect static path to frontend: corrected the path and structure in the `if (NODE_ENV === 'production')` block

## 🔭 Next Goals
- Learn JavaScript more deeply through continued project iterations
- Build additional features: search, pagination, category filter
- Add image upload functionality with preview
- Replace Zustand with Redux to compare state management patterns
- Connect user authentication (optional)
- Host the backend on a service like Render or Heroku, and frontend on Netlify or Vercel
- Write proper unit tests for components and backend routes

## 💬 Why I Built This
I wanted a practical, build-first approach to learning the JavaScript ecosystem and understand the technologies that real-world React developers use. Through debugging real bugs, experimenting with UI, and talking to ChatGPT (a lot), I've learned not just how the code works—but why things break, and how to fix them.

## 🙌 Acknowledgements
- Video course author (MERN crash course)
- ChatGPT for helping with debugging, logic, Chakra tricks, Zustand usage, and pep talks

