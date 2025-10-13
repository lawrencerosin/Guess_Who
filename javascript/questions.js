
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
function RemoveNo(choices, choice, property, value){
  
    for(let position=0; position<choices.length; position++){
            
            if(typeof people[position][property]=="boolean"){
              
              if((ParseBoolean(choices[position].getAttribute(property))==value)!=(choice[property]==value))
                choices[position].style.display="none"; 
               
            }
            else if((choices[position].getAttribute(property)==value)!=(choice[property]==value)){
                 choices[position].style.display="none";
                 
                 
            }
                
        }
    
}
function AnswerQuestion(property, value){
   if(computerChoice[property]==value)
     alert("Yes");
   else 
     alert("No");
}
function ProperProperty(value){
    if(value.length==0)
        return false;
    else{
        for(let position=0; positon<value.length; position++){
            if(!(value[position]>='A'&&value[position]<='Z'||value[position]>='a'&&value[position]<='z'))
                return false;
        }
        return true;
    }
}
const ask=document.getElementById("ask");
 
ask.addEventListener("click", function(press){
    press.preventDefault();
  
    const board=document.getElementById("player_board");
    const choices=board.querySelectorAll(".choice");
    const property=document.getElementById("property");
    
    if(property.disabled||property.value.length>0){
     switch(questions.value){
        case questions.children[0].textContent:
             
                const name=document.getElementById("property").value;
                 
                AnswerQuestion("name", name);
                RemoveNo(choices, computerChoice, "name", name.toLowerCase());
                break;
        case questions.children[1].textContent:
             AnswerQuestion("bald", true);
             RemoveNo(choices, computerChoice, "bald", true);
             break;
        case questions.children[2].textContent:
            AnswerQuestion("gender", "man");
            RemoveNo(choices, computerChoice, "gender", "man");
            break;
        case questions.children[3].textContent:
            AnswerQuestion("skin_color", "white");
            RemoveNo(choices, computerChoice, "skin_color", "white");
            break;
        default:
            const hairColor=document.getElementById("property").value.toLowerCase();
             AnswerQuestion("hair_color", hairColor);
             RemoveNo(choices, computerChoice, "hair_color", hairColor);
             break;
    }
    document.getElementById("property").value="";
    if(!DisplayVictoryMessage(playerBoard, "Congratulations! You won!")){
      ComputerMove();
     
    }
   }
   
});