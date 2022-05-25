let shopList = [
    {
        id: 1,
        brand: 'LOUIS VUITTON',
        title: "floral shirt",
        price: '$2199',
        oldPrice: '$3666',
        shopImg: "image/man1.jpg"
    },
    {
        id: 2,
        brand: 'Supreme',
        title: "Supreme and Burberry hoodies",
        price: '$1299',
        oldPrice: '$3699',
        shopImg: "image/man2.jpg"
    },
    {
        id: 3,
        brand: 'Yves Saint Laurent',
        title: "Suit Jacket",
        price: '$2399',
        oldPrice: '$4499',
        shopImg: "image/man3.jpg"
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