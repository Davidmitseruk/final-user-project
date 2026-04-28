import { useSelector, useDispatch } from "react-redux";
import { selectFilteredUsers } from "../redux/selectors";
import { setFilter } from "../redux/usersSlice";
import UserItem from "../components/UserItem";

export default function HomePage() {
    const users = useSelector(selectFilteredUsers);
    const filter = useSelector(state => state.users.filter);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1 className="title">Users for summer!</h1>
            <div className="userWrap">
                <div className="filter">
                    <button
                        onClick={() => dispatch(setFilter("all"))}
                        className={filter === "all" ? "filterBtn active" : "filterBtn"}>All
                    </button>

                    <button
                        onClick={() => dispatch(setFilter("active"))}
                        className={filter === "active" ? "filterBtn active" : "filterBtn"}>Active
                    </button>

                    <button
                        onClick={() => dispatch(setFilter("inactive"))}
                        className={filter === "inactive" ? "filterBtn active" : "filterBtn"}>
                        Inactive
                    </button>
                </div>

                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}

            </div>
        </div>
    );
}

