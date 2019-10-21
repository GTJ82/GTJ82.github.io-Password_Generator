var getPassword = confirm("do you want to generate a password?")
    if( getPassword === true)
        alert("Password can include all letters, numbers and special characters")

var charNumber = prompt("How many characters do you want the password to be? needs to have a minimum of and and a max of 128.")
    if( charNumber >= 8 && charNumber >= 128)
        genPassword()




function genPassword(){
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";
var array = [];


for (let i = 0; i < values.length; i++) {
   var c = Math.floor(Math.random() * values.length + 1)
   password += values.charAt(c)
    
}
console.log(password)
}

