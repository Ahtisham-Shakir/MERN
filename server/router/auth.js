const express = require('express');
const router = express.Router();

// connection to the database
require('../db/conn');

// user model
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello from server router');
})

// Adding data to the database using promises
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all the fields" });
//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" })
//             }

//             const user = new User({ name, email, phone, work, password, cpassword });
//             user.save().then(() => {
//                 res.status(201).json({ message: "User registered successfully" });
//             }).catch(err => res.status(500).json({ error: "Failed registration" }))
//         }).catch((err) => console.log(err))
// })

// Adding data to the database using async await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already exist" })
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save()
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;