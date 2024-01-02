let urldata = new URLSearchParams(window.location.search)
let productSearched = urldata.get('product')
let products
console.log(productSearched)
search.value = productSearched
onload = function(){
    updateSearchBar()
    apiCall()
    .then(()=>catg())
    // fetch('https://dummyjson.com/products')
    // .then((data)=>data.json())
    // .then((data)=>{
    //     console.log(data.products)
    //     data.products.map((e)=>{
    //         if(e.title.toLowerCase().includes(productSearched)){
    //             console.log(e.title)
    //         }
    //     })
// })
}
async function apiCall(){
    data = await fetch('https://dummyjson.com/products')
    resdata = await data.json()
    products =await resdata.products
    console.log(products)
    return products
}