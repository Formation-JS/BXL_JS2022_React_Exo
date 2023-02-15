import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './product-list.module.css';

const ProductListItem = ({ name, price, isDiscount }) => {

    const priceFormatted = price.toLocaleString('en-fr', {
        style: 'currency',
        currency: 'EUR'
    });

    const priceStyle = clsx(style.price, isDiscount && style.discount, isDiscount && 'demo');

    // const priceStyle = clsx({
    //     [style.price]: true,
    //     [style.discount]: isDiscount,
    //     'demo': isDiscount
    // })

    return (
        <div className={style['product-line']}>
            <p>{name} { isDiscount && <span className={style.discount}>En promo !</span>}</p>
            <p className={priceStyle}>{priceFormatted}</p>
        </div>
    );
};


const ProductList = ({ products }) => {

    const productsJSX = products.map(
        product => <ProductListItem {...product} key={product.id} />
    );

    return <>
        <h2>List des produits</h2>
        <div>
            {productsJSX}
        </div>
    </>;
};

ProductList.defaultProps = {
    products: []
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isDiscount: PropTypes.bool
    }))
};

export default ProductList;