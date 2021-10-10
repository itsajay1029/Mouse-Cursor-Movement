
const eyeballs=document.querySelectorAll('.eyeball');

window.addEventListener('mousemove',(e)=>{
    let screenWidth=this.innerWidth;
    let screenHeight=this.innerHeight;
    let cursorX=e.pageX;
    let cursorY=e.pageY;
    let X=((cursorX/screenWidth)*100)-50;
    let Y=((cursorY/screenHeight)*100)-50;
    eyeballs.forEach(eye =>{
        eye.style=`
            
            transform:translate(${X*2}%,${Y*2}%);     
               
        `
    })
});