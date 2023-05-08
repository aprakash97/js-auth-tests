import { UserList } from "./UserList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export const MenuItemsContainer = connect(mapStateToProps)(UserList);
