const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for User  
let User = new Schema({

  Name: {
    type: String
  },
  Gender: {
    type: String
  }, Email: {
    type: String

  }, Address: {
    type: String

  }, City: {
    type: String

  }, State: {
    type: String

  }, Country: {
    type: String

  },
  HobbyString: {
    type: String
  }

}, {
  collection: 'User'
});
module.exports = mongoose.model('User', User);  