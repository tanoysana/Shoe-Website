//red Shoe display change on mouse over

let redShoe1 = document.getElementById("redShoe1");
let redShoe2 = document.getElementById("redShoe2");
let redShoe3 = document.getElementById("redShoe3");
let redShoe4 = document.getElementById("redShoe4");

let fullRedShoeImage = document.getElementById("fullShoeImage");

redShoe1.addEventListener("mouseover",function(){
    fullRedShoeImage.innerHTML = this.innerHTML;
});
redShoe2.addEventListener("mouseover",function(){
    fullRedShoeImage.innerHTML = this.innerHTML;
});
redShoe3.addEventListener("mouseover",function(){
    fullRedShoeImage.innerHTML = this.innerHTML;
});
redShoe4.addEventListener("mouseover",function(){
    fullRedShoeImage.innerHTML = this.innerHTML;
});

// Tap the nav item and go to their section

let home = document.getElementById("home");
let products = document.getElementById("products");
let about = document.getElementById("about");
let review = document.getElementById("review");
let services = document.getElementById("services");

home.addEventListener("click",function(){
    window.scrollTo(0,0);
});
products.addEventListener("click",function(){
    window.scrollTo(0,824);    
});
about.addEventListener("click",function(){
    window.scrollTo(0,1655);
})
review.addEventListener("click",function(){
    window.scrollTo(0,2420);
});
services.addEventListener("click",function(){
    window.scrollTo(0,3077);
});

// let scroller = document.getElementById("scroll");
// scroller.innerHTML = window.pageYOffset;