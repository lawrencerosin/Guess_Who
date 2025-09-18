function SetupBoard(){
      function Copy(id){
        const board=document.getElementById("board").cloneNode(true);
        const usedBoard=document.getElementById(id);
        usedBoard.innerHTML=board.innerHTML;
        //This is supposed to display the name of the person, but it gets messy with this
        for(let hPosition=0; hPosition<usedBoard.children.length; hPosition++){
          const row=usedBoard.children[hPosition];
          for(let vPosition=0; vPosition<usedBoard.children[hPosition].children.length; vPosition++){
            const name=document.createElement("span");
            name.textContent=people[hPosition*4+vPosition]["name"];
            name.className="name";
            usedBoard.children[hPosition].children[vPosition].appendChild(name);
          }
        }
      }
     Copy("player_board");
     Copy("computer_board");
   const playerBoard=document.getElementById("player_board");
   const computerBoard=document.getElementById("computer_board");
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