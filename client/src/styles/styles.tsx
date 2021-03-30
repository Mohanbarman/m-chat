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

export const useDialogStyles = makeStyles((theme) => ({
  container: {
    padding: '30px',
  }
}))

export const useMessageStyles = makeStyles((theme) => ({
  container: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f3f3f3',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e7ebff',
  },
  messagesContainer: {
      maxHeight:"90vh",
      overflow:"auto",
      display: "flex",
      flexDirection: "column",
      gridGap: "10px",
      padding: "30px 0",
      alignItems: "flex-end",
  }
}))