
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
function NameCase(word){
    let name;
    if(word[0]>='a'&&word[0]<='z')
        name=String.fromCharCode(word[0]-32);
    else
        name=word[0];
    for(let position=1; position<word.length; position++){
        if(word[0]>='A'&&word[0]<='Z')
          name+=String.fromCharCode(word[position]-32);
        else
          name+=word[position];
    }
    return name;
}
function ParseBoolean(value){
    if(value=="true")
        return true;
    else
        return false;
}
function RemoveNo(board, character, property, value){
  
    for(let hPosition=0; hPosition<board.children.length; hPosition++){
        
        for(let vPosition=0; vPosition<board.children[hPosition].children.length; vPosition++){
            
            if(typeof people[hPosition*4+vPosition][property]=="boolean"){
              if((ParseBoolean(board.children[hPosition].children[vPosition].getAttribute(property))==value)!=(character[property]==value))
                board.children[hPosition].children[vPosition].style.display="none"; 
            }
            else if((board.children[hPosition].children[vPosition].getAttribute(property)==value)!=(character[property]==value))
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
                RemoveNo(board, computerCharacter, "name", NameCase(name));
                break;
        case questions.children[1].textContent:
             AnswerQuestion("bald", true);
             RemoveNo(board, computerCharacter, "bald", true);
             break;
        case questions.children[2].textContent:
            AnswerQuestion("gender", "man");
            RemoveNo(board, computerCharacter, "gender", "man");
            break;
        case questions.children[3].textContent:
            AnswerQuestion("skin_color", "white");
            RemoveNo(board, computerCharacter, "skin_color", "white");
            break;
        default:
            const hairColor=document.getElementById("property").value.toLowerCase();
             AnswerQuestion("hair_color", hairColor);
             RemoveNo(board, computerCharacter, "hair_color", hairColor);
             break;
    }
    document.getElementById("property").value="";
    ComputerMove();
});