const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    product: DataTypes.STRING
  });

  return Products;
};

module.exports = Products;
