import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.button} type={props.type} onClick={props.onButtonClick}>{props.label}</button>
    );
}

export default Button;