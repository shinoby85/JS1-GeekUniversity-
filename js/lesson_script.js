'use strict';
//Для задания 1
function findTemp(){
    let tC=document.getElementById('temp');
    if (!checkTemp(tC.value)) {
        tC.value="";
        tC.placeholder='Ошибка. Повторите ввод';
        return null;
    }
    let tF=(9/5)*Number(tC.value)+32;
    let tempResult=document.getElementById('temp-result');    
    if(confirm('Данные вывести в alert?')){
        alert(`Температура ${Number(tC.value)} по Цельсию соответствует температуре ${tF} по Фаренгейту`);
    }
    else{
        tempResult.value=tF;
        tempResult.style.backgroundColor='lightgreen';
    }
    return false;
}

function checkTemp(temp){
    if (Number(temp)==isNaN||temp.trim()=='')return false;
    return true;
}
function resetTemp(){
    let rst=confirm('Очистить форму?');
    if (rst) {
        let tempResult=document.getElementById('temp-result');
        tempResult.style.backgroundColor='white';        
    }
    return rst;
}

//Для задания 2
function changeData(){
    let name= document.getElementById('name').value;
    let admin=document.getElementById('admin');
    admin.value=name;
    console.log(admin.value);
    return false;
}