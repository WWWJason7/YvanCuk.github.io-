let shopList = [
    {
        id: 1,
        brand: 'Off-White',
        title: "Pink sweater",
        price: '$999',
        oldPrice: '$1399',
        shopImg: "image/kids1.jpg"
    },
    {
        id: 2,
        brand: 'Fear of God',
        title: "Fear of God and Nike hoodie",
        price: '$599',
        oldPrice: '$999',
        shopImg: "image/kids2.jpg"
    },
    {
        id: 3,
        brand: 'Nike',
        title: "Off-white and Nike shoes",
        price: '$199',
        oldPrice: '$599',
        shopImg: "image/kids3.jpg"
    },
]
let a = document.querySelectorAll('.commodity a')
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', () => {
        localStorage.setItem('item', JSON.stringify(shopList[i]))
    })
}
let choose = document.querySelectorAll('.choose div')
for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener('click', () => {
        console.log(i);
    })
}
$(function () {
    $(".choose div").click(function () {
        if ($(this).children('span').text() == '+') {
            $(this).children('span').text('-')
        } else {
            $(this).children('span').text('+')
        }
        $(this).children("ul").slideToggle();
        // console.log(1);
    });
    $(".searchClick").click(function () {
        $('.search').slideToggle();
        // console.log(1);
    });

})