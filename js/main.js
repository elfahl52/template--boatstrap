var scroll = document.querySelector('.scroll');
window.onscroll = function () {
    if (window.scrollY > 200)
    {
        scroll.classList.add('show');
    }
    else {
        scroll.classList.remove('show');
    }
}

scroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}

var navbar = document.querySelector('.navabr');
