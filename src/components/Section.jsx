const Section = (elem) => {
  return (
    <section key={elem.category}>
      <h2>{elem.category}</h2>
      <div className="carrousel">
      {elem.images.map((image) => {
        return (
          <img key={image} src={image} alt="" />
        )
      })}</div>
    </section>
  )
}

export default Section