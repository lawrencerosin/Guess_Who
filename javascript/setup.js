function SetupBoard(boardId){
   const board=document.getElementById(boardId);
   board.innerHTML=document.getElementById("board").innerHTML;
   const images=board.querySelectorAll("img");
   for(let position=0; position<images.length; position++){
    images[position].classList.add("img-rounded");
    
   }
}