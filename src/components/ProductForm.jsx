function ProductForm({
  title,
  setTitle,
  price,
  setPrice,
  handleSubmit,
  buttonText
}) {

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <button type="submit">
        {buttonText}
      </button>

    </form>
  )
}

export default ProductForm