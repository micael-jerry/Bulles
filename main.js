const bubble = document.createElement('span');
bubble.classList.add('bubble')
document.body.appendChild(bubble)

const size = Math.random()*200+100+"px" ;
bubble.style.height = size ;
bubble.style.width = size ;

bubble.style.top = Math.random()*150+"%";
bubble.style.left = Math.random()*100+"%";

