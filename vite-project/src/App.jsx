import HeaderComponent from "./Components/LandingComponent/HeaderComponent/HeaderComponent";
import { Login } from "./screens/loginpage/Login";

export default function App() {
  return (
    <>
      <h1>testtt</h1>

      <div className="w-full  flex justify-evenly ">
        <HeaderComponent />
      </div>
        <Login/>
    </>
  );
}
