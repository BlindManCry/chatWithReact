function MessageDisplay() {
  return (
    <div className="flex flex-col justify-end gap-3 h-full">
      {/* SXVA USERI  */}
      <div className="flex gap-3 items-center">
        <img
          src="https://randomuser.me/api/portraits/women/11.jpg"
          alt=""
          className="w-[30px] h-[30px] rounded-[50%]"
        />
        <p className="px-1 py-2 bg-gray-200 rounded-[10px]">
          mineti gagiketo? {"<3"}
        </p>
      </div>

      {/* SHENI USERI  */}
      <div className="flex justify-end items-center gap-3">
        <p className="px-1 py-2 bg-gray-200 rounded-[10px]">davai {"<3"}</p>
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt=""
          className="w-[30px] h-[30px] rounded-[50%]"
        />
      </div>
    </div>
  );
}

// justify end radgan gadavides marjvniv teqsti

export default MessageDisplay;
