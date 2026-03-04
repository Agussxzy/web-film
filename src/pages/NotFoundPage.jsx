import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center vh-100" 
      style={{ backgroundColor: '#121212', color: '#fff' }}
    >
      <div className="text-center fade-in">
        {/* Ikon atau Ilustrasi */}
        <div className="position-relative mb-4">
          <h1 
            style={{ 
              fontSize: '10rem', 
              fontWeight: '900', 
              opacity: '0.1',
              lineHeight: '1'
            }}
          >
            404
          </h1>
          <div 
            className="position-absolute top-50 start-50 translate-middle w-100"
            style={{ marginTop: '10px' }}
          >
            <Ghost size={100} className="text-primary mb-3 animate-bounce" />
            <h2 className="fw-bold">Opsi Sihir Tidak Ditemukan</h2>
          </div>
        </div>

        {/* Pesan Error */}
        <div className="mt-5">
          <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '500px' }}>
            Sepertinya kamu tersesat di dimensi lain. Halaman yang kamu cari telah 
            dihapus oleh iblis atau memang tidak pernah ada sejak awal.
          </p>
        </div>

        {/* Tombol Navigasi */}
        <div className="d-flex gap-3 justify-content-center mt-4">
          <Button 
            as={Link} 
            to="/" 
            variant="primary" 
            className="px-4 py-2 rounded-pill d-flex align-items-center gap-2 shadow-sm"
          >
            <Home size={18} /> Kembali ke Home
          </Button>
          
          <Button 
            onClick={() => window.history.back()} 
            variant="outline-secondary" 
            className="px-4 py-2 rounded-pill d-flex align-items-center gap-2 text-white"
          >
            <ArrowLeft size={18} /> Sebelumnya
          </Button>
        </div>

        {/* Dekorasi Tambahan */}
        <p className="mt-5 text-muted small italic">
          "Bahkan penyihir sehebat Frieren pun bisa salah jalan..."
        </p>
      </div>

      <style>{`
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </Container>
  );
};

export default NotFoundPage;