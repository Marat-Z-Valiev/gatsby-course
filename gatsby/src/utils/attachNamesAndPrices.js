import calculatePizzaPrice from './calculatePizzaPrice';
import formatMoney from './formatMoney';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizzaItem = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: pizzaItem.name,
      thubmnail: pizzaItem.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(pizzaItem.price, item.size)),
    };
  });
}
