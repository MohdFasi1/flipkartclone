onload = function(){
    updateSearchBar()
    apiCall()
    .then(()=>{
        displayProducts()
        console.log(products)
    })
}

async function displayProducts(){
    // let fetchProducts = await fetch('https://dummyjson.com/products')
    // response = await fetchProducts.json()
    // productsList = await response.products
    // console.log(productsList)
    
    productsList = products.map((e,i)=>{
      return `<a href="ProductDetails.html?id=${i}">
      <img src="${e.images[0]}">
      <div>
      <h3>${e.title}</h3>
      <h4>₹${Math.round(e.price*83.3)}</h4>
      </div>
  </a>`
    }) 
    document.querySelector('.productDisplay').innerHTML = productsList.join(' ')
  }