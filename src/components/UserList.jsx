import User from "./User";
import { UserContainer } from "../containers/UserContainer";

export const UserList = ({ users }) => {
  return (
    <div className="grid-container">
      {users && users.length > 0 ? (
        users.map((user) => <UserContainer {...user} key={user.userID} />)
      ) : (
        <h1 className="no-users">No users </h1>
      )}
    </div>
  );
};
