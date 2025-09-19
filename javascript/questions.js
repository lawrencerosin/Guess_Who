
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
        if(word[position]>='A'&&word[position]<='Z')
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
    switch(questions.value){
        case questions.children[0].textContent:
                const name=document.getElementById("property").value;
                AnswerQuestion("name", name);
                RemoveNo(characters, computerCharacter, "name", NameCase(name));
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
    ComputerMove();
});