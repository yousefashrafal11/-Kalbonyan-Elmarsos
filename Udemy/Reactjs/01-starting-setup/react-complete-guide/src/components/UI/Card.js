import "./Card.css";

// Normal function
// function Card(props) {

// Arrow function
const Card = (props) => {
  // return <div className="card">{props.children}</div>;

  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
