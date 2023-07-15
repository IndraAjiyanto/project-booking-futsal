const correctEmail = "faiz@gmail.com";
const correctPassword = "1234";

const target = document.getElementById("message-con");

function cekLogin() {
    // alert("Tombol di klik");
    var userEmail= document.getElementById("femail").value;
    var userPassword= document.getElementById("fpassword").value;
    
    if (userEmail !== correctEmail || 
        userPassword !== correctPassword){
            target.innerHTML = "<p> Email atau Password salah </p>";
        }else{
            window.location.replace("home.html");
        }
}