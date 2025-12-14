# 🍰 The Sweet Shop

**The Sweet Shop** is a full-stack E-Commerce web application designed for browsing and ordering delicious desserts. Users can view products, search for specific cravings, manage a shopping cart, and track stock levels in real-time.

Built using the **MERN Stack** (MongoDB, Express.js, React, Node.js).

## ✨ Key Features

* **Dynamic Product Menu:** Fetches product data (images, prices, descriptions) directly from a MongoDB database.
* **Stock Management:** Automatic stock deduction when an order is placed. Prevents ordering out-of-stock items.
* **User Authentication:** Secure Login and Registration system using JWT (JSON Web Tokens).
* **Shopping Cart:** Users can add items to their cart and review their total before checkout.
* **Responsive UI:** Styled with CSS for a modern, clean look that works on desktop and mobile.

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Testing:** Jest, Supertest

---

## 🚀 Setup & Installation Instructions

Follow these steps to get the project running on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/)
* A [MongoDB Atlas](https://www.mongodb.com/atlas) account (for the database URI).

### 2. Backend Setup
1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `backend` folder and add your credentials:
    ```env
    MONGO_URI=your_mongodb_connection_string_here
    PORT=5000
    JWT_SECRET=mysecretkey123
    ```
4.  **Seed the Database** (Loads initial products like Brownies & Cupcakes):
    ```bash
    node seed.js
    ```
5.  Start the Server:
    ```bash
    npm start
    ```
    *You should see: `Server is running on port 5000` and `MongoDB Connected!`*

### 3. Frontend Setup
1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the React App:
    ```bash
    npm start
    ```
    *The app will launch in your browser at `http://localhost:3000`.*

---

## 📸 Screenshots

### Home Page (Menu & Search)
![Home Page Screenshot](./screenshots/home_page.png)
*Displays the grid of sweets with real-time search filtering.*
<img width="1082" height="447" alt="Screenshot 2025-12-14 175007" src="https://github.com/user-attachments/assets/e09d13ad-6080-4e5a-a1ea-2c31d468fbda" />

<img width="1439" height="767" alt="Screenshot 2025-12-14 184311" src="https://github.com/user-attachments/assets/b2d9c542-ca9b-43fe-addb-6a1773c9464c" />


### Shopping Cart
![Cart Screenshot](./screenshots/cart_page.png)
*Shows selected items and total price calculation.*
<img width="862" height="521" alt="Screenshot 2025-12-14 175307" src="https://github.com/user-attachments/assets/775a980e-695e-4a3c-8adb-560426530301" />
<img width="881" height="678" alt="Screenshot 2025-12-14 175556" src="https://github.com/user-attachments/assets/fbbb7dd5-aa9c-4c5c-9cc0-a45efadaa558" />
<img width="812" height="798" alt="Screenshot 2025-12-14 175730" src="https://github.com/user-attachments/assets/e7bfab50-e877-407b-951b-817dc9e8bdaa" />




### User Login
![Login Screenshot](./screenshots/login_page.png)
*Secure user authentication screen.*
<img width="734" height="432" alt="Screenshot 2025-12-14 174844" src="https://github.com/user-attachments/assets/d562d346-16a6-4bd9-9695-41bfaf89b215" />
<img width="669" height="409" alt="Screenshot 2025-12-14 174856" src="https://github.com/user-attachments/assets/5db7b3af-9345-4c1b-acc2-95d5400e2122" />
<img width="552" height="354" alt="Screenshot 2025-12-14 174922" src="https://github.com/user-attachments/assets/f12be881-15da-41ac-b403-40e6b91f3297" />
<img width="636" height="383" alt="Screenshot 2025-12-14 174930" src="https://github.com/user-attachments/assets/83ed94f7-c038-4803-b1eb-05d7dc557c66" />





*(Note: Screenshots are placeholders. Please add your images to a 'screenshots' folder in your project root.)*

---

## 🤖 My AI Usage

This project was built with the assistance of Artificial Intelligence tools. Below is a breakdown of how AI was utilized during the development process:

### 1. AI Tool Used
* **Gemini (Google)**

### 2. How I Used It
* **Debugging & Error Resolution:** I used AI to interpret terminal errors (such as `EADDRINUSE` and `Module not found`) and identify syntax errors in my code.
* **Code Generation:** AI assisted in writing the boilerplate code for the Express server, Mongoose models, and React components (`Home.js`, `Cart.js`).
* **Logic Implementation:** I prompted the AI to help design the logic for the "Stock Deduction" feature, ensuring database quantities updated correctly after an order.
* **Learning:** I used AI to explain concepts I was unfamiliar with, such as how `useEffect` hooks work and how to set up a Proxy in `package.json`.

### 3. Verification Process
While AI provided code snippets and suggestions, I manually verified all code by:
* Running the application locally to ensure features worked as expected.
* Writing and running automated tests (`npm test`) to confirm backend reliability.
* Reviewing the code to understand the logic before integrating it into the final project.
