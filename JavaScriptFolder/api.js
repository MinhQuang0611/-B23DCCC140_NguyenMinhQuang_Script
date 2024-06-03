const fetchApi = async(api) => {
    const response = await fetch(api);
    const data = await response.json();
    return data
}
fetchApi("https://dummyjson.com/products")
    .then((x) => {
        console.log(x)
    })