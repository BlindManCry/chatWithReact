import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{}],
  },
]);

function App() {
  return <BrowserRouter router={router} />;
}

export default App;
