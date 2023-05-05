import MenuItem from "./MenuItem";

export const MenuItems = ({ items }) => {
  return (
    <div className="main">
      {items.map((item) => (
        <MenuItem {...item} key={item.userID} />
      ))}
    </div>
  );
};
