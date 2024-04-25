import PropTypes from "prop-types";
import css from "./Section.module.css";

/**
 * A Section React component defines a section in a document for separating various parts of the content.
 * 
 * @param {string} name The name of the section, which is used for styles in CSS as a selector name.
 * @param {string} [title] Optional parameter used to display as a section title.
 * @param {React.Component | React.Component[]} [children] Section children component or components. 
 * 
 * @returns Section React component with optional chidren elements.
 */
export const Section = ({name, title, children}) => (
  <section className={css[name]}>
    {title && <p className={css.title}>{title}</p>}
    {children}
  </section>
);

Section.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)]
  ),
};