let navbar = document.queryselector('.head .navb')

document.queryselector('#menu').onclick = () =>{
    navbar.classlist.add('active');
}

document.queryselector('#class').onclick =() =>{
    navbar.classlist.remove('active');
}

//mousemove home img

document.addEventListener('mousemove',move);
function move(e){
    this.queryselectorAll('.move').foreach(layer=>{
        const speed = layer.getAttribute('data-speed')

        const x =(window.innerwidth - e.pageX*speed)/120
        const y =(window.innerwidth - e.pageY*speed)/120

        layer.style.trasfer ='translateX(${x}px) tranlateX(${x}px)'

        })
}

 gsap.from('.logo',{opacity: 0, duration:1, delay: 2,y:10})
gsap.from('.navbar .nav_item',{opacity:0, duration: 1, delay: 2.1,y:30,stagger: 0.2})
gsap.from('.title',{opacity:0, duration: 1, delay: 1.6,y:30})
gsap.from('.description',{opacity: 0,duration: 1,delay: 1.8,y:30})
gsap.from('.btn',{opacity: 0,duration: 1, delay: 2.1,y:30})
gsap.from('.image',{opacity: 0, duration: 1, delay: 2.6,y:30})
