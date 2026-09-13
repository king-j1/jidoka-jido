import { Link } from "react-router-dom";
import ijfProfile from "../assets/Screenshot from 2026-09-12 13-47-20.png"; // the screenshot you just sent
import heroPoster from "../assets/jidoka ijf.jpg";
import actionImage from "../assets/jidoka1.jpg";
import trainingImage from "../assets/jidoka2.jpg";

export default function About() {
  return (
    <main className="about-page bg-[#f3f0e9] text-[#071111]">
      {/* ================= HERO - IJF VERIFIED ================= */}
      <section className="about-hero">
        <div className="page-width">
          <div className="section-top">
            <span className="section-label">ABOUT / 01</span>
            <span className="section-number">GHANA • IJF MEMBER</span>
          </div>

          <div className="about-hero-grid">
            <div className="about-title">
              <h1>
                GODWIN
                <br />
                <span>GALLEY</span>
              </h1>
              <div className="ijf-badge">
                <img src={ijfProfile} alt="IJF Profile Galley Godwin Ghana" />
                <div>
                  <strong>VERIFIED IJF ATHLETE</strong>
                  <span>Ghana • Age 39 • IJF Members Database</span>
                </div>
              </div>
            </div>

            <div className="about-intro">
              <p className="about-lead">
                Started on the mats in primary school. Became Ghana National Champion.
                Now building the next generation.
              </p>
              <p>
                Godwin Galley is not just a fighter - he is a product of discipline. 
                Over 25+ years on the tatami, from school judo in Ghana to international 
                tournaments across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="journey-section">
        <div className="page-width">
          <div className="journey-grid">
            
            <div className="journey-item">
              <span className="journey-year">EARLY 2000s</span>
              <h3>Primary School Beginnings</h3>
              <p>
                Started training judo in primary school in Ghana. 
                Fell in love with the discipline, respect and technique that judo teaches - 
                long before medals came.
              </p>
            </div>

            <div className="journey-item highlight">
              <span className="journey-year">NATIONAL TITLE</span>
              <h3>Ghana National Champion</h3>
              <p>
                Through relentless work, earned the title of Ghana National Champion. 
                A crown earned on the mat, never given. Representing Ghana with pride, 
                wearing the national colors.
              </p>
              <div className="stat-badge">🇬🇭 NATIONAL CHAMPION</div>
            </div>

            <div className="journey-item">
              <span className="journey-year">WORLD TOUR</span>
              <h3>Tournaments Across The World</h3>
              <p>
                Competed in tournaments across the world, gaining international 
                experience on the IJF circuit. Learning from the best, fighting 
                the best, carrying Ghana on his back.
              </p>
            </div>

            <div className="journey-item">
              <span className="journey-year">NOW</span>
              <h3>Coach & Mentor • IJF Member</h3>
              <p>
                Official IJF member - recognized globally. Has trained many young 
                fighters to become champions themselves. Giving back what the mat gave him.
              </p>
              <div className="stat-badge dark">IJF MEMBER • COACH</div>
            </div>

          </div>

          <div className="about-image-banner">
              <img
              src={heroPoster} 
              alt="Galley Godwin National Champion"
            />
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="impact-section">
        <div className="page-width impact-grid">
          <div className="impact-copy">
            <span className="section-label">02 / LEGACY</span>
            <h2>
              More than a<br />
              <em>fighter.</em>
            </h2>
            <p>
              Godwin's mission goes beyond winning. He has trained many 
              to become fighters, teaching them not just throws and holds, 
              but the values of Judo: respect, courage, and humility.
            </p>
            <ul className="impact-list">
              <li>✓ Started training in Primary School</li>
              <li>✓ Ghana National Champion</li>
              <li>✓ International tournament experience</li>
              <li>✓ Official IJF Member (Verified)</li>
              <li>✓ Coach of next-gen Ghanaian judokas</li>
            </ul>
            <Link to="/contact" className="championship-button dark-button">
              Train with Godwin <span>↗</span>
            </Link>
          </div>
          
          <div className="impact-images">
            <img src={trainingImage} alt="Training" />
            <img src={actionImage} alt="Competition" />
          </div>
        </div>
      </section>

      {/* ================= IJF VERIFICATION CTA ================= */}
      <section className="ijf-cta">
        <div className="page-width">
          <div className="ijf-cta-box">
            <div>
              <h3>Officially recognized by the International Judo Federation</h3>
              <p>Profile: Galley Godwin — Ghana — Listed on IJF.org Members Database</p>
            </div>
            <a href="https://www.ijf.org" target="_blank" rel="noreferrer" className="championship-button">
              View on IJF.org <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}