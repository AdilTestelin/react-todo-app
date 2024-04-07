# Todo List Project

## Overview

This project is a pedagogical endeavor aimed at enhancing my skills in React. The primary goal was to create a functional todo list application that not only allows users to add and delete tasks but also persists these entries in the local storage to maintain their state after a page reload. Through this project, I've deepened my understanding of core React concepts, including state management with `useState`, side effects with `useEffect`, prop drilling, and handling events from child to parent components.

The application was bootstrapped with Vite, which offers a faster and more streamlined development experience compared to other setups. It's designed to be simple yet illustrative of how React's fundamental features can be used to build interactive and stateful web applications.

## Key Learnings

- **State Management:** Utilized the `useState` hook to manage and update the list of tasks within the application.
- **Persistence:** Implemented logic to store the tasks in local storage using the `useEffect` hook, ensuring that the task list persists between page reloads.
- **Component Communication:** Practiced passing data and functions between parent and child components, demonstrating both downward (props) and upward (event handling) communication patterns.
- **Event Handling:** Learned to emit custom events from child components and handle them in the parent component to update the state accordingly.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A modern frontend build tool that significantly improves the development experience.
- **Local Storage API:** Used for persisting the todo list between sessions.

## Project Setup

To get started with this project, ensure you have Node.js installed on your machine. Then, follow the steps below:

1. Clone the repository to your local machine:
   git clone <repository-url>

2. Navigate into the project directory:
   cd <project-name>

3. Install the dependencies:
   npm install

4. Start the development server:
   npm run dev

You can now add, delete, and view your tasks, with the changes being persisted across sessions.

## Conclusion

This project served as a practical exercise to consolidate my understanding of React and its ecosystem. It provided hands-on experience with several key concepts and tools essential for modern web development. I look forward to building upon this foundation and exploring more advanced features and libraries in the React ecosystem.
