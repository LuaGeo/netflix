
import './App.css'
import movies from './assets/movies.json'

const App = () => {
  return movies.map((elem) => {
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
}

// const App = () => {
//   return movies.map((elem) => {
//     return (
//       <section key={elem.category}>
//         <h2>{elem.category}</h2>
//         {elem.images.map((image) => {
//           return (
//             <img key={image} src={image} alt="" />
//           )
//         }) }
//       </section>
//     )
//   }) 
// }

export default App
