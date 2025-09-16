function SetupBoard(boardId){
    const board=document.getElementById(boardId);
    for(let hPosition=1; hPosition<=5; hPosition++){
        const row=document.createElement("tr");
        for(let vPosition=1; vPosition<=4; vPosition++){
            const cell=document.createElement("td");
            const image=document.createElement("img");
            const imageNum=hPosition*5+vPosition;
            if(imageNum%2==1){
                const man="images/man "+((imageNum-1)/2)+".jpg";
                image.src=man;
                image.setAttribute("alt", man);
            }
            else{
                const woman="images/woman "+(imageNum/2)+".jpg";
                image.src=woman;
                image.setAttribute("alt", woman);
            }
            cell.appendChild(image);
            cell.textContent=people[imageNum]["name"];
            row.appendChild(cell);

        }
        board.appendChild(row);
    }
}