# Drawing App

This project is a simple drawing application that allows users to draw on a canvas using a customizable pen. Users can select the pen color, adjust the pen size, and clear the canvas.

## Features

- **Drawing on Canvas**: Users can draw on the canvas with the selected pen color and size.
- **Color Picker**: Allows users to choose any color for the pen.
- **Size Picker**: Users can adjust the pen size using a range slider.
- **Clear Canvas**: A button to clear the entire canvas and start fresh.

## Technologies Used

- **HTML**: For structuring the layout and elements of the drawing app.
- **CSS**: Minimal inline styling for basic layout.
- **JavaScript**: For handling user interactions, drawing on the canvas, and updating the UI.

## Usage

1. Open the app in a web browser.
2. Use the color picker to select the pen color.
3. Adjust the pen size using the range slider.
4. Click and drag on the canvas to draw.
5. Click the "Clear canvas" button to erase the canvas and start over.

## Files

- **index.html**: Main HTML file containing the app structure and minimal styling.
- **script.js**: JavaScript file for handling drawing functionality and user interactions.

## Setup

1. Clone the repository.
2. Open the `index.html` file in a web browser to use the drawing app.

## Code Explanation

### HTML Structure

- **Canvas**: The main area where users draw.
- **Controls**: Includes a color picker, a range slider for pen size, and a button to clear the canvas.

### CSS Styling

- **Body**: Styled to remove margins and hide overflow, ensuring the canvas fills the entire viewport.
  
### JavaScript Functionality

- **Canvas Setup**: The canvas is dynamically sized to fit the browser window.
- **Drawing**: Uses the `mousemove`, `mousedown`, and `mouseup` events to draw on the canvas when the user clicks and drags.
- **Clear Button**: Clears the entire canvas when clicked.
- **Color and Size Picker**: Updates the pen color and size based on user input.

### Responsive Design

- The app automatically resizes the canvas to fit the full width and height of the browser window.

---

This README provides an overview of the Drawing App project, highlighting its features, technologies used, and instructions for usage and setup.
