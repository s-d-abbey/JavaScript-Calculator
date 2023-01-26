function display(val){
    document.getElementById('result').value += val
    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
var input_space = document.getElementById('result')
input_space.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
       
            let x = document.getElementById('result').value
        
            let y = eval(x);
        
            document.getElementById('result').value = y
        
            return y
        
    
    }
})
function clearScreen(){

    document.getElementById('result').value = ''

}