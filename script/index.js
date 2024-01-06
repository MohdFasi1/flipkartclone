let products;

async function apiCall(){
    data = await fetch('https://dummyjson.com/products')
    resdata = await data.json()
    products =await resdata.products
    return products
}