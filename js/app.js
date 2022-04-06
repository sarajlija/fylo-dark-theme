//VALIDATE EMAIL//////////////////////////////////////////////////
let form = document.getElementById('form')
let button = document.getElementById('button-id')
button.addEventListener('click', validateemail)
function validateemail(e) {
    console.log("HALLLLOOO")
    e.preventDefault()
    let x = document.myform.email.value;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {


        document.querySelector(".error").innerHTML = "Please enter a valid email address";
        document.querySelector(".error").style.color = "hsl(0, 100%, 63%)";
        document.querySelector(".error").style.visibility = "visible";
       // document.querySelector(".icon-error").style.visibility = "visible"
        document.querySelector(".input__class").style.border = "2px solid rgb(255 52 52)";
        
        document.querySelector(".input__class").style.border = "2px solid rgb(255 52 52)";
        }

    else {

        document.querySelector(".error").innerHTML = "Thank you!";
        document.querySelector(".error").style.visibility = "visibile";
        //document.querySelector(".icon-error").style.visibility = "hidden"
        document.querySelector(".input__class").style.marginBottom = "1.5rem"
        document.querySelector(".input__class").style.border = "2px solid transparent";
        document.querySelector(".btn-contact").style.border = "2px solid transparent";
      
    }

}