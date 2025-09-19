let playerBoard, computerBoard;
 function FillPersonSelection(){
            const choosePerson=document.getElementById("choose_person");
            for(let personNum=0; personNum<10; personNum++){
                function AddPerson(type, increase){
                    const person=document.createElement("li");
                    const personImage=document.createElement("img");
                    personImage.src="images/"+type+" "+(personNum+1)+".jpg";
                    personImage.setAttribute("alt", type+" "+personNum);
                    person.appendChild(personImage);
                    const name=document.createElement("span");
                    name.textContent+=people[personNum*2+increase]["name"];
                    person.appendChild(name);
                    person.addEventListener("click", function(){
                         const playerCharacter=document.getElementById("my_character"); 
                           playerCharacter.innerHTML=person.innerHTML;
                            choosePerson.parentElement.style.display="none";
                            document.getElementById("boards").style.display="flex";
                         
                            for(let attribute in people[personNum]){
                                person.setAttribute(attribute, people[personNum][attribute]);
                                playerCharacter.setAttribute(attribute, person.getAttribute(attribute));
                            }
                    });
                    choosePerson.appendChild(person);
                }
                AddPerson("man", 0);
                AddPerson("woman", 1);

            }
  }
function SetupBoard(){
      function Copy(id){
        const board=document.getElementById("board").cloneNode(true);
        const usedBoard=document.getElementById(id);
        usedBoard.innerHTML=board.innerHTML;
        //This is supposed to display the name of the person, but it gets messy with this
        for(let hPosition=0; hPosition<usedBoard.children.length; hPosition++){
         
          for(let vPosition=0; vPosition<usedBoard.children[hPosition].children.length; vPosition++){
            const name=document.createElement("span");
            name.textContent=people[hPosition*4+vPosition]["name"];
            name.className="name";
            usedBoard.children[hPosition].children[vPosition].appendChild(name);
            usedBoard.children[hPosition].children[vPosition].classList.add("character");
          }
        }
      }
     Copy("player_board");
     Copy("computer_board");
   playerBoard=document.getElementById("player_board");
   computerBoard=document.getElementById("computer_board");
   DescribeCharacters(playerBoard);
   DescribeCharacters(computerBoard);
  
}
function DescribeCharacters(board){
    for(let hPosition=0;hPosition<board.children.length; hPosition++){
      const row=board.children[hPosition];
       for(let vPosition=0;vPosition<row.children.length; vPosition++){
           const character=people[hPosition*4+vPosition];
            
           for(let property in character){
            
             
                 board.children[hPosition].children[vPosition].setAttribute(property, character[property]);
               
              
           }
       }
    }
}