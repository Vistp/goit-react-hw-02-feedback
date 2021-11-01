import Friend from './Friend';
import PropTypes from "prop-types";
import s from './FriendList.module.css';

function FriendList({friends}) {
    return (
        <ul className={s["friend-list"]}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <Friend
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </li>
            ))}
    </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}
export default FriendList;