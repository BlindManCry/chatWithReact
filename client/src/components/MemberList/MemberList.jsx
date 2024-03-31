import { useChat } from "../../context/ChatContext";

function MemberList() {
  const { allUsers, socket } = useChat();

  function connectUsers() {
    socket.emit("join_room", 2);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          className="w-[80%] px-2 py-1 text-[20px] ml-9 mt-8 rounded-[10px] outline-none border-none placeholder:text-gray-400"
          placeholder="search friends"
        />
      </div>

      <div className="flex flex-col mt-6 gap-4 w-full overflow-y-auto max-h-[70vh]">
        {allUsers.map((user, index) => {
          return (
            <div
              className="flex justify-between items-center px-4 w-full cursor-pointer hover:bg-gray-300"
              key={index}
              onClick={connectUsers}
            >
              <div className="flex gap-3 items-center">
                <img
                  src={user.image}
                  alt=""
                  className="w-[70px] h-[70px] rounded-[50%]"
                />
                <div>
                  <p className="text-blue-600 font-semibold">{user.username}</p>
                  <p className="text-gray-400 text-[14px]">
                    Message for {user.username}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-end gap-1">
                <p className="text-gray-600 text-[13px]">10:54 AM</p>
                <p className="bg-blue-700 text-white px-[11px] py-[5px] rounded-[50%]">
                  1
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemberList;
