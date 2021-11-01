import PropTypes from "prop-types";
import s from './FriendList.module.css';

function Friend({ avatar, name, isOnline }) {
    return (
    <>
            {/* <span className={s.status}>{isOnline}</span> */}
        <span className={s.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span> 
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
    </>
    )
}
Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friend;