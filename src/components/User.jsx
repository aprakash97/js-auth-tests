// import { Box, Button, Card, Heading } from "@twilio-paste/core";
import { useState } from "react";

const User = ({ userID, name, email, remove = () => {} }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="grid-item">
      <div>
        {name} - {email}
      </div>

      <div>
        {/* <button onClick={update}>Update</button> */}

        <button className="btn" onClick={remove}>
          Remove
        </button>
      </div>
      {active ? (
        <form>
          <input type="text" value={name} />
          <input type="email" value={email} />
          <button>Submit</button>
        </form>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default User;
