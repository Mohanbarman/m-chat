import { makeStyles } from "@material-ui/core";

export const useRootStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: 'center',
    padding: '20px',
    body: {
      margin: 0,
      padding: 0,
    },
  },
  messageInputContainer: {
    display: "flex",
    gap: '30px',
    width: '100%',
  },
}));
