let headerScroll = document.querySelector('.header');

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slides-container .slide');
let index = 0

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () =>{
    headerScroll.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active');
    }
    else{
        document.querySelector('header').classList.remove('header-active');
    }

}

// document.addEventListener('DOMContentLoaded', function() {
//     let cart = [];
//     const cartModal = document.getElementById('cart-modal');
//     const cartBtn = document.getElementById('cart-btn');
//     const closeCartBtn = document.getElementById('close-cart');
//     const orderBtn = document.getElementById('order-btn');
//     const cartItems = document.getElementById('cart-items');
//     const totalPriceElement = document.getElementById('total-price');

//     document.querySelectorAll('.add-to-cart').forEach(button => {
//         button.addEventListener('click', function() {
//             const name = this.dataset.name;
//             const price = parseFloat(this.dataset.price);
//             addToCart(name, price);
//         });
//     });

//     cartBtn.addEventListener('click', function() {
//         updateCart();
//         cartModal.style.display = 'block';
//     });

//     closeCartBtn.addEventListener('click', function() {
//         cartModal.style.display = 'none';
//     });

//     orderBtn.addEventListener('click', function() {
//         alert('Your order is accepted!');
//         cart = [];
//         updateCart();
//         cartModal.style.display = 'none';
//     });

//     function addToCart(name, price) {
//         const item = cart.find(product => product.name === name);
//         if (item) {
//             item.quantity += 1;
//         } else {
//             cart.push({ name, price, quantity: 1 });
//         }
//         updateCart();
//     }

//     function removeFromCart(name) {
//         cart = cart.filter(product => product.name !== name);
//         updateCart();
//     }

//     function updateCart() {
//         cartItems.innerHTML = '';
//         let total = 0;
//         cart.forEach(product => {
//             const li = document.createElement('li');
//             li.innerHTML = `${product.name} (${product.quantity}) - ${product.price.toFixed(2)}lv. <span class="remove-item" data-name="${product.name}">&times;</span>`;
//             cartItems.appendChild(li);
//             total += product.price * product.quantity;
//         });
//         totalPriceElement.innerText = total.toFixed(2);

//         document.querySelectorAll('.remove-item').forEach(button => {
//             button.addEventListener('click', function() {
//                 const name = this.dataset.name;
//                 removeFromCart(name);
//             });
//         });
//     }
// });