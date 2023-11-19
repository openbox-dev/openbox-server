import LargeLogo from "../../../assets/logo/large-logo.svg";
import ArrowUpRight from "../../../assets/icon/arrow-up-right.svg";

const socialMediaLinks = {
  Instagram: "/",
  "Twitter / X": "/",
  LinkedIn: "/",
  Discord: "/",
  Twitch: "/",
};

export default function Footer() {
  return (
    <footer className="Footer">
      <div id="topside-footer-container" className="topside-footer-container">
        <div
          id="openbox-address-container"
          className="openbox-address-container"
        >
          <ul id="address-list" className="list">
            <li id="street-number" className="address-list-item">
              27 Bis
            </li>
            <li id="street-name" className="address-list-item">
              Rue du Progrès
            </li>
            <li id="city" className="address-list-item">
              93100 Montreuil
            </li>
            <li id="country" className="address-list-item">
              France
            </li>
          </ul>
        </div>

        <div id="contact-container" className="contact-container">
          <ul id="social-media-list" className="list">
            {Object.entries(socialMediaLinks).map(([socialMedia, links]) => {
              return (
                <li className="social-media list-item">
                  <a href={links}>
                    <span>{socialMedia}</span>
                    <img
                      src={ArrowUpRight}
                      className="arrow-up-right-svg"
                      alt="Arrow Link"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div id="contact-pro-container" className="contact-pro-container">
            <span className="contact-pro-subtitle">Contact Pro</span>
            <p className="mail">openbox@hetic.eu</p>
          </div>
        </div>

        <div id="newsletter-container" className="newsletter-container">
          <label htmlFor="newsletter-input" className="newsletter-label">
            <span>S'abonner à la</span> <span>newsletter</span>
          </label>
          <input
            type="text"
            placeholder="Ton adresse mail"
            id="newsletter-input"
            className="newsletter-input"
          />
        </div>
      </div>

      <div id="coypright-container" className="copyright-container">
        <p className="copyright-text">&copy; 2023 Groupe 7 Studio</p>

        <img src={LargeLogo} className="lg-logo" alt="OpenBox Logo" />
      </div>
    </footer>
  );
}
