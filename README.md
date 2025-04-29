SplitCart — Collaborative Shopping Cart
SplitCart is a collaborative e-commerce-like platform that allows users to create or join shared shopping carts with friends and family. It offers an intuitive interface, animations, and a responsive design.
 Firstly,run command on your vs code terminal :
   npm create vite@latest frontend
   Create a react folder using javascript
 --> Features
 1. Create or join a shared cart, 
 2.Smooth animations and transitions, 
 3.Responsive UI styled with Tailwind CSS.

-->Pages:
Home,
Create Cart,
Join Cart,
Cart Room.

--> Dependencies
1. Install these packages before running the app:
   npm install react-router-dom react-icons.
2. For Tailwind CSS setup:
    npm install -D tailwindcss postcss autoprefixer,
    npx tailwindcss init -p
   Then in your tailwind.config.js, add:
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
],
In your index.css or styles.css, include:
@tailwind base;
@tailwind components;
@tailwind utilities;

-->Remix Icon Integration
It is used to display icons on your website
npm install remixicon --save

--> How to Run
1.Clone the repository
2.Start the development server on your terminal: npm run dev
Visit: http://localhost:3000










