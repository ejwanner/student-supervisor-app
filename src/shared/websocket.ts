import io, { Socket } from "socket.io-client";
import { AppDispatch, AppState, UserInfo } from "./types";
let socket: Socket;

export const disconnectSocket = () => {
  console.log("Disconnecting ...");
  if (socket) socket.disconnect();
};

export const sendMessage = (message: any) => {
  socket.emit("msgToServer", { ...message });
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

    socket.on("msgToClient", (message) => {
      console.log("msg", message);
    });
  };
