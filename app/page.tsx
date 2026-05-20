export default function Home() {
  const products = [
    {
      name: "Alphonso Mango",
      price: "₹1200 / dozen",
      desc: "Rich, sweet and premium quality mango",
      img: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    },
    {
      name: "Himsagar Mango",
      price: "₹900 / dozen",
      desc: "Juicy and fiberless mango",
      img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed",
    },
    {
      name: "Langra Mango",
      price: "₹800 / dozen",
      desc: "Tangy-sweet taste",
      img: "https://media.istockphoto.com/id/463651383/photo/mangoes-composition.jpg?s=2048x2048&w=is&k=20&c=a7Ib7NkufF1nKFd4D-KoBIjxmkhC1XzV22VyuNeCNGI=",
    },
  ];

  return (
    <main className="bg-yellow-50 min-h-screen p-6 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4 text-orange-600">
        Fresh Mangoes 🥭
      </h1>
      <p className="mb-8 text-lg">
        Buy sweet and fresh mangoes directly from farm
      </p>

      {/* Products */}
      <h2 className="text-2xl font-semibold mb-6">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="text-xl font-bold mt-3">{item.name}</h3>
            <p>{item.desc}</p>
            <p className="font-semibold mt-2">{item.price}</p>

            <a
              href="https://wa.me/917858043087"
              target="_blank"
              className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded"
            >
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-600">
        © 2026 Mango Company | Fresh from Farm
      </footer>
    </main>
  );
}
