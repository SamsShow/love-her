const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const btn = document.querySelector('.fun1')
const btn2 = document.querySelector('.fun2')
const load = document.querySelector('.loading-bar')

function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
}

btn.addEventListener('click', () => {
    div1.classList.add('bye');
    load.classList.add('active');
    playClickSound();

    setTimeout(() => {
        div2.classList.add('active');
    }, 3000)
})


btn2.addEventListener('click', () => {
    div2.classList.remove('active');
    load.classList.remove('active');
    div1.classList.remove('bye');
})



