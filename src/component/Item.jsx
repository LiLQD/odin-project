import "../styles/Item.css";
const Item = (props) => {
  const placeholdUrl = `https://placehold.co/250x250/1a1207/c9a227?text=${encodeURIComponent(props.name)}`;
  return (
    <div className="item-card">
      <img src={placeholdUrl} alt={props.name} className="item-image" />
      {props.rarity && (
        <p className="rarity" data-rarity={props.rarity}>
          {props.rarity.name}
        </p>
      )}
      {props.cost ? (
        <p>
          {props.cost.quantity} {props.cost.unit}
        </p>
      ) : (
        <p>Not for sale</p>
      )}
      <button className="add-to-cart">Add To Cart</button>
      <button className="buy-button">Buy</button>
    </div>
  );
};

export default Item;
