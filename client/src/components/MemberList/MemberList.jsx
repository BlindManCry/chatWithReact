function MemberList() {
  return (
    <div>
      <div>
        <input
          type="text"
          className="w-[80%] px-2 py-1 text-[20px] ml-9 mt-8 rounded-[10px] outline-none border-none placeholder:text-gray-400"
          placeholder="search friends"
        />
      </div>

      <div className="flex flex-col mt-6 gap-4 w-full ">
        <div className="flex justify-between items-center px-4 w-full">
          <div className="flex gap-3 items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
              className="w-[70px] h-[70px] rounded-[50%]"
            />
            <div>
              <p className="text-blue-600 font-semibold">Brad Mittens</p>
              <p className="text-gray-400 text-[14px]">
                Message for brad mittens
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
      </div>
    </div>
  );
}

export default MemberList;
