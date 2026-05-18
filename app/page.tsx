export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#fff8e1",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "#ff9800" }}>Fresh Mangoes 🥭</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Taste the sweetness of farm-fresh mangoes delivered to your doorstep
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#ff9800",
            border: "none",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Order Now
        </button>
      </section>

      {/* About Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>About Our Mangoes</h2>
        <p style={{ maxWidth: "600px", margin: "auto" }}>
          We provide naturally ripened, chemical-free mangoes directly from
          farms. Our mangoes are handpicked to ensure the best quality and
          taste.
        </p>
      </section>

      {/* Varieties Section */}
      <section
        style={{
          padding: "50px 20px",
          background: "#fff3cd",
          textAlign: "center",
        }}
      >
        <h2>Our Varieties</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {["Alphonso", "Himsagar", "Langra"].map((item) => (
            <div
              key={item}
              style={{
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                width: "200px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item} Mango</h3>
              <p>Sweet & juicy premium quality</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📞 +91 9876543210</p>
        <p>📍 Durgapur, India</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#ff9800",
          color: "#fff",
        }}
      >
        <p>© 2026 Mango Company | All Rights Reserved</p>
      </footer>
    </main>
  );
}
