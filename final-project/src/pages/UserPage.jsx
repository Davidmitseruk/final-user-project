import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/users.css";

export default function UserPage(){
    const {id} = useParams();
    const navigate = useNavigate();

    const user = useSelector((state) => 
    state.users.items.find((u) => u.id === id));

    if(!user)
        return <p>User not found!</p>

    return(
        <div className="userLayout">
            <h1 className="userInfoTitle">User info</h1>
            <p className="usernameTekst">Name</p>
            <h2 className="username">{user.name}</h2>
            <p className="usernameTekst">Status</p>
            <p className="userStatus">{user.active ? "active" : "inactive"}</p>
            <button onClick={() => navigate(-1)} className="usernameBtn">Back</button>
        </div>
    )

}
