import io, { Socket } from "socket.io-client";
import Toast from "react-native-toast-message";
import { AppDispatch, AppState, Message, UserInfo } from "./types";
import {
  fetchAllConversations,
  fetchMessages,
  receiveMessage,
} from "./data/chat";
let socket: Socket;

export const disconnectSocket = () => {
  console.log("Disconnecting ...");
  if (socket) socket.disconnect();
};

export const sendMessage = (message: Message) => {
  socket.emit("msgToServer", message);
};

export const startSocketIO =
  () => async (dispatch: AppDispatch, getState: () => AppState) => {
    const token = getState().auth.token;

    socket = io("http://127.0.0.1:8000", {
      transports: ["websocket"],
      jsonp: false,
      query: {
        token: `Bearer ${token}`,
      },
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    socket.connect();

    socket.on("connection", () => {
      console.log("websocket connection established");
    });

    socket.on("disconnect", () => {
      console.log("connection to server lost.");
    });

    socket.on(`receive-${getState().auth.userInfo._id}`, (message: Message) => {
      if (message.createdBy._id !== getState().auth.userInfo._id) {
        Toast.show({
          type: "success",
          text1: message.createdBy.name,
          text2: message.message,
        });
      }
      dispatch(receiveMessage(message));
      dispatch(fetchMessages());
      dispatch(fetchAllConversations());
    });
  };
