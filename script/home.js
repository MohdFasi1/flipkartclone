let index = 0;
const items = document.querySelectorAll('.imagesimg');
let dots = document.querySelectorAll('.dots')
let intervalId;
let productsList;
let products;
onload = function(){
  carousel()
  updateSearchBar()
  displayProducts()
  getFooterData()
}
function carousel() {
  intervalId = setInterval(showNext, 1500);
}
function showNext() {
  updateCarousel();
  if (index < items.length - 1) {
      index++;
  } else {
    index = 0;
  }

}
function stopcarosal(){
    clearInterval(intervalId)
}

function showPrev() {
  if (index > 0) {   
      index--;
  } else {
    index = items.length - 1;
  }
  updateCarousel();
}
let dotsarr = ["-100%",0,"100%"]
function updateCarousel() {
  document.querySelectorAll('.dots')
  dots.forEach((a)=>a.classList.remove('active'));
  const newTransformValue = -index * 100 + '%';
  items.forEach((item)=>item.style.transform = `translateX(${newTransformValue})`);
  document.querySelector('.act').style.transform = `translateX(${dotsarr[index]})`;
  dots[index].classList.add('active');
}
document.querySelector('.imgCarousel').addEventListener('mouseenter', stopcarosal);
document.querySelector('.imgCarousel').addEventListener('mouseleave', carousel);



async function displayProducts(){
  let fetchProducts = await fetch('https://dummyjson.com/products')
  response = await fetchProducts.json()
  productsList = await response.products
  // console.log(productsList)
  products = productsList.map((e,i)=>{
    
    return `<a href="ProductDetails.html?id:${i}">
    <img src="${e.images[0]}">
    <div>
    <h3>${e.title}</h3>
    <h4>₹${Math.round(e.price*83.3)}</h4>
    </div>
</a>`
  })
  document.querySelector('.productDisplay').innerHTML = products.join(' ')
}
async function getFooterData(){
  let msData;
  let mostsearches = document.querySelector('.mostSearches')
  let fetchProducts = await fetch('https://dummyjson.com/products')
  response = await fetchProducts.json()
  productsList = await response.products
  msData = productsList.map((e,i)=>{
    return `<a href="ProductDetails.html?id:${i}">${e.title}</a>`
  })
  console.log(msData)
  mostsearches.innerHTML += msData.join(" ")
}