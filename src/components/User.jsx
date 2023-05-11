// import { Box, Button, Card, Heading } from "@twilio-paste/core";
import Button from "@mui/material/Button";
import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const User = ({ userID, name, email, since, remove = () => {} }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Card
      sx={{
        bgcolor: "#EFF7FF",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 200,
        margin: 1,
      }}
    >
      <CardContent>
        <div className="contents">
          <div>
            <h1> {name}</h1>
          </div>
          <div>
            <label>Email :</label> {email}
          </div>
          <div className="date">
            <label>User Since :</label> {since}
          </div>
        </div>

        <div className="btn">
          {/* <button onClick={update}>Update</button> */}

          {/* <button onClick={remove}>Remove</button> */}
          <Button
            variant="contained"
            sx={{
              position: "relative",
              top: isSmallScreen ? "10px" : "-15vh",
              left: isSmallScreen ? "auto" : "75vh",
              justifyContent: "flex-end",
            }}
            onClick={remove}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default User;
