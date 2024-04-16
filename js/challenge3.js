window.addEventListener('load', function(){
    // alert('loaded!!');
    let figcaptions = document.querySelectorAll('figcaption');
    let secondFigcaption = figcaptions[1];
    alert(secondFigcaption.innerHTML);
    
    // console.log(document.querySelectorAll('figcaption)')[1].innerHTML);
})


let display = document.getElementById("display");
let imgs = document.querySelectorAll('img'); 
imgs.forEach(img => {
    img.addEventListener("mouseenter", function(){
    display.style.backgroundImage = "URL(" + this.src + ")"
    display.innerHTML = this.alt
    this.style.visibility = "hidden"
});

    img.addEventListener("mouseout", function(){
    display.style.backgroundImage = "URL(" + this.src + ")"
    display.innerHTML = this.alt
    this.style.visibility = "visible"
});
});