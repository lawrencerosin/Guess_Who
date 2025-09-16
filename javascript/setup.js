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
}