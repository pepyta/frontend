document.querySelector("#test").addEventListener("click", () => {
    const label1 = document.querySelector("#result1");
    const label2 = document.querySelector("#result2");
    const label3 = document.querySelector("#result3");
    
    if(counter("Szia!?") === 2) {
        label1.innerHTML = "Success";
    } else {
        label1.innerHTML = "FAIL!";
    }

    
    if(counter("") === 0) {
        label2.innerHTML = "Success";
    } else {
        label2.innerHTML = "FAIL!";
    }

    
    
    if(counter("..,,??") === 6) {
        label3.innerHTML = "Success";
    } else {
        label3.innerHTML = "FAIL!";
    }
});
