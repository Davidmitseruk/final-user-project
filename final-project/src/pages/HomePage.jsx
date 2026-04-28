import { useSelector, useDispatch } from "react-redux";
import { selectFilteredUsers } from "../redux/selectors";
import { toggleUser, deleteUser, setFilter } from "../redux/usersSlice";
import UserItem from "../components/UserItem";
import styles from "../styles/layout.css";

export default function HomePage(){
    const users = useSelector(selectFilteredUsers);
    const dispatch = useDispatch();

    return(
        <div className="container">
            <h1 className="title">Users</h1>
            <div className="userWrap">
            <div className="filter">
                <button onClick={() => dispatch(setFilter('all'))} className="filterBtn">All</button>
                <button onClick={() => dispatch(setFilter('active'))} className="filterBtn">Active</button>
                <button onClick={() => dispatch(setFilter('inactive'))} className="filterBtn">Inactive</button>
            </div>
            {users.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
            </div>
        </div>
    )
}

