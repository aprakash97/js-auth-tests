import { UserListContainer } from "./UserListContainer";

const Home = () => {
  return (
    <>
      <div className="logoHeader">
        <img src="../images/react-redux.png" alt="" />
        <h1 style={{ color: "#fffafa" }}>Redux Exercise</h1>
      </div>
      <UserListContainer />
    </>
  );
};

export default Home;
