let search = document.querySelector('.search-bar');
let history = document.querySelector('.search-history');
let searchHistory=[]
function updateSearchBar(){
    searchHistory = JSON.parse(localStorage.getItem('search'))
    if(searchHistory.length==1){
        history.innerHTML = `<a href="product-page.html?product=${searchHistory[0].productName}">
        <img src="src/hist.webp" alt="" width="32px" height="32px">
        <span>${searchHistory[0].productName}</span>
        </a>`
    }
    if(searchHistory.length>1){
        history.innerHTML = `<a href="product-page.html?product=${searchHistory[0].productName}">
        <img src="src/hist.webp" alt="" width="32px" height="32px">
        <span>${searchHistory[0].productName}</span>
    </a>
    <a href="product-page.html?product=${searchHistory[1].productName}">
    <img src="src/hist.webp" alt="" width="32px" height="32px">
    <span>${searchHistory[1].productName}</span>
</a>`
    }
        
}

search.addEventListener('keypress', function(e){
    if(e.key == 'Enter')
    {
        searchHistory.unshift({productName: search.value});
        if(searchHistory.length>2){
            searchHistory.pop();
        }   
        if(search.value.length > 0){
        localStorage.setItem('search', JSON.stringify(searchHistory));
        updateSearchBar()
    window.location.href = `product-page.html?product=${search.value}`
    }
    }
})