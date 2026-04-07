import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserPage() {
  const { id } = useParams();
  const nav = useNavigate();

  const user = useSelector((state) =>
    state.users.items.find((x) => x.id === id)
  );

  if (!user) {
    return <div>no user</div>;
  }

  return (
    <div>
      <h2>User</h2>

      <p>{user.name}</p>
      <p>{user.active ? "active" : "inactive"}</p>

      <button onClick={() => nav("/")}>back</button>
    </div>
  );
}