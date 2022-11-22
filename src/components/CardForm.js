const CardForm = ({
  name,
  description,
  image,
  price,
  handleName,
  handleDescription,
  handleImage,
  handlePrice,
  handleClick,
  isEdit,
}) => {
  return (
    <div>
      <div>Nama</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
      </div>
      <div>Deskripsi</div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
        />
      </div>
      <div>URL Gambar</div>
      <div>
        <input
          type="text"
          value={image}
          onChange={(e) => handleImage(e.target.value)}
        />
      </div>
      <div>Harga</div>
      <div>
        <input
          type="number"
          value={price}
          min={0}
          onChange={(e) => handlePrice(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleClick} className="mt-4">
        {isEdit ? "Ubah" : "Tambah"} Produk
      </button>
    </div>
  );
};

export default CardForm;
