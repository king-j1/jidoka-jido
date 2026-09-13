import { MessageCircle, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: "Instagram",
    short: "IG",
    href: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    short: "FB",
    href: "https://www.facebook.com/",
  },
  {
    name: "YouTube",
    short: "YT",
    href: "https://www.youtube.com/",
  },
  {
    name: "TikTok",
    short: "TK",
    href: "https://www.tiktok.com/",
  },
  {
    name: "X",
    short: "X",
    href: "https://x.com/",
  },
  {
    name: "LinkedIn",
    short: "IN",
    href: "https://www.linkedin.com/",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">

        {/* TOP */}
        <div className="footer-top">

          <div>
            <p className="footer-kicker">
              JUDO / GHANA / WORLD
            </p>

            <h2 className="footer-title">
              Stay
              <br />
              <span>connected.</span>
            </h2>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-social">

            <p className="footer-social-label">
              Follow the journey
            </p>

            <div className="social-grid">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Galley Godwin on ${social.name}`}
                >
                  <span className="social-short">
                    {social.short}
                  </span>

                  <span className="social-name">
                    {social.name}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="social-arrow"
                  />
                </a>
              ))}

              {/* WHATSAPP */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Contact Galley Godwin on WhatsApp"
              >
                <MessageCircle
                  size={19}
                  strokeWidth={1.6}
                />

                <span className="social-name">
                  WhatsApp
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="social-arrow"
                />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <div className="footer-brand">
            <span className="footer-logo">
              GG<span>.</span>
            </span>

            <span>
              Galley Godwin
              <br />
              Professional Judoka
            </span>
          </div>

          <div className="footer-motto">
            <span>DISCIPLINE</span>
            <span>RESPECT</span>
            <span>COURAGE</span>
            <span>EXCELLENCE</span>
          </div>

          <div className="footer-location">
            <strong>GHANA</strong>
            <span>Worldwide</span>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright">

          <span>
            © 2026 Galley Godwin
          </span>

          <span>
            Judo / Championship / Growth
          </span>

          <span>
            All rights reserved
          </span>

        </div>

      </div>
    </footer>
  );
}
