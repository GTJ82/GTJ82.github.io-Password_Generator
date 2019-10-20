function genPassword()
var values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"]
var password = ""

for (let i = 0; i < array.length; i++) {
   var c = Math.floor(Math.random() * values.length + 1)
   password += chars.charAt(c)
    
}

  console.log(password)