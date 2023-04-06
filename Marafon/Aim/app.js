const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list')
const timeEl=document.querySelector('#time')
const board=document.querySelector('#board')
const colors=['red','blue','green','Purple','orange']
const restart=document.querySelector('.restart')
let time=0
let score=0

startBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click',event=>{
    if(event.target.classList.contains('time-btn')){
       time=parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})

board.addEventListener('click',event=>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
       
    }
})

function startGame(){
   var interval=setInterval(function decreseTime(){
    if(time===0){
        finishGame()
        clearInterval(interval)
    }else{

    let current=--time
    if(current<10){
        current=`0${current}`
    }
    setTime(current)}
   },1000)
    createRandomCircle()
    setTime(time)
    
}



function setTime(value){
    timeEl.innerHTML=`00:${value}`
}

function finishGame(){
    
    board.innerHTML=`<h1>Счёт: <span class="primary">${score}<span/><h1>`
    restart.style.opacity=1
    clearInterval(interval)

}

function createRandomCircle(){
    const circle=document.createElement('div')
    const size=getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x=getRandomNumber(0,width-size)
    const y=getRandomNumber(0,height-size)
    console.log(y)
    
    

    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    circle.style.background=setColor(circle)

    board.append(circle)
}

function getRandomNumber(min,max){
   return Math.round(Math.random()*(max-min)+min)
}

function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length) 
    return colors[index]
 }

 function setColor(element){
    const color=getRandomColor()
    element.style.backgroundColor = color
    
}

restart.addEventListener('click',event=>{
    
    screens[1].classList.remove('up')
    
})

