import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const ChatContext = createContext();

const socket = io.connect("http://localhost:3001");

function ChatContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setAllUsers(data);
      setActiveUser(data[0]);
    }
    getData();
  }, []);

  console.log(messageList);

  return (
    <ChatContext.Provider
      value={{ allUsers, activeUser, messageList, setMessageList, socket }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  return context;
}

export { ChatContextProvider, useChat };
