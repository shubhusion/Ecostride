// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
// const firebaseApp = require('...../front/src/components/firebase'); // Import the Firebase configuration

// const auth = getAuth(firebaseApp);

// // Sign up
// router.post('/signup', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     await createUserWithEmailAndPassword(auth, email, password);
//     res.status(201).json({ message: 'User signed up successfully' });
//   } catch (error) {
//     console.error('Error signing up:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Log in
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     await signInWithEmailAndPassword(auth, email, password);
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// module.exports = router;
