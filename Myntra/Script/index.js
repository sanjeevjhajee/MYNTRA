let bagItems = [];
onLoad();

function onLoad() {
    let bagItemsStr =localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayItemsOnPageLoad();
    displayBagItemCount();
    
}




function addToBag(itemId) {
bagItems.push(itemId);
localStorage.setItem('bagItems', JSON.stringify(bagItems))
displayBagItemCount();
    
}

function displayBagItemCount() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = "visible"

        
    } else{
        bagItemCountElement.style.visibility = "hidden"

    }
}

function displayItemsOnPageLoad() {
    
let itemsContainerElement = document.querySelector('.items-container')
if (!itemsContainerElement) {
    return;
}
let innerHtml ='';
items.forEach(item => {
    innerHtml+=`<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item-Imtage">
<div class="rating">
    ${item.rating.stars} 🌟 | ${item.rating.count}
</div>
<div class="company-name"> ${item.company} </div>
<div class="item-name"> ${item.item_name} </div>
<div class="price">
    <span class="current-price"> ${item.current_price} </span>
    <span class="original-price"> ${item.original_price} </span>
    <span class="discount"> ${item.discount_percentage} </span>
</div>
    <button class="item-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
});

itemsContainerElement.innerHTML=innerHtml;

}

