import '../css/App.css';
import data from "../data/data";
import AnimalList from "./AnimalList";
import SelectAnimal from "./SelectAnimal";

console.log(data);

function App() {
  let subheading
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {data.title}
        </h1>
        <img src={data.image} alt={data.alt} style={{width:data.image_width,height:data.image_height}}/>
        {data.subheading?<h2>{data.subheading}</h2>: undefined}
      </header>
      {subheading}
      <SelectAnimal />
      <AnimalList animals={data.animals} />
    </div>
  );
}
export default App;
