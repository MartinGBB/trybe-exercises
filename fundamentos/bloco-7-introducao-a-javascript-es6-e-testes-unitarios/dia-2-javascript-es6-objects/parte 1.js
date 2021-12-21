const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
   const ordem1 = `Olá ${(order.order.delivery.deliveryPerson)}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
   console.log(ordem1)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const modificaName = order.name = 'Luiz Silva';
    const pizza1 = order.order.pizza.margherita = 'muzzarella';
    const pizza2 = order.order.pizza.pepperoni = 'calabresa';
    const bebida = order.order.drinks.coke.type;
    const bebidaPrice = order.order.drinks.coke.price = 'R$50,00.'

    const order2 = `Olá ${modificaName}, o total de seu pedido de ${pizza1}, ${pizza2} e ${bebida} é ${bebidaPrice}`

    console.log(order2);
  
  }
  
  orderModifier(order);