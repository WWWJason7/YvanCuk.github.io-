let goodsList = JSON.parse(localStorage.getItem('goodsList')) || []
let allPrice = 0
for (let i = 0; i < goodsList.length; i++) {
    let goods = goodsList[i]
    allPrice += goods.num * goods.price.slice(1, goods.price.length)
}
document.querySelector('#total2').innerHTML = '$' + allPrice
console.log(allPrice);