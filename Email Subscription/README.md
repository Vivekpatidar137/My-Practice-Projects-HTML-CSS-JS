# Email Subscription

This project is a simple email subscription page designed to collect user email addresses for early access notifications. It includes a visually appealing landing page with a form that submits email data to a Google Sheet using Google Apps Script.

## Features

- **Responsive Design**: The page adjusts to different screen sizes, providing a seamless experience on mobile and desktop devices.
- **Email Subscription Form**: Users can subscribe by entering their email address, which is submitted and stored in a Google Sheet.
- **Success Message**: A success message is displayed when the email is submitted successfully.

## Technologies Used

- **HTML**: For structuring the subscription page.
- **CSS**: For styling the layout and making the design responsive.
- **JavaScript**: For handling form submissions and interactions.
- **Google Apps Script**: To handle form submissions and save data to Google Sheets.

## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter your email address in the input field and click the submit button to subscribe.
4. A success message will display upon successful submission.

## Files

- **index.html**: Contains the structure of the subscription page.
- **style.css**: Styles the subscription page with a background image and responsive layout.
- **script.js**: Manages form submissions and interactions with Google Sheets.

## Code Explanation

### HTML Structure

- **Hero Section**: A full-screen section with a heading, subheading, and a form for email input.
- **Email Form**: Collects user email addresses and submits them to a Google Sheet.

### CSS Styling

- **Hero Section**: Uses a background image with a dark overlay for a modern look.
- **Responsive Design**: Adjusts text sizes and form input widths for smaller screens.
- **Form Elements**: Styled input and button elements with rounded corners and consistent colors.

### JavaScript Functionality

- **Form Submission**: Submits the email form data to a specified Google Apps Script URL, which stores the data in Google Sheets.
- **Success Message**: Displays a success message on the page for a brief period after form submission.

### Google Apps Script Integration

- The form data is sent to a Google Apps Script URL, which processes the submission and stores the data in a Google Sheet.
- This approach enables easy data collection without backend server setup.

## Setup

1. Clone the repository.
2. Update the `script.js` file with your own Google Apps Script URL.
3. Open the `index.html` file in a web browser to use the subscription form.

## Notes

- Ensure that your Google Apps Script is correctly set up to handle form submissions.
- The Google Apps Script must be deployed as a web app and accessible by anyone with the link to allow submissions.

---

This README provides an overview of the Email Subscription project, detailing its features, technologies, and setup instructions.
