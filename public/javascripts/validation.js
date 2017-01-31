function formValidation(obj)
{

var uname = $(#);
var ureg = document.registration.regno;
var uroll = document.registration.rollno;
var uadd = document.registration.address;
var uemail = document.registration.email;
var uclg = document.registration.clg;

if(userid_validation(uname,5,12))
  {
   if(allnumeric(ureg))
{
if(rollnumber(uroll))
{
if(address1(uadd))
{
if(ValidateEmail(uemail))
{
if(college(uclg))
{

}
}
}
}
}
}
return false;
}

 // USER NAME VALIDATION --
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("Name should not be empty and length should be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}


function allnumeric(uzip)
{
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
var len=uzip.value.length;
if(len==10)
    return true;
else
{
  alert("registration no should be of 10 digits");
  uid.focus();
  return false;
}
}
else
{
alert('registration no have numeric characters only');
uzip.focus();
return false;
}
}

function rollnumber(uzip)
{
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
var len=uzip.value.length;
if(len==5)
    return true;
else
{
  alert("roll number length should be 5 digit long.");
  uid.focus();
  return false;
}
}
else
{
alert('roll number should be numeric');
uzip.focus();
return false;
}
}

function address1(uadd)
 {
   {
   var len = uadd.value.length;
   if (len == 0)
   {
   alert("Address can not be empty.");
   uid.focus();
   return false;
   }
   return true;
   }
 }

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function college(uadd)

   {
   var len = uadd.value.length;
   if (len == 0)
   {
   alert("College can not be empty.");
   uid.focus();
   return false;
   }
   return true;
   }
