import { USER_DELETED } from "./actions";

export const initialUsers = [
  {
    userID: 1,
    name: "Mark Wayne",
    email: "markie12@gmail.com",
    since: "10th Aug 2021",
  },
  {
    userID: 2,
    name: "John Smith",
    email: "smithJ@gmail.com",
    since: "20th Sep 2019",
  },
  {
    userID: 3,
    name: "Goerge B",
    email: "georgeB@gmail.com",
    since: "06th Aug 2022",
  },
  {
    userID: 4,
    name: "Jason Roy",
    email: "jasonR@gmail.com",
    since: "04th Jan 2017",
  },
  {
    userID: 5,
    name: "Tim Bernaud",
    email: "timB@gmail.com",
    since: "30th Aug 2018",
  },
  {
    userID: 6,
    name: "Dumm Object",
    email: "work@gmail.com",
    since: "2nd Aug 2021",
  },
];

export const reducer = (state = initialUsers, action) => {
  if (action.type === USER_DELETED) {
    return state.filter((user) => user.userID !== action.payload.userID);
  }

  return state;
};

export default reducer;
