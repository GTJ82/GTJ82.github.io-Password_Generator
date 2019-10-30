var specChar = ["!,@,#,$,%,^,&,*,(,),_, +"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var nums = ["1,2,3,4,5,6,7,8,9,0"];

var passwordArray = [];
var count;

function genPassword() {

    document.getElementById(generate).addEventListener("click", function () {
        length();
    })

    function length() {
        count = prompt("How long of a password would you like? Must bewtween 8 and 128 characters.");
        if (count > 128) {
            alert("Must be less than 128 characters!");
            length();
        }
        else if (count < 8 ){
            alert("Must be at least 8 characters long!");
            length();
        }
        else {
            character();
        }
    }

}

function character(){
    passwordArray=[];
    if(confirm("Would you like special characters in your password?")){
        passwordArray.push(specChar);
    }
    if(confirm("Would you like numbers in your password?")){
        passwordArray.push(nums);
    }
    if(confirm("Would you like uppercase letters in your password?")){
        passwordArray.push(uppercase);
    }
    if(confirm("Would you like lowercase letters in your password?")){
        passwordArray.push(lowercase);
    }
    if(passwordArray.length < 2){
        alert("Must select at least 2 conditions!");
        character();
    }
    else{
        generate(passwordArray,count);
    }

}

function generate(passwordArray,passwordlength){
var password = i;
var passwordlength = parseInt(passwordlength);
    for(var k = 0; k < passwordlength; k++){
        var whichArray = Math.floor(Math.random() * passwordArray.length);
        password += passwordArray[whichArray[Math.floor(Math.random() * passwordArray[whichArray].length)]]
        document.input.val=password
    }
}
