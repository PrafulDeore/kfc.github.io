document.getElementById("submitBtnDiv").addEventListener("click",dO)
  
function dO(event){
  event.preventDefault()
  var otp=document.getElementById("codeBox0").value;
  console.log("here")
for(var i=0;i<otp.length;i++){
  if(otp.length==4 && otp=="1234" ){
    window.location.href="index.html"
  }
  else{
    alert("Please Enter Youre OTP again");
    break;
  }
  

  }
}