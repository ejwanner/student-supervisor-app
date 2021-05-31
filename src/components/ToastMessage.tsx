import React from "react";
import { Snackbar } from "react-native-paper";

type ToastMessageProps = {
  message: string;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  const [visible, setVisible] = React.useState(true);

  const onDismissSnackBar = () => setVisible(false);
  return (
    <Snackbar onDismiss={onDismissSnackBar} visible={visible} duration={2000}>
      {message}
    </Snackbar>
  );
};

export default ToastMessage;
