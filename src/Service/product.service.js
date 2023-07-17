 fetchProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
      
    })
    .catch((error) => console.log(error));

    
}
export default fetchProduct;
