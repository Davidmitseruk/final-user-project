import { useDispatch } from "react-redux";
import { toggleUser, deleteUser } from "../redux/usersSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal"
import styles from "../styles/layout.css";


export default function UserItem({user}){
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    return(
        <div className="users">
            <Link to={`/user/${user.id}`} className="userName">{user.name}</Link>
            <input type="checkbox" checked={user.active} onChange={() => dispatch(toggleUser(user.id))} className="userCheck"/>
            <button onClick={() => setOpen(true)} className="deleteUser">Delete</button>

            {open && (
                <Modal onClose={() => setOpen(false)}>
                    <p>Are you sure you want to delete this user?</p>
                    <button onClick={() => {
                        dispatch(deleteUser(user.id));
                        setOpen(false)
                    }}>Yes</button>
                    
                </Modal>
            )}
        </div>
    )

}