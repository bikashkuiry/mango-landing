"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    {
      id: 1,
      name: "Alphonso Mango",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Himsagar Mango",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Langra Mango",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Load cart
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart
  const addToCart = (product: any) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Decrease quantity
  const decreaseQty = (id: number) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  // Remove item
  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-950 text-white min-h-screen"
          : "bg-gradient-to-b from-yellow-100 to-white min-h-screen"
      }
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white/10 backdrop-blur-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold">🥭 Mango Store</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Fresh Mangoes 🥭
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
        >
          Sweet • Juicy • Farm Fresh • Delivered Fast
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-xl"
        >
          Shop Now
        </motion.button>
      </section>

      {/* Product Section */}
      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Premium Mango Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className={
                darkMode
                  ? "bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                  : "bg-white rounded-3xl overflow-hidden shadow-2xl"
              }
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{item.name}</h3>

                <p className="mt-2 text-lg">₹{item.price} / dozen</p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:opacity-90"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="px-6 pb-20">
        <h2 className="text-4xl font-bold mb-8">🛒 Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div
            className={
              darkMode
                ? "bg-gray-900 rounded-3xl p-6 shadow-2xl"
                : "bg-white rounded-3xl p-6 shadow-2xl"
            }
          >
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center border-b py-5 gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-xl">{item.name}</h3>

                    <p>
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-black"
                  >
                    -
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-black"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-3xl font-bold">Total: ₹{total}</h3>

              <button
                onClick={() => alert("Order placed successfully 🥭")}
                className="px-8 py-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
