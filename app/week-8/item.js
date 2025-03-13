const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li 
        className="p-4 border rounded shadow-md bg-green-50 hover:bg-green-100 transition duration-200"
        onClick={onSelect}
      >
        <div className="text-lg font-semibold text-green-800">{name}</div>
        <div className="text-sm text-green-600">Buy {quantity} in {category}</div>
      </li>
    );
  };
  
export default Item;