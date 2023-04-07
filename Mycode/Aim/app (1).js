const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list')
const timeEl=document.querySelector('#time')
const board=document.querySelector('#board')
const colors=['red','blue','green','purple','orange']
const times = [10, 20, 30, 40]
const restart = document.querySelector('.restart')

let score=0
let clicks=0
let sum=0

const handleStartBtnClick = (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
    
}

startBtn.addEventListener('click', handleStartBtnClick);

times.forEach(time => {
    const li = document.createElement('li');
    const btn = document.createElement('btn');

    btn.classList.add('time-btn');
    btn.textContent = time.toString();
    btn.addEventListener('click', () => {
        screens[1].classList.add('up');
        startGame(time);
    });

    li.appendChild(btn);

    timeList.appendChild(li);
});


board.addEventListener('click',event=>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
       
    }
})

function startGame(time) {
    restart.style.opacity='0'
    score=0
    clicks=0
    sum=0
    let currentTime = time;
    const interval = setInterval(() => {
        if (currentTime === 0) {
            finishGame(interval)
        } else {
            currentTime--;
            setTime(currentTime);
        }
    },1000)

    setTime(time)
    createRandomCircle()
}



function setTime(value){
    timeEl.innerHTML=`00:${value < 10 ? '0' + value : value}`;
}

function finishGame(interval) {
    
    restart.style.opacity='1'
    clearInterval(interval)
    sum=(score/clicks).toFixed(2)*100
    board.innerHTML=`<h1>Счёт: <span class="primary">${score}<br>точность${sum}%<span/><h1>`
    console.log(clicks)
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x=getRandomNumber(0,width-size)
    const y=getRandomNumber(0,height-size)
    console.log(y)


    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    circle.style.background= getRandomColor()

    board.append(circle)
}

function getRandomNumber(min,max){
   return Math.round(Math.random()*(max-min)+min)
}

function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length) 
    return colors[index]
}

restart.addEventListener('click',event=>{
    
    screens[1].classList.remove('up')
    score=0
    board.innerHTML=``
    
})
board.addEventListener('click',event=>{
    clicks+=1})

