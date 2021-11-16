
// 1

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir


let myH1 = document.querySelector("h1");

 myH1.addEventListener("dblclick",()=>{

    
    myH1.style.backgroundColor= "red"
    myH1.style.color = "white"


})

// 2

let myH3 = document.querySelector("h3");

 myH3.addEventListener("mouseover",()=>{
    
    myH3.innerText = myH3.innerText.substring(0,myH3.textContent.length-1)
    
})

// 3

let myParagraphe = document.querySelector("p");

let i = 0;
 myParagraphe.addEventListener("click",()=>{

    if (i%2 == 0) {
        
        myParagraphe.style.backgroundColor = "blue"
        myParagraphe.style.color ="gold"
    }
    
    else{
        myParagraphe.style =""
        
        
    }
    i++

});

        


 


