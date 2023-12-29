let urldata = new URLSearchParams(window.location.search)
let productSearched = urldata.get('product')
console.log(productSearched)
onload = function(){
    updateSearchBar()
    this.fetch('https://dummyjson.com/products')
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data.products)
        data.products.map((e)=>{
            if(e.title.toLowerCase().includes(productSearched)){
                console.log(e.title)
            }
        })
})
}