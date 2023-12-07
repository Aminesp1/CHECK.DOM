// increase qty
let btnPlus = document.querySelectorAll(".fa-plus")
console.log(btnPlus);
for (let plus of btnPlus) {
   plus.addEventListener("click", function () {
      plus.nextElementSibling.innerHTML++;
      sum()
   })
}

// increase qty
let btnminus = document.querySelectorAll(".fa-minus")
console.log(btnminus);
for (let minus of btnminus) {
   minus.addEventListener("click", function () {
      if (minus.previousElementSibling.innerHTML > 0) {
         minus.previousElementSibling.innerHTML--;
      }
      sum()
   })
}


//calculate sum 
function sum() {
   let qty = document.querySelectorAll(".qty")
   let price = document.querySelectorAll(".price")
   console.log(price);

   let sum = 0;
   // for (let i in qty)
   for (let i = 0; i < qty.length; i++) {
      sum = sum + qty[i].innerHTML * price[i].innerHTML
   }
   document.getElementById("total").innerHTML = "Total: $" + sum
   console.log(sum);
   return sum
}

sum()

// delete item 
let btnsDelete = document.querySelectorAll(".fa-trash")

for (let btnDelete of btnsDelete) {
   btnDelete.addEventListener("click", function () {
      btnDelete.parentElement.remove()
      sum()
   })
}

// like item 
let hearts = document.querySelectorAll(".fa-heart")

for (let heart of hearts) {
   heart.addEventListener("click", function () {
      heart.classList.toggle("red")
   })
}