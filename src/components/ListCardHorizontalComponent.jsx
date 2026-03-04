import React from "react";
import { Container, Button } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";

const HorizontalList = ({ title, datas, linkTo }) => {
  return (
    <Container className="my-4 px-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-white mb-0" style={{ borderLeft: '3px solid #0d6efd', paddingLeft: '10px' }}>
          {title}
        </h5>
        <Link to={linkTo} className="text-primary text-decoration-none small fw-bold">
          LIHAT SEMUA
        </Link>
      </div>

      <div className="horizontal-scroll-wrapper">
        {datas.map((anime) => (
          <div key={anime.id} className="horizontal-item">
            <CardComponent 
              id={anime.id} 
              title={anime.title} 
              img={anime.image} 
            />
          </div>
        ))}
      </div>

      <style>{`
        .horizontal-scroll-wrapper {
          display: flex;
          overflow-x: auto;
          gap: 10px;
          padding-bottom: 10px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        /* DESKTOP */
        .horizontal-item {
          flex: 0 0 auto;
          width: 180px;
        }

        /* MOBILE (Target 4-5 Kartu) */
        @media (max-width: 576px) {
          .horizontal-item {
            /* 20% dari lebar layar agar muat 5 kartu jika mepet, 
               atau 4 kartu dengan sisa ruang untuk margin */
            width: 20vw; 
            min-width: 75px; 
          }

          /* Maksimalkan tampilan gambar */
          .horizontal-item img {
            height: 110px !important;
            object-fit: cover;
            border-radius: 4px !important;
          }

          /* Sembunyikan body kartu jika dirasa terlalu memakan tempat, 
             atau buat teksnya sangat minimalis */
          .horizontal-item .card-body {
            padding: 4px 0 !important;
          }

          .horizontal-item .card-title {
            font-size: 0.5rem !important;
            line-height: 0.7rem !important;
            height: 1.4rem !important;
            margin-bottom: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Sembunyikan rating di mobile agar fokus ke poster */
          .horizontal-item .badge {
            display: none !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default HorizontalList;
