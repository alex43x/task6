const idElement=document.getElementById("product");
const numberElement=document.getElementById("number");
const products=[500, 900, 700, 1200];
const names=["Mezcla original 200g", "Mezcla Original 500g", "Mezcla Especial 200g", "Mezcla Especial 500g"]
let purchases=[];

function add(){
    const price= products[parseInt(idElement.value)-1];
    const number = parseInt(numberElement.value);
    const name= names[parseInt(idElement.value)-1];
    let purchase={
        name:name,
        price: price,
        number: number,
    };
    const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
    if(purchases.length < 1 || newPurchase === -1) {
        purchases.push(purchase)
    } else {
        purchases[newPurchase].number += purchase.number
    }

    window.alert(`${display()} \n \nEl subtotal es: ${subtotal()}`);
}

function display(){
    let string = "";
    for (let i = 0; i < purchases.length; i++) {
      string += `${purchases[i].name} a: ${purchases[i].price} Yenes, llevas: ${purchases[i].number} item(s)\n`;
    }
    return string;
}

function subtotal() {
    let sum = 0;
    for (let i = 0; i < purchases.length; i++) {
      sum += purchases[i].price * purchases[i].number;
    }
    return sum;
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`${display()}\nEl subtotal es: ${sum} Yenes\nLos gastos de envio son: ${postage} Yenes \nTotal: ${sum + postage} Yenes`);
    purchases = [];
    idElement.value = "";
    numberElement.value = "";
}
  
function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 2000) {
      return 500;
    } else {
      return 250;
    }
}