const Section = ({ category, images}) => {
  return (
    <section>
      <h2>{category}</h2>
      <div className="images">{images}</div>
    </section>
  )
}

export default Section