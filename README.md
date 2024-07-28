### Tree Structure:
```
MERN-Authentication-sys
                      ├── LICENSE
                      ├── README.md
                      ├── backend
                      │         ├── Controllers
                      │         │             └── AuthController.js
                      │         ├── Middlewares
                      │         │             ├── Auth.js
                      │         │             └── AuthValidation.js
                      │         ├── Models
                      │         │        ├── User.js
                      │         │        └── db.js
                      │         ├── Routes
                      │         │        ├── AuthRouter.js
                      │         │        └── ProductRouter.js
                      │         ├── index.js
                      │         ├── package-lock.json
                      │         └── package.json
                      ├── frontend
                      ├── README.md
                      ├── package-lock.json
                      ├── package.json
                      ├── public
                      │        ├── favicon.ico
                      │        ├── index.html
                      │        ├── logo192.png
                      │        ├── logo512.png
                      │        ├── manifest.json
                      │        └── robots.txt
                      └── src
                            ├── App.css
                            ├── App.js
                            ├── App.test.js
                            ├── RefreshHandler.js
                            ├── index.css
                            ├── index.js
                            ├── logo.svg
                            ├── pages
                            │       ├── Home.js
                            │       ├── Login.js
                            │       └── Signup.js
                            ├── reportWebVitals.js
                            ├── setupTests.js
                            └── utils.js

                      
```

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=8000&pause=871&color=F70000&width=435&lines=This+Repo+is+underconstruction+.+.+." alt="Typing SVG" /></a>
# MERN-Authentication-sys
Full-Stack Authentication System with MERN Stack
---
> <img src="https://raw.githubusercontent.com/mr0erek/MERN-Authentication-sys/main/.imgs/MERN.jpeg" alt="MERN-STACK.img" width="50%" height="50%" >
# High-Level Documentation for MERN Full-Stack Authentication System

## 1. Introduction
- **Project Name**:   `FULL-STACK AUTHENTICATION SYSTEM`
- **Description**: Web app with full-stack authentication using the `MERN stack`.
- **Purpose**: Secure user authentication with role-based access control.

## 2. Architecture Overview
- **Frontend**: React.js (Hosted on Vercel)
- **Backend**: Node.js with Express.js (Hosted on Render)
- **Database**: MongoDB (User data storage)

## 3. Key Components
- **Frontend**:
  - React Components: Login, Register, Dashboard, Admin Panel
  - State Management: Context API/Redux
  - Routing: React Router
- **Backend**:
  - Express Routes: Auth routes, protected routes
  - Middleware: JWT verification, Role-based authorization
- **Database**:
  - User Schema: User data including roles

## 4. Data Flow
1. **User Registration**:
   - Frontend sends POST request to `/auth/signup`
   - Backend hashes password, saves user in MongoDB, responds with success/error
2. **User Login**:
   - Frontend sends POST request to `/auth/login`
   - Backend verifies credentials, generates JWT, responds with token and role
   - Frontend stores token and role
   - MindMap to avoid JWT TOKEN Spoofing
     > <img src="https://raw.githubusercontent.com/mr0erek/MERN-Authentication-sys/main/.imgs/mindmap.png" alt="Check Mind Map" width="60%" height="10%">
     - ChatGpt Response : [Click to View](https://chatgpt.com/share/eef0c0a3-7ceb-45bd-8d8c-2ef5b5237048)
3. **Protected Routes**:
   - Frontend checks JWT token, sends with requests
   - Backend verifies token, checks user role, allows/denies access

## 5. Role-Based Authentication Implementation
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=8000&pause=871&color=F70000&width=605&lines=Admin+Roles+will+assign+soon,+%20working+on+it+.+.+." alt="Typing SVG" /></a>

- **User Schema and signup/login endpoints**:
    - [See Schema](backend/README.md)
- **How to start locally**:
    - [Step 1](frontend/README.md)
    - [Step 2](backend/README.md#to-start-backend-server-locally)
