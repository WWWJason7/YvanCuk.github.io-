let shopList = [
    {
        id: 1,
        brand: 'LOUIS VUITTON',
        title: "Denim checkerboard Jacket jacket (pink)",
        price: '$2199',
        oldPrice: '$3666',
        shopImg: "image/woman1.jpg"
    },
    {
        id: 2,
        brand: 'Fear of God',
        title: "White fur coat",
        price: '$700',
        oldPrice: '$1099   ',
        shopImg: "image/woman2.jpg"
    },
    {
        id: 3,
        brand: 'Balenciaga',
        title: "Black wool coat)",
        price: '$1399',
        oldPrice: '$3299',
        shopImg: "image/woman3.jpg"
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