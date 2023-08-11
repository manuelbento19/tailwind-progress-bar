const progressBar = document.querySelector('#progress');
const body = document.body;

const heightToScroll = body.scrollHeight - window.innerHeight;

window.addEventListener('scroll',()=>{
    const scrolled = (window.scrollY/heightToScroll) * 100
    progressBar.style.width=`${scrolled}%`
})