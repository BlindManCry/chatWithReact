import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Chat from "./pages/Chat/Chat";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Chat />,
        path: "/",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//random images
//https://randomuser.me/api/portraits/men/1.jpg
