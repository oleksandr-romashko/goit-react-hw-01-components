import PropTypes from "prop-types";
import noAvatar from "img/no-image.png";
import css from "./FriendListItem.module.css";

/**
 * A Friend React component which displays information about a single user's friend.
 * 
 * @param {string} [props.avatar=noAvatar] Link to the avatar. If no avatar - avatar replaced with default image.
 * @param {string} props.name Friend's name.
 * @param {boolean} [props.isOnline=false] Boolean indicating the status of a friend, online or offline.
 * 
 * @returns Friend React component.
 */
export const FriendListItem = ({
  avatar = noAvatar,
  name,
  isOnline = false }) => (
    <li className={css.item}>
      {isOnline
        ? (<span className={`${css.status} ${css["is-online"]}`}></span>)
        : (<span className={css.status}></span>)}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
