
    const questions=document.getElementById("questions");
    questions.addEventListener("change", function(){
       const property=questions.nextElementSibling;
      if(questions.value==questions.children[questions.children.length-1].textContent){
         property.setAttribute("required", true);
         property.disabled=false;
       }
       else{
         property.setAttribute("required", false);
         property.disabled=true;
       }
    });
