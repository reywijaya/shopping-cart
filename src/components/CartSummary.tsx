import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetCart} from "../redux/cartSlice";
import {RootState} from "../redux/store";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSummary: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (items.length === 0) {
            toast.warn("Keranjang kosong! Tambahkan produk sebelum checkout.");
            return;
        }

        dispatch(resetCart());
        toast.success("Produk berhasil di-checkout!");
    };

    return (
        <div className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">Cart Summary</h3>
            {items.map((item) => (
                <div key={item.id} className="flex justify-between mt-2">
          <span>
            {item.name} (x{item.quantity})
          </span>
                    <span>${item.price * item.quantity}</span>
                </div>
            ))}
            <div className="mt-4 font-bold text-right">Total: ${total}</div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
                onClick={handleCheckout}
            >
                Checkout
            </button>
            <ToastContainer/>
        </div>
    );
};

export default CartSummary;