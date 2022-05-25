let shop = JSON.parse(localStorage.getItem('item'))
console.log(shop);
if (typeof shop == 'object') {
    document.querySelector('.picture img').src = shop.shopImg
    document.querySelector('#word1 em').innerHTML = shop.brand
    document.querySelector('#word2').innerHTML = shop.title
    document.querySelector('#price1').innerHTML = shop.price
    document.querySelector('#price2').innerHTML = shop.oldPrice
}
function addShopList() {
    let goodsList = JSON.parse(localStorage.getItem('goodsList'))
    console.log(goodsList);
    let flag = false
    if (goodsList != null) {
        for (let i = 0; i < goodsList.length; i++) {
            if (goodsList[i].id == shop.id) {
                goodsList[i].num += 1
                flag = true
            }
        }
        if (!flag) {
            shop.num = 1
            goodsList.push(shop)
        }
        localStorage.setItem('goodsList', JSON.stringify(goodsList))
    } else {
        shop.num = 1
        localStorage.setItem('goodsList', `[${JSON.stringify(shop)}]`)
    }
}