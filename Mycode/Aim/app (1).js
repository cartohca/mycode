const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list')
const timeEl=document.querySelector('#time')
const board=document.querySelector('#board')
const colors=['red','blue','green','purple','orange']
const times = [10, 20, 30, 40]
const restart = document.querySelector('.restart')

let score=0

const handleStartBtnClick = (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
    startBtn.removeEventListener('click', handleStartBtnClick);
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
    board.innerHTML=`<h1>Счёт: <span class="primary">${score}<span/><h1>`
    restart.style.display= 'block';
    clearInterval(interval)
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
    
})

