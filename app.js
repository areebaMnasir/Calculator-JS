const input = document.getElementById("input");
const addvalue = (val) =>{
   input.value += val
}
 const clearAll = () =>{
    input.value = "";
 }
 const deleteEach = ()=>{
    if(input == "DE"){
        input.value = '';
    }
    else{
        input.value = input.value.slice(0,-1)
    }
 }
 const addAll = ()=>{
    var chartAtt = input.value.charAt(input.value.length -1)
    if(chartAtt === '+' || chartAtt === '-' || chartAtt === '*' || chartAtt === '/'){
        alert("incorrect");
        return 
    }
    input.value = eval(input.value);
 }


