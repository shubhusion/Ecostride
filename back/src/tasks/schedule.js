// const app = require('./celery');
// const cron = require('node-cron');

// // Schedule send_reminder_email task to run at 10:00 AM every day
// cron.schedule('0 10 * * *', async () => {
//   const orders = await Order.find({ due_date: { $lte: new Date() } });
//   const orderIds = orders.map((order) => order._id);
//   app.send_task('send_reminder_email', orderIds);
// });

// // Schedule send_monthly_report task to run at 00:00 on the first day of every month
// cron.schedule('0 0 1 * *', async () => {
//   app.send_task('send_monthly_report');
// });