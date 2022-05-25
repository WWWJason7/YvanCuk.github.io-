let Country = [
    'China',
    '美国'
]
let City = [
    [
        'Supreme',
        '江苏',
        '广州塔',
        '上海'
    ],
    [
        'Supreme',
        '华盛顿'
    ]
]
let Brands = [
    [
        'Supreme',
        'Balenciage',
    ],
    [
        'Supreme',
        'Balenciage',
    ]
]
var map = new BMap.Map("container");
map.centerAndZoom("北京", 10);
map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开

var localSearch = new BMap.LocalSearch(map);
localSearch.enableAutoViewport(); //允许自动调节窗体大小
function searchByStationName(val) {
    map.clearOverlays();//清空原来的标注
    // var keyword = document.getElementById("text_").value;
    var keyword = val;
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        map.centerAndZoom(poi.point, 10);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
        var content = "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    });
    console.log(1);
    localSearch.search(keyword);
}





let select = document.querySelectorAll('select')
let CountryF = ''
for (let k = 0; k < Country.length; k++) {
    CountryF += `<option>${Country[k]}</option>`
}
select[0].innerHTML = CountryF
function apply(C, B) {
    let c = ''
    let b = ''
    for (let i = 0; i < C.length; i++) {
        c += `<option>${C[i]}</option>`
    }
    for (let j = 0; j < B.length; j++) {
        b += `<option>${B[j]}</option>`
    }
    select[1].innerHTML = c
    select[2].innerHTML = b
}
apply(City[0], Brands[0])
select[0].onchange = () => {
    let index = select[0].selectedIndex
    apply(City[index], Brands[index])
    searchByStationName(City[index][0])
    console.log(select[0].selectedIndex);
}
select[1].onchange = () => {
    let index = select[1].selectedIndex
    // apply(City[index], Brands[0])
    searchByStationName(City[select[0].selectedIndex][index])
    console.log(City[select[0].selectedIndex][index]);
}
