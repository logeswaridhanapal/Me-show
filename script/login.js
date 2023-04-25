function otp(){
    let enterednumber=document.getElementById("num").value 

    if (enterednumber.length<10){
        alert("error")
    }
    else{
        let x = Math.floor((Math.random() * 100000) + 1);
        localStorage.setItem("otp",JSON.stringify(x))
        alert(`OTP is ${x}`)
        window.location.href="otp.html"
    }
   
}
