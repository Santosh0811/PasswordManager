# Password Manager (React + Vite)

A simple password manager built with **React** and **Vite**. This app allows users to store and manage passwords securely in the browser using `localStorage`. Passwords are encrypted before being saved, ensuring privacy and security at a basic level.

### Features
- **Add and Edit Passwords**: Easily add and update login credentials for various services.
- **Password List View**: View saved passwords with decryption on demand, displaying the actual password.
- **Responsive UI**: Optimized for both desktop and mobile devices.

### Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool for development.
- **localStorage**: Web API to store data locally in the browser.

### Security Considerations
This project demonstrates basic password management functionality, but it is **not secure enough for real-world use**:
- **localStorage** is not a secure solution for storing sensitive data. It is susceptible to cross-site scripting (XSS) attacks.
- Passwords are encrypted, but **localStorage** is still accessible to any script running on the same domain.

For production applications, consider:
- Storing passwords in a more secure, server-side solution.
- Using more advanced techniques such as hashing and salting for passwords.
- Implementing authentication and encryption using libraries like **bcrypt**, **JWT**, or server-side key management.
