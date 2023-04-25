
import './App.css'
import movies from './assets/movies.json'
// import Section from './components/Section'


const App = () => {
  movies.map((elem) => {
    return (
      <section key={elem.category}>
        <h2>{elem.category}</h2>
        {elem.images.map((image) => {
          return (
            <img key={image} src={image} alt="" />
          )
        }) }
      </section>
    )
  }) 

  // const listOfImages = movies.images.map((img) => {
  //   return (
  //     <div>
  //       <img src={`${img.images}`} alt="" />
  //     </div>
  //   )
  // })
  // return (
    // <>
      // {listOfCategories}
    //   {/* {listOfImages} */}
    // </>
  // )
}

export default App
