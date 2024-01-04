let input = document.getElementById("numOfwords"); 
let con = document.querySelector(".container"); 

let generateWord = (n) => {
    let x="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text=""; 
    for(let i=0;i<n;i++){
        text+=x[(Math.random()*25).toFixed(0)]; 
    } 
    return text; 
}



let generatePara = () => {
    let num = Number(input.value); 
    let sample=""; 
    for(let i=0;i<num;i++){
        sample+=generateWord((Math.random()*25).toFixed(0)); 
        sample+=" "; 
    }
    let para = document.createElement("p");
    para.innerText=sample;  
    para.setAttribute("class", "paras"); 
    con.append(para); 
} 