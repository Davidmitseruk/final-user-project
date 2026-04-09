import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/usersSlice";

export default function CreateUserPage(){

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleAdd = () => {
    dispatch(addUser(name));
    navigate('/');
  };
 return(
  <div>
    <h1>Create User!</h1>
    <input value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={handleAdd}>Create</button>
  </div>
 )
}