
import './App.css'
import movies from './assets/movies.json'
// import Section from './components/Section'


const App = () => {
  const listOfCategories = movies.map((category) => {
    return (
      <section>
        <h2>{category.category}</h2>
      </section>
    )
  }) 
  // const listOfImages = movies.images.map((img) => {
  //   return (
  //     <div className='images'>
  //       <img src={`${img.images}`} alt="" />
  //     </div>
  //   )
  // })
  return (
    <>
      {listOfCategories}
      {/* {listOfImages} */}
    </>
  )
}

export default App
