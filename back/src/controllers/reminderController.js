// backend/src/controllers/reminderController.js
const User = require('../models/user');
const { sendEmail } = require('../services/emailService');

// Function to send reminder email to all users
async function sendReminderEmailToAll(event) {
    try {
        // Fetch all users from the database
        const users = await User.find(); // Corrected from findById to find
        console.log('Users fetched from the database:', users);

        // Iterate over each user and send reminder email
        for (const user of users) {
            const recipient = user.email; // Assuming email field exists in the User model
            const subject = 'Reminder: Upcoming Event';
            const message = `Hi ${user.username},\n\nJust a friendly reminder that you have an upcoming event "${event}" tomorrow.\n\nBest regards,\nYour Name`;
            
            await sendEmail(recipient, subject, message);
            console.log(`Reminder email sent to ${recipient}`);
        }
    } catch (error) {
        console.error('Error sending reminder email to all users:', error);
    }
}

module.exports = { sendReminderEmailToAll };
