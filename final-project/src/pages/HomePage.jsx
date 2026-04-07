import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFilter, toggleUser, deleteUser } from "../redux/usersSlice";
import { selectFilteredUsers } from "../redux/selectors";
import { useState } from "react";
import Modal from "../components/Modal";

export default function HomePage() {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);

  const [show, setShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  function openModal(id) {
    setIdToDelete(id);
    setShow(true);
  }

  function handleDelete() {
    dispatch(deleteUser(idToDelete));
    setShow(false);
  }

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("active"))}>Active</button>
      <button onClick={() => dispatch(setFilter("inactive"))}>Inactive</button>

      <br />
      <br />

      <Link to="/create">Create</Link>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/user/${u.id}`}>{u.name}</Link>

            {" "} - {u.active ? "active" : "inactive"}

            <input
              type="checkbox"
              checked={u.active}
              onChange={() => dispatch(toggleUser(u.id))}
            />

            <button onClick={() => openModal(u.id)}>x</button>
          </li>
        ))}
      </ul>

      {show && (
        <Modal
          onConfirm={handleDelete}
          onCancel={() => setShow(false)}
        />
      )}
    </div>
  );
}