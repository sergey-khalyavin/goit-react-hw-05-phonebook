import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ id, ...prop }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <ContactListItem
          key={id}
          {...prop}
          onRemove={() => onRemoveContact(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default ContactList;
