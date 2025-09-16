function SetupBoard(boardId){
   const board=document.getElementById(boardId);
   board.innerHTML=document.getElementById("board").innerHTML;
   const images=board.querySelectorAll("img");
   for(let position=0; position<images.length; position++){
    images[position].classList.add("img-rounded");
    images[position].parentElement.classList.add("choice");
        const name=document.createElement("span");
        name.textContent=people[position]["name"];
        const cell=images[position].parentElement;
        cell.appendChild(name);
      
   }
   DescribeCharacters(board);
   alert(board.innerHTML);
}
function DescribeCharacters(board){
    for(let hPosition=0;hPosition<board.children.length; hPosition++){
      const row=board.children[hPosition];
       for(let vPosition=0;vPosition<row.children.length; vPosition++){
           const character=people[hPosition*5+vPosition];
           for(let property in character){
              board.children[hPosition].children[vPosition].setAttribute(property, character[property]);
           }
       }
    }
}