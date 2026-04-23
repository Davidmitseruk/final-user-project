import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserPage(){
    const {id} = useParams();
    const navigate = useNavigate();

    const user = useSelector((state) => 
    state.users.items.find((u) => u.id === id));

    if(!user)
        return <p>User not found!</p>

    return(
        <div>
            <h1>{user.name}</h1>
            <p>{user.active ? "active" : "inactive"}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )

}
