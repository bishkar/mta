
let allTypes = ["H", 'E', "P"]
let selectedTypes = allTypes;
let books = [];

function fetchData() {
    fetch("http://127.0.0.1:8000/api/v1/products/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Виводимо отримані дані
            books = data;
            console.log(books);
            loadProducts()
        });
}

fetchData();
function loadProducts(type) {
    console.log(books.length)
    for (let i = 0; i < books.length; i++) {
        console.log("a")
      let item = books[i];
      $(".products").append(`<div class="product">
        <img src="${item["image"]}" alt="" />
        <div class="book-detail">
        <div class="main-information"> 
             <h4>${item["title"].slice(0, 13)}</h4>
             <p class="author">${item["author"]}</p>
             <p>${item["description"].slice(0, 50)}...</p>
         </div>
         <div class="info-section">
         <button class="book_button">INFO</button>
         </div>
         </div>
        </div>`);
    }
}
