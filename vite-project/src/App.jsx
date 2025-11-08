import { RouterProvider} from "react-router-dom";
import Router from "../src/routs/Router";
export default function App() {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  );
}
