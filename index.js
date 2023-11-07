
/*displaying items in container*/
let mainmenuitem=document.querySelector('.mainmenu');
console.log(mainmenuitem);
let arrayforelement='';
items.forEach(element => {
    arrayforelement+=`
    <div class="container1">
    <div class="image"><img src="${element.thumbnail}" alt="thumbnail"></div>
    <div class="itemtitle">${element.title}</div>
    <div class="price">${element.price}
    <div class="discount">${element.discountPercentage} </div></div>
    <div class="ratings">
    ${element.rating} ⭐
    </div>
    </div>`
}); 
mainmenuitem.innerHTML=arrayforelement;

const containerOfItemImage=document.querySelector(".containerofitemimage");
console.log(containerOfItemImage);
const images = document.querySelectorAll(".image");

images.forEach(image => {
    image.addEventListener('click', function () {
        console.log(image.innerHTML); // Log the HTML content of the clicked image
       
        // containerOfItemImage.innerHTML=image.innerHTML;
    });
});
let section3items=document.querySelector('.itemsofsect3');
let arrayforsect3items='';
items2.forEach(element=>{
    arrayforsect3items+=`
    <div class="sect3cont1">
    <div class="image2"><img src="${element.thumbnail}" alt="thumbnail"></div>
    <div class="itemtitle2">${element.title}</div>
    <div class="price2">${element.price}
    <div class="discount2">${element.discountPercentage} </div></div>
    <div class="ratings2">
    ${element.rating} ⭐
    </div>
    </div>
    `
});
section3items.innerHTML=arrayforsect3items;

let sect4items=document.querySelector('.itemsofsect4');
let arrayforsect4items='';
items3.forEach(element=>{
    arrayforsect4items+=`
    <div class="sect4cont1">
    <div class="image3"><img src="${element.thumbnail}" alt="thumbnail"></div>
    <div class="itemtitle3">${element.title}</div>
    <div class="price3">${element.price}
    <div class="discount3">${element.discountPercentage} </div></div>
    <div class="ratings3">
    ${element.rating} ⭐
    </div>
    </div>`
});
sect4items.innerHTML=arrayforsect4items;
// console.log(arrayforsect4items);
/************************************************************************** */
const slider = document.querySelector('.slider-wrapper');
let count = 0;

function slide() {
    count++;
    if (count >= 5) {
        count = 0;
    }
    const offset = -count * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slide, 3000); 
////******************************************************** */
const preview=()=>{
    mainmenuitem.forEach(element=>{
        element.a
    })
}
// const itemsincart='';
// const cart=()=>{

// }
