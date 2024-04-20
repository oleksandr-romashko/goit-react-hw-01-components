import css from "./FriendListItem.module.css";
import noAvatar from "img/no-image.png";

export const FriendListItem = ({
  avatar = noAvatar,
  name,
  isOnline }) => (
    <li className={css.item}>
      {isOnline
        ? (<span className={`${css.status} ${css["is-online"]}`}></span>)
        : (<span className={css.status}></span>)}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );