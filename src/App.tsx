import React from "react";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";

const products = [
    {
        id: 1,
        name: "Light Blue Oxford Shirt",
        url: "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lf5aw1lnjp3214@resize_w450_nl.webp",
        description: "Copyright Highty Menswear",
        price: 100,
        color: "Light Blue",
        size: "Medium",
    },
    {
        id: 2,
        name: "White Knit Sweater",
        url: "https://down-id.img.susercontent.com/file/1862484413329e2bbefae8d6e3cd9cf4@resize_w450_nl.webp",
        description: "Copyright Highty Menswear",
        price: 200,
        color: "Light Cream",
        size: "All Size",
    },
];

const App: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-10">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row w-full justify-center px-4 md:px-20 gap-4 md:gap-10">
                <div className="w-full md:w-2/3 flex-col">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
                <div className="w-full md:w-1/3">
                    <CartSummary/>
                </div>
            </div>
        </>
    );
};

export default App;
