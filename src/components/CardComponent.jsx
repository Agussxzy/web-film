import { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent({ img, title, id, rating }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={`/anime/${id}`} style={{ textDecoration: 'none' }}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border-0 shadow-lg position-relative overflow-hidden text-white"
        style={{
          width: "100%", // Biarkan Grid yang mengatur lebar
          maxWidth: "220px",
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          transform: hovered ? "translateY(-10px)" : "translateY(0)",
          boxShadow: hovered ? "0 10px 20px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Rating Badge (Opsional jika ada data) */}
        {rating && (
          <Badge 
            bg="warning" 
            className="position-absolute text-dark fw-bold" 
            style={{ top: '10px', left: '10px', zIndex: 2, fontSize: '0.8rem' }}
          >
            ⭐ {rating}
          </Badge>
        )}

        {/* Image Container dengan Aspect Ratio */}
        <div style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
          <Card.Img
            variant="top"
            src={img}
            style={{
              height: "300px",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </div>

        <Card.Body className="p-2 pt-3">
          <Card.Title
            className="fs-6 fw-semibold text-center mb-0"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2", // Menampilkan maks 2 baris teks
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: "2.8rem", // Menjaga tinggi tetap konsisten
              lineHeight: "1.4rem",
            }}
          >
            {title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardComponent;