import PropTypes from "prop-types";
import { formatThousandSaparatorNumber } from "helpers/formatThousandSaparatorNumber";
import css from "./Profile.module.css"
import noAvatar from "img/no-image.png";

/**
 * A User profile React component with basic information about the user, contacts and statistics.
 * 
 * @param {string} props.username User name.
 * @param {string} props.tag Social network tag without '@'.
 * @param {string} props.location City and country.
 * @param {string} props.avatar Link to avatar image.
 * @param {object} props.stats Object with information about activity.
 * @param {number} props.stats.followers Number of followers.
 * @param {number} props.stats.views Number of views.
 * @param {number} props.stats.likes Number of likes.
 * 
 * @returns {React.Component} Profile React component.
 */
export const Profile = ({
  username,
  tag,
  location,
  avatar = noAvatar,
  stats }) => (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
        />
        <p className={`text-clipped ${css.name}`}>{username}</p>
        <p className={`text-clipped ${css.tag}`}>@{tag}</p>
        <p className={`text-clipped ${css.location}`}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span
            key="quantity-followers"
            className={css.quantity}>
            {formatThousandSaparatorNumber(stats.followers)}
          </span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span
            key="quantity-views"
            className={css.quantity}>
            {formatThousandSaparatorNumber(stats.views)}
          </span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span
            key="quantity-likes"
            className={css.quantity}>
            {formatThousandSaparatorNumber(stats.likes)}
          </span>
        </li>
      </ul>
    </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}