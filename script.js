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

