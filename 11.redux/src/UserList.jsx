/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "./redux/userSlice";

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user);
    console.log(users)
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div style={{display: "flex", flexWrap: "wrap", "justifyContent": "center", gap: "15px"}}>
            {
                users && users.users.map((user) => {
                    return (
                        <div key={user.id} style={{border: "1px solid black", padding: "10px", borderRadius: "10px", width: "250px"}}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList
