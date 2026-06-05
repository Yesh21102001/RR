"use client";
import { useEffect, useRef } from "react";
import AboutSection from "./AboutSection";
import Ticker from "./Ticker";
import Categories from "./Cateegories";
import Offlinebanner from "./Offlinebanner";
import Whyus from "./Whyus";
import Visit from "./Visit";
import Ticker1 from "./Ticker1";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Animate text on mount
    const elements = heroRef.current?.querySelectorAll(".animate-in");
    elements?.forEach((el, idx) => {
      el.style.animation = `fadeInUp 0.8s ease-out ${idx * 0.15}s forwards`;
      el.style.opacity = "0";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;600;700&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(47, 196, 178, 0.3); }
          50% { border-color: rgba(47, 196, 178, 0.8); }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, var(--dark) 0%, var(--muted) 50%, var(--dark) 100%);
          overflow: hidden;
          padding-top: 120px;
          padding-bottom: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(47, 196, 178, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(141, 229, 219, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(40, 156, 142, 0.08) 0%, transparent 50%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(47, 196, 178, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47, 196, 178, 0.05) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: slide-in-right 1.5s ease-out;
        }

        .hero-accent-1 {
          position: absolute;
          width: 400px;
          height: 400px;
          border: 2px solid rgba(47, 196, 178, 0.2);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          animation: float 6s ease-in-out infinite;
        }

        .hero-accent-2 {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 2px solid rgba(168, 85, 247, 0.2);
          bottom: -50px;
          left: 10%;
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          height: 100%;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          justify-items: center;
        }

        .hero-text {
          color: var(--white);
          width: 100%;
          text-align: left;
        }

        .hero-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -2px;
          background: linear-gradient(135deg, var(--white) 0%, var(--t500) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-family: 'Outfit', sans-serif;
          font-size: 1.125rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          font-family: 'Outfit', sans-serif;
          padding: 16px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--t500) 0%, var(--t700) 100%);
          color: var(--white);
          box-shadow: 0 10px 30px rgba(47, 196, 178, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(47, 196, 178, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid rgba(47, 196, 178, 0.5);
        }

        .btn-secondary:hover {
          background: rgba(47, 196, 178, 0.1);
          border-color: var(--t500);
        }

        .hero-features {
          display: flex;
          gap: 30px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(47, 196, 178, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--t500);
          font-weight: 700;
        }

        .feature-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-box {
          width: 90%;
          height: 90%;
          background: linear-gradient(135deg, rgba(47, 196, 178, 0.12) 0%, rgba(141, 229, 219, 0.08) 100%);
          border: 2px solid rgba(47, 196, 178, 0.4);
          border-radius: 30px;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slide-in-right 1s ease-out;
        }

        .visual-content {
          text-align: center;
          padding: 40px;
        }

        .visual-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: var(--t500);
          margin-bottom: 15px;
        }

        .visual-content p {
          font-family: 'Outfit', sans-serif;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }

        .stat {
          background: rgba(47, 196, 178, 0.08);
          padding: 20px;
          border-radius: 15px;
          border-left: 3px solid var(--t500);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: var(--t500);
          font-weight: 700;
        }

        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0 24px;
            justify-items: stretch;
          }

          .hero-text {
            text-align: left;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1rem;
          }

          .hero-visual {
            height: 350px;
            width: 100%;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }

          .hero-features {
            flex-direction: column;
          }

          .hero-accent-1,
          .hero-accent-2 {
            opacity: 0.5;
          }
        }
      `}</style>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background"></div>
        <div className="hero-grid"></div>
        <div className="hero-accent-1"></div>
        <div className="hero-accent-2"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-in">Discover Premium Shopping</h1>
            <p className="animate-in">
              Welcome to RR Bros – where excellence meets convenience. Explore an unparalleled selection of premium brands, exclusive collections, and unforgettable shopping experiences.
            </p>

            <div className="hero-buttons animate-in">
              <button className="btn btn-primary">Visit Us Today</button>
              <button className="btn btn-secondary">Explore Collections</button>
            </div>

            <div className="hero-features animate-in">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Premium Brands</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Exclusive Deals</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Best Experience</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-box">
              <div className="visual-content">
                <h3>Welcome to RR Bros</h3>
                <p>Your Premier Shopping Destination</p>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Brands</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">1M+</div>
                    <div className="stat-label">Happy Customers</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50k+</div>
                    <div className="stat-label">Products</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Open Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <Ticker />
      <Categories />
      <Offlinebanner />
      <Ticker1 />
      <Whyus />
      <Visit />
    </>
  );
}