let but1 = document.getElementById("bt1");
let but2 = document.getElementById("bt2");
let but3 = document.getElementById("bt3");
let but4 = document.getElementById("bt4");
let but5 = document.getElementById("bt5");
let sumbit=document.getElementById("sumbit")
let a=0;

but1.addEventListener("click",test1);

function test1(){
     but1.classList.add("orange")
     but2.classList.remove("orange")
     but3.classList.remove("orange")
     but4.classList.remove("orange")
     but5.classList.remove("orange")

}

but2.addEventListener("click",test2);

function test2(){
     but1.classList.remove("orange")
     but2.classList.add("orange")
     but3.classList.remove("orange")
     but4.classList.remove("orange")
     but5.classList.remove("orange")

}

but3.addEventListener("click",test3);

function test3(){
     but1.classList.remove("orange")
     but2.classList.remove("orange")
     but3.classList.add("orange")
     but4.classList.remove("orange")
     but5.classList.remove("orange")

}

but4.addEventListener("click",test4);

function test4(){
     but1.classList.remove("orange")
     but2.classList.remove("orange")
     but3.classList.remove("orange")
     but4.classList.add("orange")
     but5.classList.remove("orange")

}

but5.addEventListener("click",test5);

function test5(){
     but1.classList.remove("orange")
     but2.classList.remove("orange")
     but3.classList.remove("orange")
     but4.classList.remove("orange")
     but5.classList.add("orange")

}
sumbit.addEventListener("click", sum);

function sum(){
    if(but1.classList.contains("orange")){
        alert(1)
    } else if(but2.classList.contains("orange")){
        alert(2)
    } else if (but3.classList.contains("orange")){
        alert(3)
    } else if (but4.classList.contains("orange")){
        alert(4)
    } else if (but5.classList.contains("orange")){
        alert(5)
    }
}