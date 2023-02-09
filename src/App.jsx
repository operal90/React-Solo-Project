import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

function App() {
  const mains = data.map( item => {
    return (
    <div className="main">
      <img src={`/src/image/`+ item.imageUrl} className="image--photo" />      
      <Main
      key={item.id}
      item={item}
      />
      </div>
    )
  } )
 
  return (
    <div className="container">
      <Navbar />
      {mains}
     
    </div>
  )
}

export default App
