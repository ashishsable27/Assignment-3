const express = require('express');
const app = express();
const userRoutes = express.Router();
// Require User model in our routes module  
let User = require('../models/User');
 
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  //console.log("User Req:", user);
  user.save()
    .then(user => {
      res.status(200).json({ 'User': 'User has been added successfully' });
    })
    .catch(err => {
      //res.status(400).send("unable to save to database",err);  
      res.status(400).json({ 'Error': 'Error in Saving User' });
    });

});
// Defined get data(index or listing) route  
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});
// Defined edit route  
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user) {
    res.json(user);
  });
});
//  Defined update route  
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user)
      res.status(404).send("Record not found");
    else {
     

      user.Name = req.body.Name;
      user.Email = req.body.Email;
      user.Address = req.body.Address;
      user.City = req.body.City;
      user.State = req.body.State;
      user.Country = req.body.Country;

      console.log("Update  Req:", user);
      user.save().then(user => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route  
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


module.exports = userRoutes;  