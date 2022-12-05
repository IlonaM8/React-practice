
import { useEffect, useState } from "react";

export function FinalGithubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  return (
    <div>
      <h3>Name: {data && data.name}</h3>

      <h3>LinkedIn: {data && data.blog}</h3>
    </div>
  );
}