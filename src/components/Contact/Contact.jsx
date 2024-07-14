const Contact = ({ data: { id, name }, onDelete }) => {
  return (
    <li>
      <p>{name}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
