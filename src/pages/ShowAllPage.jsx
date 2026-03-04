import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import { getTopAnime } from '../services/animeApi'; // Asumsi fungsi fetch kamu

const ShowAllPage = () => {
  const [listAnime, setListAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getTopAnime();
      setListAnime(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', paddingTop: '100px' }}>
      <Container>
        {/* Header Halaman */}
        <div className="mb-5 border-bottom border-secondary pb-3 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold text-white mb-0">Semua Anime Terpopuler</h2>
            <p className="text-secondary mb-0">Menampilkan daftar lengkap anime trending</p>
          </div>
          <div className="text-primary fw-bold">
            {listAnime.length} Titles
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          /* Grid Tampilan Utama */
          <Row className="g-4">
            {listAnime.map((anime) => (
              <Col key={anime.mal_id} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                <CardComponent 
                  id={anime.id} 
                  title={anime.title} 
                  img={anime.image}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ShowAllPage;