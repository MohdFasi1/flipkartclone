let search = document.querySelector('.search-bar');
let history = document.querySelector('.search-history');
let searchHistory=[]
function updateSearchBar(){
    searchHistory = JSON.parse(localStorage.getItem('search'))
    if(searchHistory.length>0){
        let searchData = searchHistory.map((e)=>`<a href="product-page.html?product=${e.productName}">
        <img src="src/hist.webp" alt="" width="32px" height="32px">
        <span>${e.productName}</span>
        </a>`)
        console.log(searchData)
        history.innerHTML = searchData.join(' ')
    }
        
}

search.addEventListener('keypress', function(e){
    if(e.key == 'Enter')
    {
        searchData()
    }
})

function searchData(){
    searchHistory.unshift({productName: search.value});
        if(searchHistory.length>5){
            searchHistory.pop();
        }
        if(search.value.length > 0){
        localStorage.setItem('search', JSON.stringify(searchHistory));
        updateSearchBar()
        window.location.href = `product-page.html?product=${search.value}`
        }
}