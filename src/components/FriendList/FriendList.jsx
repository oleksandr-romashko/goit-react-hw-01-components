import PropTypes from "prop-types";
import { FriendListItem } from "components";
import css from "./FriendList.module.css"

/**
 * A FriendList React component which contains the list of the user's friends.
 * 
 * @param {Object[]} props.friends An array of friend objects of any length.
 * 
 * @returns FriendList React component.
 */
export const FriendList = ({friends=[]}) => (
  <section className={css.friends}>
    <ul className={css["friend-list"]}>
      {friends.map(el => <FriendListItem key={el.id} {...el} />)}
    </ul>
  </section>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
