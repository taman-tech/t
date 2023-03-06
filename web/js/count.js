var flg = localStorage.getItem('on_load_counter');

if (flg === null) {
    flg = 0;
}

flg++;

localStorage.setItem("on_load_counter", flg);

document.getElementById('count').innerHTML = flg;