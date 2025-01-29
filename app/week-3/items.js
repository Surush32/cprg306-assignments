
const Item = ({ name, quantity, category }) => {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-neon-green">{name}</p>
        <p className="text-sm text-neon-blue">Quantity: {quantity}</p>
        <p className="text-sm text-neon-blue">Category: {category}</p>
      </div>
      
    </div>
  );
};

export default Item;