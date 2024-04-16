document.querySelector("#toggle").addEventListener("click", function() {
    let checkbox = document.querySelector("#toggle");
    console.log(checkbox.checked)
    if (checkbox.checked){
        document.querySelector("#emailBox").style.display="block"
    }
    else{
        document.querySelector("#emailBox").style.display="none"
 
    }
});
