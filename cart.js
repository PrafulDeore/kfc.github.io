var pr=0;
var cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
displayItems(cartData);

function displayItems(cartData) {
  cartData.map(function (item, index) {
    var box = document.createElement("div");
    box.setAttribute("id", "box");
    // img,name,remove btn all in innerbox1----------------------------->
    var innerbox1 = document.createElement("div");
    innerbox1.setAttribute("id", "innerbox1");
    var img = document.createElement("img");
    img.setAttribute("src", item.image_url);
    var h3 = document.createElement("h3");
    h3.textContent = item.price;
    // var btn= document.createElement("button");
    // btn.textContent ="Remove";
    //
    var h6 = document.createElement("h6");
    h6.textContent = item.name;
    // Delete item------------------------------------------------------------------------->

    var remove = document.createElement("p");
    remove.innerHTML = "Remove";
    remove.setAttribute("id", "remove");
    //bybharat
    remove.addEventListener("click", function () {
      makeDelete(index);
    });

    // img,name,remove btn all in innerbox2----------------------------->
    var innerbox2 = document.createElement("div");
    innerbox2.setAttribute("id", "innerbox2");
    var ina = document.createElement("div");
    ina.setAttribute("id", "ina");

    var qty=document.createElement("select")
      qty.setAttribute("id","qunty")

      // var opt0=document.createElement("option")
      // opt0.textContent="----"

      var opt1=document.createElement("option")
      opt1.textContent="1"


      var opt2=document.createElement("option")
      opt2.textContent="2"

      var opt3=document.createElement("option")
      opt3.textContent="3"

      var opt4=document.createElement("option")
      opt4.textContent="4"


    var leftbox = document.getElementById("leftbox");
    leftbox.append(box);
    box.append(innerbox1, innerbox2);
    innerbox1.append(img, h6, remove);
    innerbox2.append(ina, h3);
    qty.append(opt1,opt2,opt3,opt4)
    ina.append(qty);

    // // counter------------------------------------------------>
    // var counter = localStorage.getItem("counterRes") || 1; //when we refresh the page it will not delet any item
    // document.getElementById("inc").addEventListener("click", function () {
    //   counter++;

    //   localStorage.setItem("counterRes", counter);
    //   document.getElementById("count").textContent = counter;
    // });

    // document.getElementById("dec").addEventListener("click", function () {
    //   counter--;

    //   localStorage.setItem("counterRes", counter);
    //   document.getElementById("count").textContent = counter;
    // });
    // window.addEventListener("load", function () {
    //   //window is using for refresh
    //   document.getElementById("count").textContent = counter;
    // });

    // remove.addEventListener("click",cartremove);
    //   function cartremove(item){
    //           cartItem.splice(item,2);
    //           box.style.display="none";
    //           // console.log(cartData);
    //       localStorage.setItem("cartItem",JSON.stringify(cartItem));
    //       }

    // TOTAL BILL------------------------------------------------------------------------------------------------------------------------->
    var arr=[]
    var n=item.price;
    
      
      pr+=+n;
    //   console.log(pr)
      // var sum=0
  // for(i=0;i<n.length;i++){
    
  //   sum=sum+n[i]
   
  // }
  // console.log(sum)
  
      document.getElementById("subtotal").innerHTML=pr;
      var kk=0
      qty.addEventListener("change",function() {
      if(Number(qty.value)) {
          var netprice=0;
          if(qty.value!==c)  {
              q=qty.value
              
             
              var a=item.price.textContent
              
            
              console.log(b)

              var npr=Number(q-1)*Number(a)
              console.log(npr)
              // pr+=Number(q-1)*Number(d)
              
              } 
              document.getElementById("subtotal").textContent=pr+npr;
              document.getElementById("total1").textContent=pr+npr;
            }
              })

  });
  function movetopayment() {
  var finalrate=document.getElementById("totalprice")
  localStorage.setItem("bagtotal",finalrate.textContent)
  window.location.href="checkout.html"
}

  function makeDelete(index) {
    cartData.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
    displayItems(cartData);
  }
}