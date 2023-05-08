import { USER_DELETED } from "./actions";

export const initialUsers = [
  { userID: 1, name: "abc", email: "abc@gmail.com" },
  { userID: 2, name: "tester", email: "tester@gmail.com" },
  { userID: 3, name: "customObj", email: "customObj@gmail.com" },
  { userID: 4, name: "finalTesting", email: "finally@gmail.com" },
  { userID: 5, name: "jsxBoy", email: "jxxxx@gmail.com" },
  { userID: 6, name: "working", email: "work@gmail.com" },
];

export const reducer = (state = initialUsers, action) => {
  if (action.type === USER_DELETED) {
    return state.filter((user) => user.userID !== action.payload.userID);
  }

  return state;
};

export default reducer;
