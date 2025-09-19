//So true and falses can be stored as properties
function MakeUnreserved(property){
    if(property===true)
        return "trues";
    else if(property===false)
        return "falses";
    else
        return property;
}

function CountProperties(){
    const properties=[{prop_name:"name"}, {prop_name:"gender"}, {prop_name: "skin_color"}, {prop_name:"hair_color"}, {prop_name:"bald"}];
    for(let row=computerBoard.children[0]; row!==null; row=row.nextElementSibling){
        for(let cell=row.children[0]; cell!==null; cell=cell.nextElementSibling){
            
               if(cell.style.display!="none"){
                  for(let position=0; position<properties.length; position++){
                    const cellProperty=cell.getAttribute(properties[position]["prop_name"]);
                    if(cellProperty in properties[position]){
                         
                        properties[position][cellProperty]++;
                    }
                    else
                        properties[position][cellProperty]=1;
                  }
               }
        }
    }
    return properties;
}
function ComputerRemoveInvalid(characters, selected, answer){
    for(let position=0; position<characters.length; position++){
        if((characters[position].getAttribute(selected["property"])!=selected["value"])==ParseYes(answer))
            characters[position].style.display="none";
    }
}
function SelectQuestion(properties){
    let selected={property:"", value:""};
    let selectedCount=-1;//Makes sure it will be larger than any possible gap
    const board=document.getElementById("computer_board");
    function FindDiff(amount){
        if(CountRemaining(board)/2>amount){
            return CountRemaining(board)/2-amount;

        }
        else{
            return amount-CountRemaining(board)/2;
        }
    }
    for(let position=0; position<properties.length; position++){
        for(let property in properties[position]){
          
            //Excludes the name of the property
            if(property!="prop_name"&&FindDiff(properties[position][property])<FindDiff(selectedCount)){
                  selectedCount=properties[position][property];
                  selected={property:properties[position]["prop_name"], value: property};
            }
        }
    }
    return selected;
}
function AskQuestion(selected){
    let answer;
    
    const characters=computerBoard.querySelectorAll(".character");
    //This function is supposed to avoid the user entering the wrong answer
    function AvoidCheating(question){
      
        while(ParseBoolean(answer.toLowerCase())!=(playerCharacter.getAttribute(selected["property"])==selected["value"])){
            alert("Your answer is incorrect.");
            answer=prompt(question);
        }
    }
    
   if(typeof people[selected["property"]]=="boolean"){
        const question=`Is your person's ${people[selected["property"]]}?`;
        answer=prompt(question);
       
   }
   else{
   
         const question=`Is your person's ${selected["property"]} ${selected["value"]}?`;
        answer=prompt(question);
   }
       
       // AvoidCheating(question);
        ComputerRemoveInvalid(characters, selected, answer);
   
    
}
function ComputerMove(){
    const properties=CountProperties();
    const question=SelectQuestion(properties);
    AskQuestion(question);
    DisplayVictoryMessage(computerBoard, "Sorry. You lost.");
        
     
}