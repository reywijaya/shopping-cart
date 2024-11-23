import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "../redux/cartSlice";
import {Heart, SquareMinus, SquarePlus, Trash2} from "lucide-react";
import {RootState} from "../redux/store.ts";

interface Product {
    id: number;
    name: string;
    url: string;
    description: string;
    price: number;
    color: string;
    size: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const dispatch = useDispatch();
    const quantity = useSelector((state: RootState) =>
        state.cart.items.find((item) => item.id === product.id)?.quantity || 0
    );

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 border shadow w-full">
            <img
                src={product.url}
                alt={product.name}
                className="w-72 h-72 rounded"
            />

            <div className="flex flex-col md:flex-row w-full">

                <div className="flex flex-col md:w-2/3 w-full md:justify-between">
                    <div>
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                    <p className="text-gray-600">Color: {product.color}</p>
                    <p className="text-gray-600">SIze: {product.size}</p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 pt-4 md:pt-0">
                        <button className="flex flex-row gap-2 items-center hover:text-red-600">
                            <Trash2 />
                            Remove Item
                        </button>
                        <button className="flex flex-row items-center gap-2 hover:text-blue-600">
                            <Heart />
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/3 md:items-end justify-around pt-4">
                    <div className="flex flex-row gap-1 md:gap-4 border p-2 items-center justify-around w-auto">
                        <button
                            onClick={() => dispatch(addItem(product))}
                        >
                            <SquarePlus/>
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => dispatch(removeItem({id: product.id}))}
                        >
                            <SquareMinus/>
                        </button>
                    </div>
                    <p className="text-gray-600 font-bold text-xl p-2">${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
