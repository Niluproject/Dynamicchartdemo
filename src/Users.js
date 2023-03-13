import { useParams } from "react-router-dom";
function Users() {
  const params = useParams();
  const {name} = params;
  console.log(name);
    return (
      <div className="App">
      <h1>This is {name} page</h1>
      </div>
    );
  }
  
  export default Users;