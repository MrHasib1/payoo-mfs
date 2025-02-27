// alert();
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("Account-number").value;
    const mainBalance = getInnerTextById("main-balance");

    const selectBank = document.getElementById("allbank").value;
    console.log(selectBank);

    if (amount < 0) {
      alert("bhai eyta kno kotha positive number dite hobe");
      return;
    }

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText = sum;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        // const p = document.createElement("p");
        // p.innerText = `added ${amount} from ${account} account`;
        // container.appendChild(p);

        const div = document.createElement("div");
        div.classList.add("bg-red-400");

        div.innerHTML = `
             <h1 class = "text-yellow-300">Added Money from ${selectBank}</h1>  
             <h3>${amount}</h3>  
             <h3>Account Number ${account}</h3>  
        `;

        container.appendChild(div);
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("Account number thik nai");
    }
  });
