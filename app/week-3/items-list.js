import Item from './items';

const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};

const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};

const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};

const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};

const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};

const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};

const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};

const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};

const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};

const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};

const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};

const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

/**
 * ItemsList component renders a list of shopping items.
 * Each item is displayed using the Item component.
 */

const ItemsList = () => {
  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-4">
        {[item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12].map((item, index) => (
          <li key={index}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;