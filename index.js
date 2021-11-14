//input can only take a-z
//input throws error if above condition not met 
//search connects with api and returns searches in table 

//add event listener to button and capture input on click 
document.getElementById("button").addEventListener("click", function () {
    let data = document.getElementById('search_item').value
    validate(data);
});

function validate(data) {
    const lettersOnly = /^[A-Za-z]+$/;
    if (data.match(lettersOnly)) {
      search(data);
    } else {
      alert("invalid input. please use a-z characters only");
    }
  }
  
  function search(data) {
    fetch(`.../?city=${data}`)
      .then((res) => res.json())
      .then((resjson) => console.log(resjson));
  }