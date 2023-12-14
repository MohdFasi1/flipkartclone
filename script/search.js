let search = document.querySelector('.search-bar');
let history = document.querySelector('.search-history');
let searchHistory=[]
onload = function() {
    updateSearchBar()
}
function updateSearchBar(){
    let searchHistory = JSON.parse(localStorage.getItem('search'))
    console.log(searchHistory)
    if(searchHistory.length==1){

        history.innerHTML = `<a href="#">
        <img src="src/hist.webp" alt="" width="32px" height="32px">
        <span>${searchHistory[0]}</span>
        </a>`
    }
    if(searchHistory.length>1){
        history.innerHTML = `<a href="">
        <img src="src/hist.webp" alt="" width="32px" height="32px">
        <span>${searchHistory[0]}</span>
    </a>
    <a href="">
    <img src="src/hist.webp" alt="" width="32px" height="32px">
    <span>${searchHistory[1]}</span>
</a>`
    }
        
}

search.addEventListener('keypress', function(e){
    if(e.key == 'Enter')
    {
        searchHistory.unshift(search.value);
        if(searchHistory.length>2){
            searchHistory.pop();
        }
        localStorage.setItem('search', JSON.stringify(searchHistory));
    updateSearchBar()
    }
})