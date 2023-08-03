import styles from './ValidationOverlay.module.css';

import Button from '../ui/Button/Button';

const ValidationOverlay = (props) => {

    const clickHandler = () => {
        props.onValidationReset();
    }

    return (
        <div className={styles.overlay} onClick={clickHandler}>
            <div className={styles['alert-box']}>
                <div className={styles['alert-box-header']}><h2>Invalid input</h2></div>
                <div className={styles['alert-box-body']}>
                    <p>{props.message}</p>
                </div>
                <div className={styles['alert-box-footer']}>
                    <Button type='button' label='Okay' onButtonClick={clickHandler} />
                </div>
            </div>
        </div>
    );
}

export default ValidationOverlay;