import HeaderComponent from "./Components/LandingComponent/HeaderComponent/HeaderComponent";

<<<<<<< HEAD
function App() {
  console.log("object")
  const [count, setCount] = useState(0)
=======
>>>>>>> origin/1-B/Create-Pages_site

export default function App() {
  return (
<<<<<<< HEAD
    <>
    <h1>testtt</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
    <div className="w-full bg-black flex justify-evenly ">
<HeaderComponent/>
    </div>
>>>>>>> origin/1-B/Create-Pages_site
  )
}