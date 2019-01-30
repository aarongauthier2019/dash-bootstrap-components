import React from 'react';
import PropTypes from 'prop-types';
import {Table as RSTable} from 'reactstrap';

const Table = props => {
  const {children, ...otherProps} = props;
  return <RSTable {...otherProps}>{children}</RSTable>;
};

Table.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: PropTypes.string,

  /**
   * HTML tag to use for the table, default: table
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * Specify table size, options: sm, md, lg
   */
  size: PropTypes.string,

  /**
   * Set bordered style
   */
  bordered: PropTypes.bool,

  /**
   * Set borderless style
   */
  borderless: PropTypes.bool,

  /**
   * Apply striped style
   */
  striped: PropTypes.bool,

  /**
   * set 'dark' style
   */
  dark: PropTypes.bool,

  /**
   * Add hover animation
   */
  hover: PropTypes.bool,

  /**
   * Allow horizontal scrolling if parent is too small to contain table.
   */
  responsive: PropTypes.bool
};

export default Table;
