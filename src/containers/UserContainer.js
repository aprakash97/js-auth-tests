import { connect } from "react-redux";
import User from "../components/User";
import { deleteUser } from "../store/users/actions";

const mapToDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(deleteUser(ownProps.userID)),
  };
};

export const UserContainer = connect(null, mapToDispatchToProps)(User);
