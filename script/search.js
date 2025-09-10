const search = document.querySelector('.search-bar');
const history = document.querySelector('.search-history');
let searchHistory = JSON.parse(localStorage.getItem('search')) || [];

function updateSearchBar() {
    if (searchHistory.length > 0) {
        const searchData = searchHistory.map(e => `
            <a href="product-page.html?product=${e.productName}">
                <img src="src/hist.webp" alt="" width="32px" height="32px">
                <span>${e.productName}</span>
            </a>
        `);
        history.innerHTML = searchData.join('');
    } else {
        history.innerHTML = '<span style="color:#888;font-size:13px;">No recent searches</span>';
    }
}

search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const value = search.value.trim();
    if (value.length === 0) return;
    // Remove duplicate entries
    searchHistory = searchHistory.filter(item => item.productName !== value);
    searchHistory.unshift({ productName: value });
    if (searchHistory.length > 5) {
        searchHistory.pop();
    }
    localStorage.setItem('search', JSON.stringify(searchHistory));
    updateSearchBar();
    window.location.href = `product-page.html?product=${encodeURIComponent(value)}`;
}

// Initial render
updateSearchBar();