import { Link } from "react-router-dom";

import heroImage from "../assets/jidoka ijf.jpg";
//import heroImage from "../assets/WhatsApp Image 2026-09-10 at 1.23.23 PM.jpeg";
import podiumImage from "../assets/jidoka1.jpg";
import ijfLogo from "../assets/WhatsApp Image 2026-09-10 at 1.21.58 PM.jpeg";
import trainingImage from "../assets/jidoka2.jpg";
import actionImage from "../assets/jidoka cert.jpg";

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="championship-hero">
        <img
          src={heroImage}
          alt="Galley Godwin wearing a blue judogi"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-grid" />

        <div className="page-width hero-content">
          <div className="hero-top">
            <div className="hero-number">
              <span>01</span>
              <span>JUDO / GHANA</span>
            </div>

            <div className="hero-status">
              <span className="status-dot" />
              Championship Athlete
            </div>
          </div>

          <div className="hero-main">
            <div className="hero-kicker">
              <span />
              INTERNATIONAL JUDO
              <span />
              CHAMPIONSHIP SERIES
            </div>

            <h1>
              GALLEY
              <br />
              <span>GODWIN</span>
            </h1>

            <div className="hero-bottom">
              <p>
                Strength is built in silence.
                <br />
                Champions reveal it when it matters.
              </p>

              <div className="hero-actions">
                <Link to="/about" className="championship-button">
                  Discover the athlete
                  <span>↗</span>
                </Link>

                <a href="#championship" className="hero-scroll">
                  Scroll to explore
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <div className="hero-location">
              <strong>ACC</strong>
              <span>Accra, Ghana</span>
            </div>

            <div className="hero-ijf">
              <img
                src={ijfLogo}
                alt="International Judo Federation emblem"
              />

              <div>
                <strong>IJF</strong>
                <span>Judo Federation</span>
              </div>
            </div>

            <div className="hero-year">
              <span>SEASON</span>
              <strong>2026</strong>
            </div>
          </div>
        </div>

        <div className="hero-side-text">
          DISCIPLINE / RESPECT / COURAGE / EXCELLENCE
        </div>
      </section>

      {/* ================= CHAMPIONSHIP INTRO ================= */}
      <section className="championship-intro" id="championship">
        <div className="page-width">
          <div className="section-top">
            <span className="section-label">02 / THE CHAMPIONSHIP</span>
            <span className="section-number">001 — 004</span>
          </div>

          <div className="intro-grid">
            <h2>
              Born for
              <br />
              <em>the mat.</em>
            </h2>

            <div className="intro-copy">
              <p className="intro-lead">
                Judo is not simply about winning a fight. It is about
                becoming stronger than the person you were yesterday.
              </p>

              <p>
                Galley Godwin represents a generation of Ghanaian judoka
                driven by discipline, technical excellence, courage and
                respect for the art.
              </p>

              <Link to="/about" className="line-link">
                Explore the journey
                <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="championship-stats">
            <div>
              <strong>01</strong>
              <span>IJF Athlete</span>
            </div>

            <div>
              <strong>GH</strong>
              <span>Representing Ghana</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Years of discipline</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Never stop improving</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPETITION GALLERY ================= */}
      <section className="competition-section">
        <div className="page-width">
          <div className="section-top">
            <span className="section-label">03 / COMPETITION</span>

            <p className="section-statement">
              Pressure creates
              <br />
              <em>performance.</em>
            </p>
          </div>

          <div className="competition-grid">
            <figure className="competition-large">
              <img
                src={podiumImage}
                alt="Galley Godwin receiving a medal"
              />

              <figcaption>
                <span>01</span>
                The podium
              </figcaption>
            </figure>

           {/*<figure className="competition-small competition-top">
              <img
                src={medalImage}
                alt="Galley Godwin celebrating with a medal"
              /> 

              <figcaption>
                <span>02</span>
                The reward
              </figcaption>
            </figure>*/}

            <div className="competition-message">
              <span className="message-number"></span>

              <h3>
                Earned.
                <br />
                <em>Never given.</em>
              </h3>

              <p>
                Every medal represents countless hours of preparation,
                sacrifice and commitment to the craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINING ================= */}
      <section className="training-section">
        <div className="page-width training-grid">
          <div className="training-copy">
            <span className="section-label">04 / THE WORK</span>

            <h2>
              Train
              <br />
              with <em>purpose.</em>
            </h2>

            <p>
              Champions are not created on competition day. They are
              created through repetition, discipline and the willingness
              to keep showing up.
            </p>

            <Link to="/contact" className="championship-button dark-button">
              Work with Galley
              <span>↗</span>
            </Link>
          </div>

          <div className="training-image">
            <img
              src={trainingImage}
              alt="Judo athletes training together"
            />

            <div className="image-tag">
              <span>TRAINING CAMP</span>
              <strong>GHANA / </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CHAMPIONSHIP CTA ================= */}
      <section className="final-championship">
        <img
          src={actionImage}
          alt="Judo athletes competing"
          className="final-image"
        />

        <div className="final-overlay" />

        <div className="page-width final-content">
          <span className="section-label light-label">
            THE NEXT CHALLENGE
          </span>

          <h2>
            READY
            <br />
            <em>WHEN IT MATTERS.</em>
          </h2>

          <p>
            Competition. Coaching. Collaboration.
            <br />
            Let's build the next chapter.
          </p>

          <Link to="/contact" className="championship-button">
            Start a conversation
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}