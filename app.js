var productName = prompt("Enter the product name.");
var productQuantity = prompt("Enter the product quantity.");
var productPrice = prompt("Enter the product price.");

console.log(`
${productName}
${productQuantity}
${productPrice}
${productPrice*1.08*productQuantity}
`)

document.write(`
<p> <strong>Product Name:</strong> ${productName} </p>
<p> <strong>Product Quantity:</strong> ${productQuantity} </p>
<p> <strong>Product Price:</strong> $${productPrice}</p>
<p> <strong>Total Price:</strong> $${productPrice*1.08*productQuantity} </p>
`)