# Task Manager

This project is a simple to-do list application that allows users to add, remove, and mark tasks as completed. It provides a basic user interface to manage daily tasks effectively.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Mark as Completed**: Click on a task to mark it as completed or incomplete.
- **Delete Tasks**: Remove tasks from the list using the delete button.
- **Persistent Storage**: Tasks are saved in the browser's local storage, ensuring they remain after the page is refreshed.

## Technologies Used

- **HTML**: For structuring the layout of the task manager.
- **CSS**: For styling the interface with a clean and modern design.
- **JavaScript**: For handling user interactions, task management, and local storage functionality.

## Usage

1. Open the application in a web browser.
2. Enter a task in the input field and click the "Add" button to add it to the list.
3. Click on a task to mark it as completed.
4. Click the delete icon next to a task to remove it from the list.

## Files

- **index.html**: Main HTML file containing the app's structure.
- **style.css**: CSS file for styling the app's appearance.
- **script.js**: JavaScript file for task management logic and user interaction handling.

## Setup

1. Clone the repository.
2. Open the `index.html` file in a web browser to use the Task Manager.

## Code Explanation

### HTML Structure

- **Input Field**: For users to enter new tasks.
- **Add Button**: Adds the task entered in the input field to the task list.
- **Task List**: Displays all added tasks with options to mark them as completed or delete them.

### CSS Styling

- **Container**: Uses a radial gradient background and centered content.
- **To-Do App**: Styled with a white background, rounded corners, and shadow for a clean look.
- **Tasks**: Styled with check icons for completion and delete buttons for removing tasks.

### JavaScript Functionality

- **Add Task**: Checks if the input is not empty and adds a new task to the list.
- **Toggle Completion**: Allows users to click on tasks to mark them as completed or not.
- **Delete Task**: Removes the task when the delete button (×) is clicked.
- **Save and Load Tasks**: Uses local storage to save tasks and display them after refreshing the page.

### Local Storage

- The app saves tasks in the browser's local storage to ensure they are not lost when the page is reloaded or closed.


