// import { Box, Button, Card, Heading } from "@twilio-paste/core";

const MenuItem = ({ uuid, name, email, remove = () => {} }) => {
  return (
    <div className="child">
      <div>
        {name} - {email}
      </div>

      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default MenuItem;
