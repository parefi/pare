const App = () => {
  return (
  <div className="flex flex-col items-center h-screen">
    <div className="flex bg-white w-screen p-4 text-xl font-bold">
      pare.fi
    </div >
    <div className="flex flex-col items-center align-middle w-screen h-screen bg-[url('/public/images/pare1.jpg')]">
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-shadow md:text-7xl text-5xl font-bold text-white">      
          Päre on pare!   
        </h1>
        <div className="text-shadow md:text-2xl text-xl align-center text-white">
          pareonpare@gmail.com
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
