let products;

async function apiCall(){
    // data = await fetch('https://dummyjson.com/products/categories')
    data = await fetch('https://dummyjson.com/products/?limit=0&skip=0')
    resdata = await data.json()
    products =await resdata.products
    // console.log(resdata)
    return products
}