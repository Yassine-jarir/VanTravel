const getapis = async () => {
  const fetchh = await fetch("/api/vans");
  if (!fetchh.ok) {
    throw {
      message: "failed to fetch vans",
      statusText: fetchh.statusText,
      status: fetchh.status,
    };
  }
  const data = await fetchh.json();

  return data.vans;
};
export default getapis;
