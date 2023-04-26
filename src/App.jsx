
import './App.css'
import movies from './assets/movies.json'
import Section from './components/Section'

const App = () => {
  return movies.map((elem) => {
    return (
      <Section key = {elem.category} category = {elem.category} images = {elem.images}/>
    )
  }) 
}

export default App
