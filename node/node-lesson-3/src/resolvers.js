import {items, users, orders} from "./db"

const resolvers = {
  Query: {
    products: () => {
      return items
    },
    product: (id) => {
      return items.find(item => item.id === id)
    },
    users: () => {
      return users
    },
    user: (id) => {
      return users.find(user => user.id === id)
    },
    orders: () => {
      return orders
    },
    order: (id) => {
      return order.find(order => order.id === id)
    }
  },
  Mutation: {
    createUser: ( id, name, email, phone, age ) => {
      const newUser = { id, name, email, phone, age };
      users.push(newUser);
      return newUser;
    },
    updateUser: (id, name, email, phone, age ) => {
      let newUser = users.find(user => user.id === id);

      newUser.name = name;
      newUser.email = email;
      newUser.phone = phone;
      newUser.age = age;

      return newUser;
    },
    deleteUser: (id) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) throw new Error("User not found.");
      const deletedUsers = users.splice(userIndex, 1);
      return deletedUsers[0];
    },
    createProduct: ( id, name, description, price, producer, count) => {
      const newProduct = { id, name, description, price, producer, count };
      items.push(newProduct);
      return newProduct;
    },
    updateProduct: ( id, name, description, price, producer, count) => {
      let newProduct = items.find(item => item.id === id);
      
      newProduct.name = name;
      newProduct.description = description;
      newProduct.price = price;
      newProduct.producer = producer;
      newProduct.count = count;

      return newProduct;
    },
    deleteProduct: (id) => {
      const productIndex = items.findIndex(item => item.id === id);
      if (productIndex === -1) throw new Error("Product not found.");
      const deletedProduct = items.splice(productIndex, 1);
      return deletedProduct[0];
    },
    createOrder: (id, products, orderBy) => {
      const newOrder = {id, products, orderBy}
      orders.push(newOrder);
      return newOrder
    },
    updateOrder: (id, products, orderBy) => {
      let newOrder = orders.find(order => order.id === id)

      newOrder.products = products;
      newOrder.orderBy = orderBy;

      return newOrder;
    },
    deleteOrder: (id) => {
      const orderIndex = orders.findIndex(order => order.id === id);
      if (orderIndex === -1) throw new Error("Order not found.");
      const deletedorder = orders.splice(orderIndex, 1);
      return deletedorder[0];
    }
  }
}

export default resolvers
