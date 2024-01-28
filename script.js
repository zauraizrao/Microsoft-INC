function createCircles(){
    const box = document.querySelector('.box');
    const circle = document.createElement('span');

    let size = Math.random() * 50;

    circle.style.width = 20 + size + 'px';
    circle.style.height = 20 + size + 'px';
    circle.style.borderRadius = '50%';

    circle.style.top = Math.random() * innerHeight + 'px';
    circle.style.left = Math.random() * innerWidth + 'px';

    box.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
}

setInterval(createCircles, 250);