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

const ItemsList = () => {
  return (
    <div className="p-4 max-w-md text-left">
      <ul className="space-y-4">
        {[item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12].map((item, index) => (
          <li key={index} className="p-4 border rounded shadow-md bg-green-50 hover:bg-green-100 transition duration-200">
            <div className="text-lg font-semibold text-green-800">{item.name}</div>
            <div className="text-sm text-green-600">Buy {item.quantity} in {item.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;