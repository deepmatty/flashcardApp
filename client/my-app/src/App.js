import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListsOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cards").then((response) => {
      setListsOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div className="card">
            {" "}
            <div className="front"> {value.frontText} </div>
            <div className="back"> {value.backText} </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
