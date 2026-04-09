import { useSelector, useDispatch } from "react-redux";
import { selectFilteredUsers } from "../redux/selectors";
import { toggleUser, deleteUser, setFilter } from "../redux/usersSlice";
import UserItem from "../components/UserItem";

export default function HomePage(){
    const users = useSelector(selectFilteredUsers);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Users</h1>
            <div>
                <button onClick={() => dispatch(setFilter('all'))}>All</button>
                <button onClick={() => dispatch(setFilter('active'))}>Active</button>
                <button onClick={() => dispatch(setFilter('inactive'))}>Inactive</button>
            </div>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    )
}

