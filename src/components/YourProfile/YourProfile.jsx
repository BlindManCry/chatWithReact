function YourProfile() {
  return (
    <div className="flex mt-5 ml-5 items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt=""
        className="w-[100px] h-[100px] rounded-[50%]"
      />
      <div className="flex flex-col">
        <p className="text-blue-600 font-semibold uppercase text-[18px]">
          Sasha Gedevanishvili
        </p>
        <p className="text-gray-400">yle developeri</p>
      </div>
    </div>
  );
}

export default YourProfile;
