import Wrapper from '../ui/Wrapper/Wrapper';

import styles from './UserList.module.css';


const UserList = (props) => {
    return (
        <Wrapper>
            <ul className={styles.list}>
                {props.users.map((user) => (
                    <li key={user.id}>{user.username} ({user.age} years old)</li>
                ))}
            </ul>
        </Wrapper>
    );
}

export default UserList;