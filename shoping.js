let products = [
  {
    id:1,
    name: "White Tshirt",
    size: "M",
    color: "White",
    price: 1350,
    image: "product3.jpg",
    description: " Good looking White TShirts",
  },
  {
    id:2,
    name: "Yellow Tshirt",
    size: "L",
    color: "Yellow",
    price: 450,
    image: "product2.jpg",
    description: " Good looking in Yellow TShirts",
  },
  {
    id:3,
    name: "Black Tshirt",
    size: "M",
    color: "black",
    price: 1500,
    image: "product1.jpg",
    description: " Good looking Black TShirts",
  },
  {
    id:4,
    name: "Black Tshirt",
    size: "M",
    color: "Black",
    price:1300,
    image: "f1.jpg",
    description: " Good looking Black TShirts",
  },
  {
    id:5,
    name: "Jeans Tshirt",
    size: "S",
    color: "Blue",
    price: 550,
    image: "f2.jpg",
    description: " Good looking in Jeans TShirts",
  },
  {
    id:6,
    name: "White Tshirt",
    size: "M",
    color: "White",
    price: 1450,
    image: "f3.jpg",
    description: " Good looking White TShirts",
  },
  {
    id:7,
    name: "Jeans",
    size: "M",
    color: "Sky blue",
    price: 1600,
    image: "j1.jpg",
    description: " Good looking Jeans for Man",
  },
  {
    id:8,
    name: "Damage Jeans",
    size: "L",
    color: "Black",
    price: 900,
    image: "j3.jpg",
    description: " Good looking Black Damage Jeans",
  },
  {
    id:9,
    name: "Trending Jeans",
    size: "M",
    color: "Light-Blue",
    price: 1100,
    image: "j2.jpg",
    description: " Good looking New Trending jeans",
  },
  {
    id:10,
    name: "Woman Jeans",
    size: "L",
    color: "Light-Black",
    price: 1500,
    image: "w1.jpg",
    description: " Good looking New Trending Womans jeans",
  },
  {
    id:11,
    name: "White Jeans",
    size: "M",
    color: "White",
    price: 1200,
    image: "w2.jpg",
    description: " Good looking white jeans",
  },
  {
    id:12,
    name: "Jeans",
    size: "M",
    color: "Light-Blue",
    price: 900,
    image: "w3.jpg",
    description: " Good looking New Trending jeans",
  },
];

cart = [];
count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

let flag=false;
function addToCart(id) 
{
flag=false;
  let item = getProductByID(products, id);

  cart.forEach(function(element){
      if(element.id==item.id){
          flag=true;
      }
  
  })
  if (flag) {
      alert("Don't add the same product twice");
    return 0;
  }

  // cart.push(item);
  count += 1;
  document.getElementById("cart").innerText=count;
  document.getElementById("numb").innerText=count;
  
  cart.push(item);
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let item = getProductByID(products,id);
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  count-=1;

   document.getElementById("numb").innerText = count;
   displayProducts(cart, "cart");
}

function filter(){
  let minv=document.getElementById("minp").value;
  let maxv = document.getElementById("maxp").value;
  let items= products.filter(function(itemsl){
      return itemsl.price>=minv && itemsl.price<=maxv;
  })
   displayProducts(items);
    document.getElementById("minp").value;
    document.getElementById("maxp").value;
}