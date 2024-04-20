import css from "./Statistics.module.css";
import { getRandomApprovedColor } from "helpers/getRandomColor"

/**
 * These colors were selected to have better contrast 
 * with font color and be more readable.
 */
const approvedConstrastColors = [
  "#51C3F5", "#A43CF3", "#E64C66", "#20B8C5",
  "#0AA41D", "#428AC3", "#117E31", "#A05EC8",
  "#8B8EAF", "#3F64B2", "#4A6F36", "#4F6AA0",
  "#493523", "#1D0E13", "#C79D36", "#5440F2",
  "#518697", "#1E3802", "#6B8848", "#41AC6A",
  "#5F66DA", "#C52D8C", "#E99FC8", "#CB8013",
]

export const Statistics = ({title, stats=[]}) => (
  <section className={css.statistics}>
    {title && (<h2 className={css.title}>Upload stats</h2>)}

    <ul
      className={css["stat-list"]}
    >
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{ backgroundColor: getRandomApprovedColor(approvedConstrastColors) }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
</section>
);