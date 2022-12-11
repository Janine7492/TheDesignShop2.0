import "./Products.css";


function Products(props) {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        // console.log(images);
        return images;
    }
    const images = importAll(require.context('../../assets/img', false, /.(png|jpe?g|svg)$/));
    ;

    // console.log(props.pic)
    // console.log(images)
    return (

        <div className="prodWrapper">
            <a href={props.link} target="_blank" className="prod_link">
                <img src={images[props.pic]} alt={props.name} className="prod_img" />
                <div className="prod_description">
                    <h2 className="prod_title">{props.name}</h2>
                    <p className="prod_price">{props.price}</p>
                </div>
                <h3 className="prod_brand">{props.brand}</h3>
            </a>
        </div>
    );
};

export default Products;
