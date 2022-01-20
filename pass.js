var password;
var pass1="adminaccess@bapi.2122";

password=prompt('Please enter Admin Key to view this page!','');

if (password==pass1)
  alert('Welcome to the page Admin');
else
   {
    alert('You are not authorized');
    window.location="http://astroraditya.github.io";
    }