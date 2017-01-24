var express = require('express');
var router = express.Router();

var Student = require('../models/student');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/student/add', function(req, res, next) {
  res.render('add', { title: 'Student Form' });              // sending data to add.ejs
});
router.post('/student/add', function(req, res, next) {          //recieving data from add.ejs
  //var result = req.body.
  //res.send(req.body);
  //console.log(req.body);
  var data = req.body;
  console.log(data);
  var student = new Student(data);
  student.save(function(err, result){
    if(err) return res.json({error : true , reason : err});
    return res.json({error : false});
  });
});
router.get('/student/list/', function(req, res, next) {
  Student.find({}).exec(function(err, students){
    if(err) return res.json({error : true , reason : err});
     return   res.render('list',{ title: 'Student List' , student : students});
    //return res.json(students)
  });

});
router.get('/student/edit/:studentId', function(req, res, next) {
  // res.send("OK");
  Student.findOne({_id : req.params.studentId}).exec(function(err , student){ return res.render('edit', {title :'Edit Form',student : student})});
});
router.put('/student/:studentId', function(req,res,next){


  var data = req.body;
  console.log(data);
  //var student = new Student(data);
  console.log(req.params.studentId);
  Student.findByIdAndUpdate(req.params.studentId, data, { new: true }, function (err, students) {
  if (err) return console.log(err);
  res.send('ok');
});

});

router.delete('/student/:studentId', function(req, res, next) {
  console.log(req.params.studentId);
  Student.remove({_id: req.params.studentId}, function (err) {
  if (err) return {error: true, reason: err};
  return res.json({error: false})
  // return res.redirect('student/list');
  // removed!
});
});


module.exports = router;
