# Coding Assignment 12 – Web Component Library  
**Student Name:** Anchal Joshi  
**Course:** Web Development  
**Institution:** Red River College  

---

# 📌 Project Overview

This project is a reusable **UI Component Library** built using:

- React (Create React App)
- TypeScript
- Storybook
- Styled Components
- Jest & React Testing Library
- Docker (Production Deployment)

The goal of this assignment was to create a fully functional, testable, responsive, and deployable component library.

---

# 📦 Components Included

The component library contains the following components:

- Button  
- Label  
- Text  
- Table  
- Table Header  
- Table Row  
- Table Cell  
- Table Footer  
- Dropdown  
- Radio Button  
- Img  
- Hero Image  
- Card  

---

# 📁 Folder Structure

Each component folder contains:


Component_name.tsx
Component_name.types.tsx
Component_name.stories.tsx
Component_name.test.tsx
index.ts


All components:

- Use Styled Components for styling
- Are fully responsive
- Have default and disabled states
- Change color when disabled (greyed out)
- Show `not-allowed` cursor when disabled
- Include at least 2 tests:
  - Visibility test
  - Disabled background style test

---

# 🚀 Running the Project Locally

## 1️⃣ Install Dependencies

```bash
npm install
2️⃣ Run React Development Server
npm start

Open in browser:

http://127.0.0.1:3000
3️⃣ Run Storybook
npm run storybook

Open in browser:

http://127.0.0.1:6006

Storybook includes:

Controls to modify props (text, color, background)

Default state view

Disabled state view

Interactive preview

4️⃣ Run All Tests
npm test -- --watchAll=false

All components include:

Test to verify component renders

Test to verify background changes when disabled

🏗 Production Build

To create an optimized production build:

npm run build

This generates a /build folder with optimized static files.

🐳 Running with Docker (Production – Port 8083)

This project includes a Dockerfile that hosts the production build using Nginx.

1️⃣ Build Docker Image
docker build -t joshi_anchal_coding_assignment12 .
2️⃣ Run Docker Container
docker run -p 8083:80 --name joshi_anchal_coding_assignment12 joshi_anchal_coding_assignment12
3️⃣ Open in Browser
http://127.0.0.1:8083
🛑 Stop Docker Container
docker stop joshi_anchal_coding_assignment12

To start again:

docker start joshi_anchal_coding_assignment12

To remove container:

docker rm joshi_anchal_coding_assignment12