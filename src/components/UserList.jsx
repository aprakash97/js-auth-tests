import User from "./User";

export const UserList = ({ users }) => {
  return (
    <div className="main">
      {users.map((user) => (
        <User {...user} key={user.userID} />
      ))}
    </div>
  );
};
