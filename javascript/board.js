function CountRemaining(board){
    let remaining=0;
    for(let row=board.children[0]; row!==null; row=row.nextElementSibling){
        for(let cell=row.children[0]; cell!==null; cell=cell.nextElementSibling){
            if(cell.style.display!="none")
                remaining++;
        }
    }
    return remaining;
}
function DisplayVictoryMessage(board, message){
     if(CountRemaining(board)==1){
        alert(message);
        const property=document.getElementById("property");
        property.disabled=true;
        property.value="";
        return true;
     }
     else
        return false;
}