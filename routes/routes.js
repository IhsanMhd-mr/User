const express =require("express");
const router = express.Router();
// const app =router();

router.get("/users",(req,res)=>{
  res.render('ind.ejs')
  // res.send("All user");
  // res.status(200).send('view/ind');
});



// Routes

// Create a new user
router.post('/add-user', (req, res) => {
  res.render('/add_user');
  const newUser = req.body; // Assuming the request body contains user information

  User.create(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Failed to create user.' });
    });
});

// // Get all users
// router.get('/users', (req, res) => {
//     res.send("All users")
//   User.find()
//     .then(users => {
//       res.status(200).json(users);
//     })
//     .catch(err => {
//       console.error('Error fetching users:', err);
//       res.status(500).json({ error: 'Failed to fetch users.' });
//     });
// });

// // Get a specific user by ID
// router.get('/users/:id', (req, res) => {
//   const userId = req.params.id;

//   User.findById(userId)
//     .then(user => {
//       if (!user) {
//         res.status(404).json({ error: 'User not found.' });
//       } else {
//         res.status(200).json(user);
//       }
//     })
//     .catch(err => {
//       console.error('Error fetching user:', err);
//       res.status(500).json({ error: 'Failed to fetch user.' });
//     });
// });

// // Update a user by ID
// router.put('/up-users/:id', (req, res) => {
//   const userId = req.params.id;
//   const updatedUser = req.body;

//   User.findByIdAndUpdate(userId, updatedUser, { new: true })
//     .then(user => {
//       if (!user) {
//         res.status(404).json({ error: 'User not found.' });
//       } else {
//         res.status(200).json({ message: 'User updated successfully.', user });
//       }
//     })
//     .catch(err => {
//       console.error('Error updating user:', err);
//       res.status(500).json({ error: 'Failed to update user.' });
//     });
// });

// // Delete a user by ID
// router.delete('/del-users/:id', (req, res) => {
//   const userId = req.params.id;

//   User.findByIdAndDelete(userId)
//     .then(user => {
//       if (!user) {
//         res.status(404).json({ error: 'User not found.' });
//       } else {
//         res.status(200).json({ message: 'User deleted successfully.', user });
//       }
//     })
//     .catch(err => {
//       console.error('Error deleting user:', err);
//       res.status(500).json({ error: 'Failed to delete user.' });
//     });
// });



module.exports=router;