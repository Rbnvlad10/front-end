import React, { useState } from 'react'
import axios from 'axios'
const Main = () => {

  const [id, setID] = useState();

  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [brand, setBrand] = useState([]);


  async function add_phone(add_shirt) {
    add_phone.preventDefault();
    try {
      await axios.post("/shirts", { name, color, brand, size })
      alert(`${name} added successfully`)
    } catch (err) {
      console.log(err);
      alert('Error')
    }
  }


  async function delete_shirt() {
    try {
      await axios.delete(`/shirts/${id}`)
      alert(`Запись с ID: ${id} удалена`)
    } catch (err) {
      alert("Рубашка с таким ID нет")
    }
  }

  async function update_shirt(update_shirt) {
    update_shirt.preventDefault();
    try {
      await axios.put(`/shirts/${id}`, { name, color, brand, size })
      alert(`Запись с ID: ${id} обновлена`)
    } catch (error) {
      alert('Error')
    }
  }

  return (
    <div>
      <form>
        <h1>delete shirt here</h1>
        <input type="text" required placeholder="Shirt ID" onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={delete_shirt}>delete info about shirt</button>
      </form>

      <form onSubmit={add_shirt}>
        <h1>add shirt here</h1>
        <input type="text" required placeholder="Name" onChange={(add_shirt) => setName(add_shirt.target.value)} />
        <input type="text" required placeholder="Color" onChange={(add_shirt) => setColor(add_shirt.target.value)} />
        <input type="text" required placeholder="Brand" onChange={(add_shirt) => setBrand(add_shirt.target.value)} />
        <input type="text" required placeholder="Size" onChange={(add_shirt) => setSize(add_shirt.target.value)} />
        <button type="submit">add shirt</button>
      </form>

      <form >
        <h1>update info about shirt here</h1>
        <input type="text" required placeholder="shirt ID" onChange={(id) => setID(id.target.value)} />
        <input type="text" required placeholder="Name" onChange={(update_shirt) => setName(update_shirt.target.value)} />
        <input type="text" required placeholder="Color" onChange={(update_shirt) => setColor(update_shirt.target.value)} />
        <input type="text" required placeholder="Brand" onChange={(update_shirt) => setBrand(update_shirt.target.value)} />
        <input type="text" required placeholder="Size" onChange={(add_shirt) => setSize(add_shirt.target.value)} />
        <button type="button" onClick={update_shirt}>Update info about shirt</button>
      </form>
    </div>
  )
}

export default Main
