import './Product.css'

export default function Product(props) {
    console.log(props)
    return(
        <div className="product-card">
            <div className='product-title'>{props.fruit.name}</div>

            <div className='product-taste'>Taste: {props.fruit.taste}</div>

            <div className='product-content'>{props.fruit.description}</div>

            <div className='product-quantity'>{props.fruit.quantity} left</div>
        </div>
    )
}
