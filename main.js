function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function removeDisplay(){
    display.value =  display.value.slice(0,-1);
}

function calc(){
    const display = document.getElementById("display");

    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error"
    }
}