import User from "./User";

export const UserList = ({ items }) => {
  return (
    <div className="main">
      {items.map((item) => (
        <User {...item} key={item.userID} />
      ))}
    </div>
  );
};
