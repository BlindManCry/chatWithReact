function MessageDisplay({ messageList, username }) {
  return (
    <div className="flex flex-col overflow-y-auto gap-3 h-full">
      {messageList.map((item, index) => {
        return (
          <>
            <div
              className={`flex gap-3 items-center ${
                item.username === username ? "flex-row-reverse" : ""
              }`}
              key={index}
            >
              <img
                src={item.userImage}
                alt=""
                className="w-[30px] h-[30px] rounded-[50%]"
              />
              <p className="px-1 py-2 bg-gray-200 rounded-[10px] max-w-[60%]">
                {item.message}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}

/* <div className="flex justify-end items-center gap-3">
<p className="px-1 py-2 bg-gray-200 rounded-[10px] max-w-[60%]">
  davai {"<3"}
</p>
<img
  src="https://randomuser.me/api/portraits/men/1.jpg"
  alt=""
  className="w-[30px] h-[30px] rounded-[50%]"
/>
</div> */

// justify end radgan gadavides marjvniv teqsti

export default MessageDisplay;
