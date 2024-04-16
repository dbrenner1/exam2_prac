let checkbox = document.getElementsByName('useBilling')[0]; // Access the first element with the name 'useBilling'
checkbox.addEventListener("click", function() {
    console.log(this.checked);

    let bill = document.querySelector("#billing");
    let home = document.querySelector("#home");

    // console.log("Home value is " + home.value);
    // console.log("Billing value is " + bill.value);
    
    if (this.checked) {
        console.log("Set it");
        home.value = bill.value;
        home.disabled = true;
    } else {
        console.log("Unset it");
        home.value = "";
        home.disabled = false;
    }
});
