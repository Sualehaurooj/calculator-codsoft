var screen=document.getElementById("result");
function input(number){
    result.value += number;
}
function allclear(){
    result.value="";
}
function del(){
    result.value= result.value.slice(0,-1)
}
function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch{
        result.value="Error"; 
    }
}