// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const Menu = () => {
//   const [menu, setMenu] = useState("");

//   const {id} = useParams()
//   console.log(id)

//   const {people} = useParams()
//   console.log(people)


//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch(`https://swapi.dev/api/${people}/${id}`);
//       const codeUpdate = await res.json();
//       console.log(codeUpdate.fil);
    

//     };
//     getData();
//   },);
//   // useEffect(() => {
//   //   const getPeople = async () => {
//   //     const res = await fetch("https://swapi.dev/api/${people}/");
//   //     const codeUp = await res.json();
//   //     console.log(codeUp);
//   //   };
//   //   getPeople();
//   // }, []);

//   const handleChange = (e) => {
//     setMenu(e.target.value)
    
//   }
//   return (
//     <div>
//       <Link to={"/"}></Link>
//       <label>Search for: </label>
//       <select className="dropbtn">
//         <option>Films</option>
//         <option>Starships</option>
//         <option>Vehicles</option>
//         <option>Spaces</option>
//         <option>Planets</option>
//         <option>People</option>
//       </select>

//       <input className="inputApi"
//          value={menu} 
//          placeholder="id"
//          onChange={handleChange}
//         />

//       <button className="btn">Search</button>
//       <div>
//         <h1>{menu.name}</h1>
//         <p>{menu.height}</p>
//         <p>{menu.hair_color}</p>
//         <p>{menu.birth_year}</p>
//         <p>{menu.homeworld}</p>
//       </div>
//     </div>
//   );
// };

// export default Menu;
