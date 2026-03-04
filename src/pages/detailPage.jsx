import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../services/animeApi";
import NavbarComponent from "../components/navBarComponent";
import NotFoundPage from "./NotFoundPage";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAnimeById(id);
        setAnimeData(fetchedData);
      } catch (err) {
        setError("Failed to fetch anime data");
      }
    };
    fetchData();
  }, [id]);

  // Menangani error dan memastikan animeData sudah ada sebelum merender
  if (error) {
    return <div>{error}</div>;
  }

  if (!animeData) {
    return <><NotFoundPage /></>
  }
  // Memastikan animeData sudah ada dan genres adalah array
  if (!animeData || !animeData.image) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavbarComponent />
      <Container className="mt-5 p-4 bg-dark text-white rounded shadow-sm">
        <Row>
          {/* Kolom Kiri: Poster */}
          <Col md={4} className="mb-4">
            <Card bg="dark" className="border-0 shadow text-white">
              <Card.Img
                variant="top"
                src={animeData.image}
                alt={animeData.title}
              />
              <Card.Body className="text-center">
                <Button variant="primary" className="w-100 mb-2">Tambah ke Watchlist</Button>
                <div className="d-flex justify-content-around mt-3">
                  <div className="text-center">
                    <h5 className="mb-0">⭐ {animeData.score}</h5>
                    <small className="text-white">Rating</small>
                  </div>
                  <div className="text-center">
                    <h5 className="mb-0">{animeData.episodes}</h5>
                    <small className="text-white">Episodes</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Kolom Kanan: Informasi Detail */}
          <Col md={8}>
            <div className="mb-3">
              <h1 className="fw-bold">{animeData.title}</h1>
              <h5 className="text-secondary italic">
                {animeData.title_english}
              </h5>
            </div>

            <div className="mb-4">
              {/* Pastikan animeData.genres adalah array */}
              {Array.isArray(animeData.genres) ? (
                animeData.genres.map((genre) => (
                  <Badge
                    key={genre.mal_id}
                    bg="info"
                    className="me-2 px-3 py-2 text-dark"
                  >
                    {genre.name}
                  </Badge>
                ))
              ) : (
                <span>No genres available</span> // Placeholder jika genres tidak ada
              )}
              <Badge bg="success" className="px-3 py-2 ">
                {animeData.status}
              </Badge>
            </div>

            <hr />

            <div className="mt-4">
              <h4 className="fw-bold">Sinopsis</h4>
              <p className="lh-lg text-white" style={{ textAlign: "justify" }}>
                {animeData.synopsis}
              </p>
            </div>

            <Row className="mt-4 g-2">
              <Col sm={6}>
                <strong>Tipe:</strong> {animeData.type}
              </Col>
              <Col sm={6}>
                <strong>Studio:</strong> {animeData.studio || "Unknown"}
              </Col>
              <Col sm={6}>
                <strong>Musim:</strong> {animeData.season || "Unknown"}
              </Col>
              <Col sm={6}>
                <strong>Durasi:</strong> {animeData.duration || "Unknown"}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AnimeDetailPage;
