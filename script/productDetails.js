let urldata = new URLSearchParams(window.location.search)
let pid = urldata.get('id')
console.log(pid)
let pdImgList = document.querySelector('.pd-imgList')
let pdimg = document.querySelector('.pd-imgWrap')
onload = function(){
   apiCall()
   .then(()=>{ 
   displayProductDetails()
   })
}

function displayProductDetails(){
    imgs = products[0].images.map((e)=>`<li><img src="${e}"></li>`)
    pdImgList.innerHTML = imgs.join(' ')
    pdimg.innerHTML = `<img src="${products[0].images[0]}">`

}