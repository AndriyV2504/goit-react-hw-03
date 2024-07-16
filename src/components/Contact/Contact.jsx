const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
