const Section = (elem) => {
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
}

export default Section