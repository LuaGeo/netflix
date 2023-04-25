
import './App.css'
import movies from './assets/movies.json'
import Section from './components/Section'

const App = () => {
  return movies.map((elem) => {
    return (
      <Section key = {elem.category} image = {image}/>
    )
  }) 
}

{/* <section key={elem.category}>
  <h2>{elem.category}</h2>
  {elem.images.map((image) => {
    return (
      <img key={image} src={image} alt="" />
    )
  }) }
</section> */}

export default App
