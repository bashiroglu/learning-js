class Product {
  //   title = 'Default';
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}
// console.log(new Product());
class ShoppingCart {
  items = [];
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>\$${this.totalAmount}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce((acc, item) => acc + item.price, 0);
    return sum;
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>\$${0}</h2>
    <button> Order now!</button>`;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}
class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://app.skufetch.com/images.tmp/TrafficMASTER_Assort_2422_0_res.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(prd) {
    this.cart.addProduct(prd);
  }
}

App.init();
