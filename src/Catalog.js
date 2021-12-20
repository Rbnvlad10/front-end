import React, {useState} from 'react'
import axios from 'axios'
const Catalog = () => {
  const [id, setID] = useState();
  const [shirt, setShirt] = useState([]);
  const [shirts, setShirts] = useState([]);


  async function getShirt() {

    try {
      await axios.get(`/shirts/${id}`)
        .then((res) => {
          setShirt(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }

  async function getShirts() {

    try {
      await axios.get(`/shirts`)
        .then((res) => {
          setPhones(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }
  return (
    <div>
      <form>
        <h1>shirts here</h1>
        <input type="text" required placeholder="Shirt ID"  onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={getShirt}>GET INFO</button>
      </form>
      <table>
          <th>id</th>
          <th>color</th>
          <th>brand</th>
          <th>size</th>

          {
            phone.map((shirt, index) => {
              return (
                <tr>
                  <td key={index}>{shirt.id}</td>
                  <td key={index}>{shirt.color}</td>
                  <td key={index}>{shirt.brand}</td>
                  <td key={index}>{shirt.size}</td>
                </tr>
              )
            })
          }
        </table>
      <form>
        <h1>all shirts here</h1>
        <button type="button" onClick={getShirts}>GET INFO</button>
      </form>
     
     
        <table>
          <th>id</th>
          <th>color</th>
          <th>brand</th>
          <th>size</th>
          {
            phones.map((shirt, index) => {
              return (
                <tr>
                  <td key={index}>{shirt.id}</td>
                  <td key={index}>{shirt.color}</td>
                  <td key={index}>{shirt.brand}</td>
                  <td key={index}>{shirt.size}</td>
                </tr>
              )
            })
          }
        </table>
    </div>
  )
}

export default Catalog
