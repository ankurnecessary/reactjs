import classes from './Input.module.css';

const Input = (props) => {
    /* id, type, label */
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
}

export default Input;