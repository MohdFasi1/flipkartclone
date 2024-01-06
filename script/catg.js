let disCategory = document.querySelector('.disCategory')

function catg(){
    console.log()
    let catgs = products.map((e)=>e.category)
    let uniqueCatg = catgs.filter((e,i)=>catgs.indexOf(e) == i)
    console.log(uniqueCatg)
    disCategory.innerHTML = uniqueCatg.map((e)=>`<a href="catg.html?id:${e}">${e}</a>`).join(' ')
    console.log(disCategory)
}   