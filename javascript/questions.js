
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
       }
    });
function ParseBoolean(value){
    if(value=="true")
        return true;
    else
        return false;
}
function RemoveNo(board, character, property){
  
    for(let hPosition=0; hPosition<board.children.length; hPosition++){
        
        for(let vPosition=0; vPosition<board.children[hPosition].children.length; vPosition++){
            
            if(typeof people[hPosition*4+vPosition][property]=="boolean"){
              if(ParseBoolean(board.children[hPosition].children[vPosition].getAttribute(property))!=character[property])
                board.children[hPosition].children[vPosition].style.display="none"; 
            }
            else if(board.children[hPosition].children[vPosition].getAttribute(property)!=character[property])
                 board.children[hPosition].children[vPosition].style.display="none";
                
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
     
    switch(questions.value){
        case questions.children[0].textContent:
                const name=document.getElementById("property").value;
                AnswerQuestion("name", name);
                RemoveNo(board, computerCharacter, "name");
                break;
        case questions.children[1].textContent:
             AnswerQuestion("bald", true);
             RemoveNo(board, computerCharacter, "bald");
             break;
        case questions.children[2].textContent:
            AnswerQuestion("gender", "man");
            RemoveNo(board, computerCharacter, "gender");
            break;
    }
});