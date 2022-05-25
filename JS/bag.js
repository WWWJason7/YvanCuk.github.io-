let quantity = document.querySelectorAll('.QUANTITY')
let SubTotal = document.querySelectorAll('.SubTotal')
let checkoutA = document.querySelectorAll('.checkout a')
let goodsList = JSON.parse(localStorage.getItem('goodsList'))
let price = 2199
let num = 1
console.log(goodsList);
function big(e) {
    let index = e.getAttribute('data-index')
    num = parseInt(quantity[index].querySelector('.num').innerHTML)
    if (num >= 0) {
        num += 1
        SubTotal[index].innerHTML = '$' + goodsList[index].price.slice(1, goodsList[index].price.length) * num
        quantity[index].querySelector('.num').innerHTML = num
        goodsList[index].num = num
        localStorage.setItem('goodsList', JSON.stringify(goodsList))
    }
    console.log(quantity[index]);
}
function small(e) {
    let index = e.getAttribute('data-index')
    num = parseInt(quantity[index].querySelector('.num').innerHTML)
    if (num > 1) {
        num -= 1
        SubTotal[index].innerHTML = '$' + goodsList[index].price.slice(1, goodsList[index].price.length) * num
        quantity[index].querySelector('.num').innerHTML = num
        goodsList[index].num = num
    } else {
        goodsList.splice(index, 1)
        console.log(goodsList);
        init()
    }
    localStorage.setItem('goodsList', JSON.stringify(goodsList))
}
function navigato() {
    localStorage.setItem('goodsList', JSON.stringify(goodsList))
}


let shop = document.querySelector('.block')

function init() {
    let shopHtml = ''
    for (let i = 0; i < goodsList.length; i++) {
        let On = goodsList[i]
        shopHtml += `<div class="shop">
        
        <div class="picture">
            <a href="#"><img src="${On.shopImg}" width="100%"></a>
        </div>

        <div class="choose">
            <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>

            <div id="UNITPRICE">${On.price}</div>

            <div id="QUANTITY" class="QUANTITY">
                <span class="small block" onclick="small(this)" data-index="${i}">-</span>
                <span class="num">${On.num}</span>
                <span class="big block" onclick="big(this)" data-index="${i}">+</span>
            </div>

            <div id="SubTotal" class="SubTotal">$${On.num * On.price.slice(1, On.price.length)}</div>
        </div>
        </div>`
    }
    shop.innerHTML = shopHtml
    console.log(goodsList[0].price.slice(1, goodsList[0].price.length));
    quantity = document.querySelectorAll('.QUANTITY')
    SubTotal = document.querySelectorAll('.SubTotal')
    checkoutA = document.querySelectorAll('.checkout a')
}
init()