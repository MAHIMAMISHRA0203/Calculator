let buttons=document.querySelectorAll("button");
let input=document.querySelector("input");
for(let button of buttons){
    button.addEventListener("click",function(e){ 
        let btntext=e.target.innerText;
        if(btntext==="C"){
            input.value="";
        }
        else if( btntext==="="){
            try{
           input.value=eval(input.value);
            }
            catch(err){
            input.value="itni maar dungi na";
            }
            inputEvent.value=eval(input.value );
        }
        else{
            input.value+=btntext;
        }
    });
}