import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <CSSTransition
      in={true}
      appear
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <li key={id} className={styles.item}>
        <p className={styles.list}>
          {name}: {number}
        </p>
        <section className={styles.section__btn}>
          <button type="button" className={styles.btn} onClick={onRemove}>
            Delete
          </button>
        </section>
      </li>
    </CSSTransition>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
