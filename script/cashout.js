// alert();

document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const AccountNumber = document.getElementById("Account-number").value;

    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");

    if (amount > mainBalance) {
      alert("Invalid amount");
      return;
    }

    if (AccountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", sum);

        const p = document.createElement("p");
        p.innerText = `Cashout ${amount} from this   ${AccountNumber} account`;

        const container = document.getElementById("transaction-container");
        container.appendChild(p);
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Account number thik nai");
    }
  });
