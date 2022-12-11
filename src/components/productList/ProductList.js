import "./ProductList.css";
import Data from "../../Data.json";
import Products from "../products/Products";
import { useState } from "react";


function ProductList() {
    console.log(Data);
    // const [count, setCount] = useState(1);
    // const [ClassValue, setClassValue] = useState("regularWidth");

    // function classNameSetting() {
    //     if (count < 6) {
    //         setCount(count + 1);
    //         setClassValue("regularWidth");
    //     } else if (count === 4) {
    //         setCount(count + 1);
    //         setClassValue("widerWidth");
    //     } else if (count === 5) {
    //         setCount(1);
    //         setClassValue("widerWidth");
    //     }
    // };

    // console.log(count);
    // console.log(ClassValue);

    return (
        <div className="productList">
            {/* <Products /> */}
            {/* {classNameSetting()} */}
            {Data.map((singleProduct, index) => {
                return <Products key={index} link={singleProduct.link_shop} pic={singleProduct.product_picture} name={singleProduct.product_name} price={singleProduct.price} brand={singleProduct.compagny} />

            })}
        </div>
    );
};

export default ProductList;