import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:7000/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>SaintBlog</h1>
    </div>
  );
}

export default App;
