import { useDispatch } from "react-redux";
import { toggleUser, deleteUser } from "../redux/usersSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal"


export default function UserItem({user}){
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    return(
        <div>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
            <input type="checkbox" checked={user.active} onChange={() => dispatch(toggleUser(user.id))}/>
            <button onClick={() => setOpen(true)}>Delete user</button>

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