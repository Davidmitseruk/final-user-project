import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUserPage() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const add = () => {
    if (text === "") return;

    dispatch(addUser(text));
    nav("/");
  };

  return (
    <div>
      <h2>Create</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={add}>add</button>
    </div>
  );
}