var bg = document.querySelector(".represent");
var mobileBtn = document.querySelector(".header__mobile");
var nav = document.querySelector(".header__main-nav");
var userWrap = document.querySelector(".header__user-wrapper");
mobileBtn.addEventListener("click",function(evt){
    evt.preventDefault();
    this.classList.toggle("header__mobile--open")
    if(this.classList.contains("header__mobile--open")){
        this.classList.remove("header__mobile--close");
        nav.style.display = "none";
        userWrap.style.display = "none";
    }else{
        this.classList.add("header__mobile--close");
        nav.removeAttribute("style");
        userWrap.removeAttribute("style");
    }
});
console.log(mobileBtn.classList.contains("header__mobile--close"));
window.addEventListener("scroll", function(evt){
    var scrolling = window.scrollY;
    bg.style.backgroundPosition = "50% " + scrolling/5 + "px";
    //bg.style.opacity = 1 - (0 + "." + scrolling); 
    this.console.log(scrolling);
});
ScrollReveal().reveal('.squares', { mobile: false });
ScrollReveal().reveal(".represent__list",{delay: 375,duration: 400,distance:"50px",reset: true});
//ScrollReveal().reveal(".week-product__title-wrapper",{delay: 550,duration: 550,reset: true});
ScrollReveal().reveal(".week-product__dscr",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".week-prouct__data",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".week-product__price-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".week-product__img-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".about-us__list-item",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".reviews__txt",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".reviews__author-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".reviews__arrow-wrapper",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".reviews__btn",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".contacts__data-table",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".contacts__btn",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".contacts__map",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".footer__logo",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".fooetr__social-list",{delay: 300,duration: 300,distance:"50px",reset: true});
ScrollReveal().reveal(".footer__developed-by",{delay: 300,duration: 300,distance:"50px",reset: true});
                            