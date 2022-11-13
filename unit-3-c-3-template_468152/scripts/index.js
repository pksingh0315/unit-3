// Store the wallet amount to your local storage with key "amount"
let sum = localStorage.getItem("amount") || 0;
document.querySelector("#add_to_wallet").addEventListener("click", addMoney);

function addMoney() {
  let money = document.querySelector("#amount").value;
  sum = +sum + +money;
  document.querySelector("#wallet").innerText = sum;

  localStorage.setItem("amount", sum);
}
//***********for Display only******** */
document.querySelector("#wallet").innerText = sum;
