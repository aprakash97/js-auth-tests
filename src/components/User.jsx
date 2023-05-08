// import { Box, Button, Card, Heading } from "@twilio-paste/core";
import { useState } from "react";

const User = ({ userID, name, email, remove = () => {} }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="child">
      <div>
        {name} - {email}
      </div>

      <div>
        {/* <button onClick={update}>Update</button> */}
        <button className="btn" onClick={handleClick}>
          Update
        </button>
        <button className="btn" onClick={remove}>
          Remove
        </button>
      </div>
      {active ? (
        <div className="updateForm">
          <form>
            <input type="text" value={name} />
            <input type="email" value={email} />
          </form>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default User;
