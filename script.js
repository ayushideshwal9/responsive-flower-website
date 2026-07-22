//contact form vaildation
const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const number = form.querySelector('input[type="number"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || number==="" || message===""){
        // alert("Please fill all fields.");
        const notification=document.getElementById("notification");

        notification.innerText = "✖️ Please fill all fields!";
        notification.style.display = "block";

        setTimeout(function(){
          notification.style.display = "none";
        },2000);

        return;
    }

    // alert("Message Sent Successfully!");
    notification.innerText = "✅ Message Sent Successfully!";
    notification.style.display = "block";

    setTimeout(function () {
      notification.style.display = "none";
    }, 2000);

    form.reset();

});
//Add to cart 
let cart = 0;

const cartIcon = document.querySelector(".fa-shopping-cart");

document.querySelectorAll(".cart-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        e.preventDefault();

        cart++;

        cartIcon.setAttribute("data-count",cart);

        // alert("Product Added to Cart!");
        const notification = document.getElementById("notification");

        notification.innerText = "🌸 Product Added to Cart!";
        notification.style.display = "block";

        setTimeout(function(){
        notification.style.display = "none";
        }, 2000);

    });

});
// links active effect
const links = document.querySelectorAll(".navBar a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(item => item.classList.remove("active"));//remove all active class form every navbar link
        this.classList.add("active");// this link was clicked
    });
});
