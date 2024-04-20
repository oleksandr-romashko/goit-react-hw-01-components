import css from "./FriendList.module.css"
import { FriendListItem } from "components";

export const FriendList = ({friends=[]}) => (
  <section className={css.friends}>
    <ul className={css["friend-list"]}>
      {friends.map(el => <FriendListItem key={el.id} {...el} />)}
    </ul>
  </section>
);