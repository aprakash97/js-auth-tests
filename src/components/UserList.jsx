import User from "./User";

export const UserList = ({ items }) => {
  return (
    <div className="main">
      {items.map((user) => (
        <User {...user} key={user.userID} />
      ))}
    </div>
  );
};
