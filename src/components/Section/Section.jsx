import css from "./Section.module.css";

export const Section = ({name, title, children}) => (
  <section className={css[name]}>
    <p className={css.title}>{title}</p>
    {children}
  </section>
);