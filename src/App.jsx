import Random from "./components/Random"
import Tag from "./components/Tag"


const App = () => {
  return (
    <>
      <div className="background min-h-[100vh] p-2">
        <h1 className="text-center text-3xl font-semibold p-2 bg-white w-[90%] m-w-[1200px] mx-auto rounded-sm">RANDOM GIFS</h1>
        <div className="flex flex-col items-center space-y-10 mt-10">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  )
}

export default App