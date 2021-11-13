//input can only take a-z
//input throws error if above condition not met 
//search connects with api and returns searches in table 

//add event listener to button and capture input on click 
document.getElementById("button").addEventListener("click", function () {
    let data = document.getElementById('search_item').value
    console.log(data);
});

