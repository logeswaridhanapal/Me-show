function verify(){
    let enteredotp=document.getElementById("enteredotp").value

    let otpfromls=JSON.parse(localStorage.getItem("otp"))


   if (enteredotp==otpfromls)
   {
           alert("Login successful")
   }
   else
   {
           alert("enter valid OTP")
   }
   window.location.href=("index.html")
}
