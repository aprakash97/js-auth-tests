import { UserList } from "./UserList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export const UserListContainer = connect(mapStateToProps)(UserList);
