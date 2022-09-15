import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* here we use spread operator Mean you can add any types like {id - type - min - max} and so on */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
