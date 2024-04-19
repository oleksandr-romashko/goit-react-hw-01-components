import css from "./Profile.module.css"
import { formatThousandSaparatorNumber } from "helpers/formatThousandSaparatorNumber";

export const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats }) => (
  <section className={css.user}>
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
          <span className={css.quantity}>{formatThousandSaparatorNumber(stats.followers)}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{formatThousandSaparatorNumber(stats.views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{formatThousandSaparatorNumber(stats.likes)}</span>
        </li>
      </ul>
    </div>
  </section>
);