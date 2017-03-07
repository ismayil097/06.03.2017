saat();
function saat(){
    var h = document.getElementById('saat');
    var m = document.getElementById('deqiqe');
    var s = document.getElementById('saniye');
    a = setInterval(function(){
        var t = new Date();
        var second = t.getSeconds();
        s.style.transform = 'rotate('+second*6+'deg)';
        s.style.transformOrigin = 'bottom center';
    },1000);

    b = setInterval(function(){
        var t = new Date();
        var hour = t.getHours();
        h.style.transform = 'rotate('+hour*30+'deg)';
        h.style.transformOrigin = 'bottom center';
    },1000);

    c = setInterval(function(){
        var t = new Date();
        var minute = t.getMinutes();
        m.style.transform = 'rotate('+minute*6+'deg)';
        m.style.transformOrigin = 'bottom center';
    },1000);

}


