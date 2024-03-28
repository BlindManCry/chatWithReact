import { createContext, useContext } from "react";

const ChatContext = createContext();

function ChatContextProvider({ children }) {
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
}

function useChat() {
  const context = useContext(ChatContext);
  return context;
}

export { ChatContextProvider, useChat };
