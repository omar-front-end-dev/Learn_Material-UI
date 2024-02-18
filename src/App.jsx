import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Create } from "./pages/Create/Create";
import { Not_Found_Page } from "./pages/Not_Found_Page/Not_Found_Page";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Not_Found_Page />} />
        <Route path="create" element={<Create />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
