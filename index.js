let search = document.querySelector('.searched');
   
document.querySelector('#searchicon').onclick= () => {
    search.classList.toggle("active"); 
    shopping.classList.remove("active")
    login.classList.remove("active")

};

let shopping= document.querySelector('.shopping');
let shop=document.querySelector('#addcard');
shop.addEventListener("click",()=>{
    shopping.classList.toggle("active");
    search.classList.remove("active")
    login.classList.remove("active")

})

let login= document.querySelector('.shop-login');
let profile=document.querySelector('#profile');
profile.addEventListener("click",()=>{
    login.classList.toggle("active");
    shopping.classList.remove("active")
    search.classList.remove("active")

})








