import ProductCard from '../../Components/ProductCard'
import Categories from '../../Components/Categories'
// import FeatureCard from '../../Components/FeatureCard'
// import Product from '../Product'
import { useEffect,useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = () =>
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => {console.log('res',res); return res.json();})
        .then((json) => {
          console.log('Product:',json);
          setProducts(json);
        }).catch((error)=>console.log('error:',error));
        
        fetchProducts()}
        ,[]);
    

    return <div> 
        <Categories/>
        <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
         All Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most recent products
        </h1>
      </div>
        {
            products.length>0?<ProductCard products={products}/>:<div>Loading....</div>
        }
    
    </div>
    
}

export default Products