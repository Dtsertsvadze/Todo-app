import "./Items.css";

const Items = (props) => {
  const handleDelete = (itemId) => {
    const updatedList = props.data.filter((i) => i.id !== itemId);
    props.onDelete(updatedList);
  };

  const handleComplete = (itemId) => {
    props.onComplete(itemId);
  };

  const listItems = props.data.map((item) => (
    <div key={item.id}>
      <div className="list-item">
        <li className={item.isCompleted ? "completed" : " "}>{item.content}</li>
        <div className="actions">
          <button onClick={() => handleComplete(item.id)}>Complete</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  return <div className="todos">{listItems}</div>;
};

export default Items;
