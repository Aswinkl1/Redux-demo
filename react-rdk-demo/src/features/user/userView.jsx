import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

const UserView = () => {
  const users = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <div>list of users</div>

      {users.loding && <div>looding</div>}
      {!users.loding && users.error && <div>looding</div>}
      {!users.loding && users.user.length ? (
        <div>
          <ul>
            {users.user.map((user) => {
              return <li>{user.name}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default UserView;
