const bt5 = document.querySelector('#bt5');
const bt10 = document.querySelector('#bt10');
const bt15 = document.querySelector('#bt15');
const bt25 = document.querySelector('#bt25');
const bt50 = document.querySelector('#bt50');
const btCus = document.querySelector('#btcus');
const imp1 = document.querySelector('#imp1');
const imp2 = document.querySelector('#imp2');
const tip = document.querySelector('#tip');
const sum = document.querySelector('#sum');
const btReset = document.querySelector('#btReset')

bt5.onclick = () =>{
    let total = imp1.value * 1.05 / imp2.value;
    sum.innerHTML = `$${ total.toFixed(2)}`;
    tip.innerHTML=`$${ (imp1.value * 0.05 / imp2.value).toFixed(2)}`;
    bt5.classList.add("col")
    bt10.classList.remove('col')
    bt15.classList.remove('col')
    bt25.classList.remove('col')
    bt50.classList.remove('col')
}

bt10.onclick = () =>{
    let total = imp1.value * 1.1 / imp2.value;
    sum.innerHTML = `$${ total.toFixed(2)}`;
    tip.innerHTML=`$${ (imp1.value * 0.1 / imp2.value).toFixed(2)}`;
    bt5.classList.remove("col")
    bt10.classList.add('col')
    bt15.classList.remove('col')
    bt25.classList.remove('col')
    bt50.classList.remove('col')
}

bt15.onclick = () =>{
    let total = imp1.value * 1.15 / imp2.value;
    sum.innerHTML = `$${ total.toFixed(2)}`;
    tip.innerHTML=`$${ (imp1.value * 0.15 / imp2.value).toFixed(2)}`;
    bt5.classList.remove("col")
    bt10.classList.remove('col')
    bt15.classList.add('col')
    bt25.classList.remove('col')
    bt50.classList.remove('col')
}

bt25.onclick = () =>{
    let total = imp1.value * 1.25 / imp2.value;
    sum.innerHTML = `$${ total.toFixed(2)}`;
    tip.innerHTML=`$${ (imp1.value * 0.25 / imp2.value).toFixed(2)}`;
    bt5.classList.remove("col")
    bt10.classList.remove('col')
    bt15.classList.remove('col')
    bt25.classList.add('col')
    bt50.classList.remove('col')
}

bt50.onclick = () =>{
    let total = imp1.value * 1.5 / imp2.value;
    sum.innerHTML = `$${ total.toFixed(2)}`;
    tip.innerHTML=`$${ (imp1.value * 0.5 / imp2.value).toFixed(2)}`;
    bt5.classList.remove("col")
    bt10.classList.remove('col')
    bt15.classList.remove('col')
    bt25.classList.remove('col')
    bt50.classList.add('col')
}

btReset.onclick = () =>{
    bt5.classList.remove("col")
    bt10.classList.remove('col')
    bt15.classList.remove('col')
    bt25.classList.remove('col')
    bt50.classList.remove('col')
    sum.innerHTML = '$0.00';
    tip.innerHTML = '$0.00';

}