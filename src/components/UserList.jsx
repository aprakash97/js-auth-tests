import User from "./User";
import { UserContainer } from "../containers/UserContainer";

export const UserList = ({ users }) => {
  return (
    <div className="main">
      {users.map((user) => (
        <UserContainer {...user} key={user.userID} />
      ))}
    </div>
  );
};
