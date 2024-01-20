let disCategory = document.querySelector('.disCategory')
let dcwContainer = document.querySelector('.dcwContainer')
let dcwbLeft = document.querySelector('.dcwbLeft')
let dcwbRight = document.querySelector('.dcwbRight')
function catg(){
    console.log()
    let catgs = products.map((e)=>e.category)
    let uniqueCatg = catgs.filter((e,i)=>catgs.indexOf(e) == i)
    console.log(uniqueCatg)
    disCategory.innerHTML = uniqueCatg.map((e)=>`<a href="catg.html?id:${e}">${e}</a>`).join(' ')
    console.log(disCategory)
} 

function catgLeft(){
    disCategory.style.transform = `translateX(0)`;
    dcwbLeft.style.display = 'none'
}
function catgRight(){
    disCategory.style.transform = `translateX(-74%)`;
    dcwbRight.style.display = 'none'
}
dcwContainer.addEventListener('mouseenter', function(){
    disCategory.style.transform == `translateX(0px)` ? dcwbRight.style.display = 'block' : dcwbLeft.style.display = 'block';
})  
dcwContainer.addEventListener('mouseleave', function(){
    dcwbRight.style.display = 'none'
     dcwbLeft.style.display = 'none';
})