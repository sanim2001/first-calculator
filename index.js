let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let scValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        btn = e.target.innerText;
        if(btn=='X'){
            scValue =scValue.slice(0,-1);
            display.value = scValue;
        }
        else if(btn=='C'){
            scValue ="";
            display.value = scValue;
        }
        else if(btn=='='){
            display.value = eval(scValue);
        }
        else{
            scValue +=btn;
            display.value = scValue;
        }

    })
}