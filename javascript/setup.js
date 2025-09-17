function SetupBoard(){
      function Copy(id){
        const board=document.getElementById("board").cloneNode(true);
        const usedBoard=document.getElementById(id);
        usedBoard.innerHTML=board.innerHTML;
      /*  for(let hPosition=0; hPosition<usedBoard.children.length; hPosition++){
          const row=usedBoard.children[hPosition];
          for(let vPosition=0; vPosition<row.children.length; vPosition++){
            const name=document.createElement("div");
            name.textContent=people[hPosition*4+vPosition]["name"];
            usedBoard.children[hPosition].children[vPosition].appendChild(name);
          }
        }*///This is supposed to display the name of the person, but it gets messy with this
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
           console.log("hi");
           for(let property in character){
            console.log("hello");
              board.children[hPosition].children[vPosition].setAttribute(property, character[property]);
           }
       }
    }
}