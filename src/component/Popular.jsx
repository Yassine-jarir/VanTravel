import { useEffect } from "react";

function Popular() {
  // async : rander data befor render eny things else
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>ss</div>;
}

export default Popular;
