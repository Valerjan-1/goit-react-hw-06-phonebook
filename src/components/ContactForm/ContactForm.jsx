import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/sliceContact';
import { getContacts } from '../../redux/selectors';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(getContacts);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="Enter a name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange} />
      </label>
      <label>
        Number
        <input
          placeholder="Enter a number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange} />
      </label>
      <button className="button-container" type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;