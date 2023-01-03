import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../Store";
import { setAllProducts } from '../Store/Slices/productsSlice'

const NETWORK_ERROR = "Internet Error"

class ProductController {

    static fetchProducts = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://dummyjson.com/products`)
                .then(response => {
                    resolve(response.data.products)
                })
                .catch(err => {
                    console.log(err, "Error in sendNumberForVerificationApiCall");
                    reject(NETWORK_ERROR);
                });
        })
    }


    static handleLoadProducts = (_callback = () => false) => {
        ProductController.fetchProducts()
            .then((result) => {
                const newModifiedProductsArray = result.map((item)=>({...item,addedToCart:false,quantity:1}))
                store.dispatch(setAllProducts(newModifiedProductsArray))
                _callback("Successfully Loaded")
            })
            .catch((error) => {
                console.log(error, 'Error in gettingProducts')
                _callback("Error in Loading Products")
            })
    }


}

export default ProductController


export const useAllProducts = () => {
    return useSelector((state) => state.products.allProducts)
}