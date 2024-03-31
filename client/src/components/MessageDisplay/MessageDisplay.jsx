import { useChat } from "../../context/ChatContext";

function MessageDisplay({ username }) {
  const { messageList } = useChat();

  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden gap-3 h-full mt-3">
      {messageList?.map((item, index) => {
        return (
          <>
            {item.username === username ? (
              <div
                className="flex justify-end items-center gap-3 max-w-full"
                key={index}
              >
                <div className="max-w-[60%]">
                  <p className="px-1 py-2 bg-gray-200 rounded-[10px] w-[100%] break-words">
                    {item.message}
                  </p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt=""
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
            ) : (
              <div className="flex gap-3 items-center max-w-full" key={index}>
                <img
                  src={item.userImage}
                  alt=""
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
                <div className="max-w-[60%]">
                  <p className="px-1 py-2 bg-gray-200 rounded-[10px] w-[100%] break-words">
                    {item.message}
                  </p>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

// justify end radgan gadavides marjvniv teqsti

export default MessageDisplay;
