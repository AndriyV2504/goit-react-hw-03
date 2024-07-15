const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
