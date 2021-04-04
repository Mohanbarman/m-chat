import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Dialog, DialogTitle, Box } from "@material-ui/core";
import { UserContext } from "../providers/userProvider";


export default function UserInputDialog() {
  const { user, updateUser } = (useContext(
    UserContext
  ) as unknown) as UserContextType;

  const [name, setName] = useState<string>("");
  const [isNameError, setIsNameError] = useState<boolean>(false);

  function handleSubmit() {
    if (!name) {
      setIsNameError(true);
      return;
    }

    const user: UserType = {
      id: uuidv4(),
      name: name,
    };

    updateUser(user);
  }

  return (
    <Dialog open={!user}>
      <DialogTitle>Login</DialogTitle>
      <Box
        padding={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gridGap={"30px"}
      >
        <TextField
          label={"Your Name"}
          variant={"outlined"}
          style={{ width: "100%" }}
          placeholder={"Ex: John"}
          onChange={(event) => setName(event.target.value)}
          value={name}
          error={isNameError}
          helperText={isNameError ? 'Name is required' : ''}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
}
