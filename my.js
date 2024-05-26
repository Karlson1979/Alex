const squareEl=document.querySelector('.square')
const circleEl=document.querySelector('.circle')
const bodyEl=document.querySelector('body')
// console.log(bodyEl)

circleEl.addEventListener('mousemove',()=>{
const x=Math.round(Math.random()*window.screen.width-200)
const y=Math.round(Math.random()*window.screen.height-200)
circleEl.style.left=`${x}px`
circleEl.style.top=`${y}px`

})
bodyEl.addEventListener('click',()=>{
  location.reload();

})