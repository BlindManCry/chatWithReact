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
        <p className="text-gray-400">frontend developeri</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 ml-[40px] cursor-pointer text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    </div>
  );
}

export default YourProfile;
