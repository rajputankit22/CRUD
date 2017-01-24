// import the necessary modules
var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({

  name : {
      first : String,
      last : String
    },
    rollno :Number,
    regno :{
      type : String,
      unique : true,
      required : true

    },
    age :Number,
    clgname :String,
  address : {
        city :String,
        state :String,
        country :String
    }
});
module.exports = mongoose.model("Student", StudentSchema);
