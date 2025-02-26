// alert();

// step-1: id k dhorsi getElementId diye
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    // console.log(event);
    event.preventDefault(); //reload dibe na
    const AccountNumber = document.getElementById("Account-number").value;
    const PIN = document.getElementById("pin").value;
    const convertedPin = parseInt(PIN);
    // console.log(AccountNumber.length);
    // console.log(AccountNumber, PIN);
    if (AccountNumber.length === 11) {
      //   console.log("OK thik ase");
      if (convertedPin === 1234) {
        // console.log("OK thik ase");
        window.location.href = "./main.html";
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("need valid account number");
    }
  });
