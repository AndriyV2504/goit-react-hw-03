import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </>
  );
};

export default ContactList;
