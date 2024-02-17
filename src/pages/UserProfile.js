import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  // useParams returns a key/value pair. key=> is the parameter for the route /profile/1 , 1 is the value of params.
  console.log(params)
  const userId = params.id; // 1,2,3 
  console.log(userId)

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
