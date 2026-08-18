let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    console.log("okay")
   
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

}

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  
    // shoppingCart.classList.toggle('active')
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')

}

let loginForm = document.querySelector(".login-form");

document.querySelector("#user-btn").onclick = () => {
    console.log("okay")
    // loginForm.classList.toggle('active')
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')

}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    console.log("menuBtn")
    // navbar.classList.toggle('active')
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    

}

window.onscroll = () =>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}


var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay:{
      delay: 7500,
      disableOnInteraction: false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
     
      },
    },
  });
  console.log(swiper)

  var swiper = new Swiper(".review-silder", {
    loop: true,
    spaceBetween: 20,

    autoplay:{
      delay: 7500,
      disableOnInteraction: false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
     
      },
    },
  });


  
  // https://grocery-store-mnafees.vercel.app/
