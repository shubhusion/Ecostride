// backend/src/sendReminderToAllUsers.js
const { sendReminderEmailToAll } = require('./controllers/reminderController');

// Call the sendReminderEmailToAll function with the event name
const event = "Your Event Name"; // Replace this with your actual event name
sendReminderEmailToAll(event)
    .then(() => {
        console.log('Reminder emails sent to all users successfully.');
        process.exit(0); // Exit the script after sending emails
    })
    .catch(error => {
        console.error('Error sending reminder emails to all users:', error);
        process.exit(1); // Exit the script with error code
    });
