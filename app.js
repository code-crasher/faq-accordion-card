const accordion = document.querySelectorAll(".text__content")

accordion.forEach(elem =>{ 
 
     elem.addEventListener("click",()=>{
        elem.classList.toggle("active");
    })
})