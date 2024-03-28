function PersonalInfo() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="mx-auto flex flex-col justify-center items-center ">
        <div className="flex items-center rounded-[10px] mt-[50px] bg-white px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input type="text" placeholder="Search People..." className="p-2  " />
        </div>

        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="yle foto"
          className="rounded-[100px] w-[130px] h-[130px] mt-6"
        ></img>
        <p className="font-bold text-[20px] mb-1">Davit Avtandildoshvili</p>
        <p className="text-[18px]">Junior Developer</p>
        <div className="flex w-[240px] justify-between items-center ">
          <div className="flex flex-col items-center">
            <div className="w-15 h-15 bg-blue-200 p-4 mt-4 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </div>
            <p className="mt-1">Chat</p>
          </div>

          <div className="h-14 border-[1px] border-gray-400"></div>
          <div className="flex flex-col items-center">
            <div className="w-15 h-15 bg-blue-200 p-4 mt-4 rounded-full flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <p className="mt-1">Video Call</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <p>View Friends</p>
      </div>
      <div className="flex gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

        <p>Add To Favourites</p>
      </div>
      <p className="mt-4 font-bold text-[18px]">Attachments</p>
      <div className="flex justify-between w-[90%] mt-4">
        <div className="bg-purple-300 p-4 py-6 rounded-md">PDF</div>
        <div className="bg-purple-300 p-4 py-6 rounded-md">Video</div>
        <div className="bg-purple-300 p-4 py-6 rounded-md">MP3</div>
        <div className="bg-purple-300 p-4 py-6 rounded-md">Image</div>
      </div>
    </div>
  );
}

export default PersonalInfo;
