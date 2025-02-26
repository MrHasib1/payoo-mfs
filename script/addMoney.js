// alert();

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    // console.log(typeof amount);
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    if (convertedPin === 1234) {
      const sum = convertedMainBalance + convertedAmount;
      document.getElementById("main-balance").innerText = sum;
      //   console.log(sum);
    } else {
      console.log("pin sothik noy");
    }
  });
