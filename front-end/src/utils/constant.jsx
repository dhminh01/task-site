import socketIOClient from "socket.io-client";

export const socketIO = socketIOClient("http://localhost:5555");
export const apiURL = "http://localhost:5555/api";
export const apiURLTasksite = "http://localhost:5555/api/tasksize";
export const LOCAL_STORAGE_TOKEN_NAME = "LOCAL_TOKEN";
