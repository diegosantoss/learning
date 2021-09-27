(async () => {
  const database = require('./db');
  const Product = require('./product');
  
  await database.sync();

  const newProduct = await Product.create({
    name: 'Teclado bem loco',
    preco: 150,
    description: 'Teclado daora'
  });

  // const products = await Product.findAll();
  // const products = await Product.findByPk(3);
  const product = await Product.findByPk(2);
  product.description = 'oie';
  // await product.save();
  await product.destroy();

  console.log(product)
})()