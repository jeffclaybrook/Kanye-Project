const counter = document.getElementById('counter');
const button = document.getElementById('button');

let count = 0;

button.addEventListener('click', () => {
 count++;
 counter.innerHTML = count;
})

function createRipple(e) {
 const element = e.currentTarget;
 const circle = document.createElement('span');
 const diameter = Math.max(element.clientWidth, element.clientHeight);
 const radius = diameter / 2;

 circle.style.width = circle.style.height = `${diameter}px`;
 circle.style.left = `${e.clientX - element.offsetLeft - radius}px`;
 circle.style.top = `${e.clientY - element.offsetTop - radius}px`;
 circle.classList.add('ripple');

 const ripple = element.getElementsByClassName('ripple')[0];

 if (ripple) ripple.remove();

 element.appendChild(circle);
}

const buttons = [button];

for (const button of buttons) {
 button.addEventListener('click', createRipple)
}