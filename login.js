var sub = document.getElementById("OTP").addEventListener("click", sO);
var arr = JSON.parse(localStorage.getItem("callDetails")) || [];
function sO(ele) {
  console.log("here");
  var num = document.getElementById("phone").value;
  for (i = 0; i < num.length; i++) {
    if (num.length == 10) {
      window.location.href = "otp.html";

      // storing phone number in location storage--->
      var details = {
        phoneNumber: num,
      };
      arr.push(details);
      // console.log(arr)
      localStorage.setItem("callDetails", JSON.stringify(arr));
    }
    else{
      alert("Please put 10 Digits");
      break;
    }
  }
}