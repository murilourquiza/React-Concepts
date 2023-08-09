function Block(props) {
  return (
    <li className="concept">
      <img src={props.atr.image} alt={props.alt} />
      <h2>{props.atr.title}</h2>
      <p>{props.atr.description}</p>
    </li>
  );
}

export default Block;
