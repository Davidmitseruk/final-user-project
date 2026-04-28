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
  <div className="createBox">
    <h1 className="createTitle">Create New User</h1>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username..." className="createInput"/>
    <button onClick={handleAdd} className="createBtn">Create</button>
  </div>
 )
}