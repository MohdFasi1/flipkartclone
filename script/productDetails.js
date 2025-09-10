let urldata = new URLSearchParams(window.location.search)
let pid = urldata.get('id')
console.log(pid)
let pdImgList = document.querySelector('.pd-imgList')
let pdimg = document.querySelector('.pd-imgWrap')
let pdContainer = document.querySelector('.ProductDetialscontainer')
let catgPath = document.querySelector('.prodPath-catg')
let catgBrand = document.querySelector('.prodPath-brand')
let catgTitle = document.querySelector('.prodPath-title')
let imgList
onload = function () {
    apiCall()
        .then(() => {
            displayProductDetails()

        })
}
let imgs
let pdImg
function displayProductDetails() {
    let prod = products[pid]
    console.log(products)
    imgs = prod.images.map((e) => `<li class="listimgs"><img src="${e}"></li>`)
    pdImgList.innerHTML = imgs.join(' ')
    pdImg = document.querySelectorAll('.pd-imgList li')
    pdimg.innerHTML = `<img src="${prod.images[0]}">`

    pdImg.forEach(img => {
        img.addEventListener('mouseenter', function (e) {
            setTimeout(() => {
                pdImg.forEach(img => {
                    img.style.border = '1px solid #f0f0f0'
                })
                img.style.border = ' 2px solid blue'
                pdimg.innerHTML = e.target.innerHTML
            }, 300);
        });
    });


    catgPath.innerHTML = `<a href="">${prod.category}</a>
    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_39X-Og">
            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="DpXnhQ"></path>
    </svg>`
    catgBrand.innerHTML = `<a href="">${prod.brand}</a>
    <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_39X-Og">
        <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="DpXnhQ"></path>
    </svg>`
    catgTitle.innerHTML = `<a href="">${prod.title}</a>`
    document.querySelector('.productTitle').innerHTML = prod.brand != undefined ? `${prod.title} ` : `${prod.brand} ${prod.title}`
    document.querySelector('.prodRating').innerHTML = `${Math.floor(prod.rating * 10) / 10} <img src="src/star.svg" alt="">`

    document.querySelector('.prodRating').innerHTML = prod.rating.toFixed(1) + ' <img src="src/star.svg" alt="">'
    document.querySelector('.prodPrice').innerHTML = `₹${Math.floor((prod.price - prod.price / 100 * prod.discountPercentage) * 83.3)} <s style="font-size:12px; color:gray">₹${Math.floor(prod.price * 83.3)}</s> <span style="color:#388e3c;">${Math.floor(prod.discountPercentage)}% off</span>`
    document.querySelector('.decsription').innerHTML = prod.description
}

function addtoCart() {
    console.log(prodPath)
}
function buyNow() {

}