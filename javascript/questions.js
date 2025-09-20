
    const questions=document.getElementById("questions");
    questions.addEventListener("change", function(){
       const property=questions.nextElementSibling;
      if(questions.value==questions.children[0].textContent||questions.value==questions.children[questions.children.length-1].textContent){
         property.setAttribute("required", true);
         property.disabled=false;
       }
       else{
         property.setAttribute("required", false);
         property.disabled=true;
         property.value="";
       }
    });
 
function ParseBoolean(value){
    if(value=="true")
        return true;
    else
        return false;
}
function ParseYes(value){
    if(value=="yes")
        return true;
    else
        return false;
}
function RemoveNo(characters, character, property, value){
  
    for(let position=0; position<characters.length; position++){
            
            if(typeof people[position][property]=="boolean"){
              
              if((ParseBoolean(characters[position].getAttribute(property))==value)!=(character[property]==value))
                characters[position].style.display="none"; 
               
            }
            else if((characters[position].getAttribute(property)==value)!=(character[property]==value)){
                 characters[position].style.display="none";
                 
                 
            }
                
        }
    
}
function AnswerQuestion(property, value){
   if(computerCharacter[property]==value)
     alert("Yes");
   else 
     alert("No");
}
const ask=document.getElementById("ask");
 
ask.addEventListener("click", function(press){
    press.preventDefault();

    const board=document.getElementById("player_board");
    const characters=board.querySelectorAll(".character");
    const property=document.getElementById("property");
    
    if(property.disabled==true||property.value.length>0){
     switch(questions.value){
        case questions.children[0].textContent:
             
                const name=document.getElementById("property").value;
                 
                AnswerQuestion("name", name);
                RemoveNo(characters, computerCharacter, "name", name.toLowerCase());
                break;
        case questions.children[1].textContent:
             AnswerQuestion("bald", true);
             RemoveNo(characters, computerCharacter, "bald", true);
             break;
        case questions.children[2].textContent:
            AnswerQuestion("gender", "man");
            RemoveNo(characters, computerCharacter, "gender", "man");
            break;
        case questions.children[3].textContent:
            AnswerQuestion("skin_color", "white");
            RemoveNo(characters, computerCharacter, "skin_color", "white");
            break;
        default:
            const hairColor=document.getElementById("property").value.toLowerCase();
             AnswerQuestion("hair_color", hairColor);
             RemoveNo(characters, computerCharacter, "hair_color", hairColor);
             break;
    }
    document.getElementById("property").value="";
    if(!DisplayVictoryMessage(playerBoard, "Congratulations! You won!"))
      ComputerMove();
   }
   else{
    alert("You must enter a value.");
   }
});