import React from "react";
import "../Css/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_wrapper">
          <div className="footer_oneside">
            <Link className="footer_oneside-logo" to="https://www.moburst.com">
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/03/logo.png"
                alt="logo moburst"
              />
            </Link>
            <div className="contact_info">
              <div className="footer_place">
                <span className="footer_place-title">NYC</span>
                <span className="footer_place-address">
                  149 5th Avenue, New York
                  <br /> +1 (408) 412-3472
                </span>
              </div>
              <div className="footer_place">
                <span className="footer_place-title">SFO</span>
                <span className="footer_place-address">
                  600 California Street
                  <br /> +1 (408) 412-3472
                </span>
              </div>
              <div className="footer_place">
                <span className="footer_place-title">TLV</span>
                <span className="footer_place-address">
                  Rapaport 3, Kfar Saba
                  <br /> +972-3-9150982
                </span>
              </div>
              <div className="footer_place">
                <span className="footer_place-title">LDN</span>
                <span className="footer_place-address">
                  7 Bell Yard, London <br />
                  WC2A 2JR
                </span>
              </div>
            </div>
          </div>
          <div className="footer_anotherside">
            <Link
              to="https://www.facebook.com/moburstmobilemarketing/"
              target="_blank"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg fill="none" fill-rule="evenodd">
                  <path
                    d="M25 13c0 6.628-5.372 12-12 12S1 19.628 1 13 6.372 1 13 1s12 5.372 12 12z"
                    stroke="#FFF"
                    stroke-width="1.978"
                  />
                  <path
                    d="M8.46 16.243h2.594v8.585c.636.104 1.282.172 1.946.172.664 0 1.31-.068 1.946-.172v-8.585h2.351a.648.648 0 0 0 .644-.567l.243-1.946a.654.654 0 0 0-.157-.51.645.645 0 0 0-.486-.22h-2.595v-2.27a1.3 1.3 0 0 1 1.297-1.298h1.298a.648.648 0 0 0 .648-.648v-2.19a.648.648 0 0 0-.59-.646c-.038-.002-.953-.083-2.11-.083-2.861 0-4.435 1.698-4.435 4.779V13H8.46a.648.648 0 0 0-.648.649v1.946c0 .36.291.648.648.648z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </svg>
              </svg>
            </Link>
            <Link
              to="https://www.youtube.com/c/MoburstMarketing/videos"
              target="_blank"
            >
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg
                  stroke="#FFF"
                  stroke-width="1.978"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                >
                  <path d="M14.405 1c-4.134 0-8.018.307-10.087.737-1.376.307-2.567 1.229-2.816 2.641C1.252 5.852 1 7.736 1 10.5s.252 4.586.563 6.122c.252 1.351 1.44 2.334 2.82 2.64 2.191.43 5.952.738 10.086.738s7.892-.307 10.087-.737c1.376-.307 2.567-1.229 2.819-2.641.25-1.536.563-3.42.625-6.183 0-2.764-.314-4.648-.625-6.184-.252-1.35-1.443-2.334-2.82-2.64C22.362 1.306 18.542 1 14.406 1z" />
                  <path d="m12.854 14.257 5.26-2.956a1.29 1.29 0 0 0 0-2.257l-5.26-2.956c-.88-.494-1.976.13-1.976 1.126v5.917c0 .995 1.096 1.623 1.976 1.126z" />
                </svg>
              </svg>
            </Link>
            <Link to="https://twitter.com/Moburst" target="_blank">
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M27.812 3.17a.676.676 0 0 0-.758-.14l-.11.049a9.136 9.136 0 0 1-.278.125c.27-.426.487-.88.635-1.352a.65.65 0 0 0-.226-.713.672.672 0 0 0-.756-.043c-1.049.628-2.038 1.018-3.117 1.23l-.523.088c1.404 1.016 2.32 2.65 2.32 4.497 0 .085-.005.172-.005.257l.099-.08c2.083-1.711 2.805-3.11 2.836-3.165a.647.647 0 0 0-.117-.752z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                  <path
                    d="M19.333 1.33c-3.13 0-5.667 2.498-5.667 5.581v.985C5.54 7.468 3.333 1.986 3.333 1.986s-1 1.313-1 3.283C2.333 8.553 5 9.866 5 9.866c-2 0-3.333-.657-3.333-.657S2 12.821 6.333 14.463l-2.666.657S5 17.418 9 18.403c0 0-2.334 1.97-8 1.97C1 20.373 3.333 23 9.666 23 20.666 23 25 12.821 25 6.911c0-3.083-2.536-5.582-5.666-5.582z"
                    stroke="#FFF"
                    stroke-width="1.978"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Link>
            <Link to="https://www.linkedin.com/company/moburst" target="_blank">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M20.333 23H3.667A2.665 2.665 0 0 1 1 20.333V3.667A2.665 2.665 0 0 1 3.667 1h16.666A2.665 2.665 0 0 1 23 3.667v16.666A2.665 2.665 0 0 1 20.333 23z"
                    stroke="#FFF"
                    stroke-width="1.978"
                  />
                  <path
                    d="M8 6.333C8 7.253 7.253 8 6.333 8c-.919 0-1.666-.747-1.666-1.667 0-.919.747-1.666 1.666-1.666.92 0 1.667.747 1.667 1.666zM7.333 19.333h-2a.665.665 0 0 1-.666-.666V10c0-.37.297-.667.666-.667h2c.37 0 .667.297.667.667v8.667c0 .37-.297.666-.667.666zM15.333 9.333a3.98 3.98 0 0 0-2.666 1.026V10A.665.665 0 0 0 12 9.333h-2a.665.665 0 0 0-.667.667v8.667c0 .37.297.666.667.666h2c.37 0 .667-.297.667-.666v-5c0-.92.747-1.667 1.666-1.667.92 0 1.667.747 1.667 1.667v5c0 .37.297.666.667.666h2c.37 0 .666-.297.666-.666v-5.334c0-2.205-1.794-4-4-4z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/moburst.agency/"
              target="_blank"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="footer_menu">
          <ul id className="navbar-nav flex-column text-sm-center text-md-left">
            <li className="menu-items">
              <Link
                title="marketing strategy"
                to="https://www.moburst.com/services/marketing-strategy/"
              >
                <h5>Marketing Strategy</h5>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100333">
                  <Link to="https://www.moburst.com/services/marketing-strategy/mobile-marketing-strategy/">
                    <span>Mobile Strategy</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100346">
                  <Link to="https://www.moburst.com/services/marketing-strategy/digital-strategy/">
                    <span>Digital Strategy</span>
                  </Link>
                </li>
                <li className="app menu-item menu-item-type-custom menu-item-object-custom menu-item-180">
                  <Link to="https://www.moburst.com/services/marketing-strategy/social-strategy/">
                    <span>Social Strategy</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-181">
                  <Link to="https://www.moburst.com/services/marketing-strategy/product-strategy/">
                    <span>Product Strategy</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-182">
                  <Link to="https://www.moburst.com/services/marketing-strategy/analytics-bi/">
                    <span>BI &#038; Analytics</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-items">
              <Link
                title="organic awarness"
                to="https://www.moburst.com/services/organic/"
              >
                <h5>Organic Awareness</h5>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100714">
                  <Link to="https://www.moburst.com/services/organic/seo/">
                    <span>SEO</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-183">
                  <Link to="https://www.moburst.com/services/organic/aso/">
                    <span>ASO (App Store Optimization)</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-184">
                  <Link to="https://www.moburst.com/services/organic/cro/">
                    <span>CRO (Conversion Rate Optimization)</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-185">
                  <Link to="https://www.moburst.com/services/organic/aso-localization/">
                    <span>Localizations</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-items">
              <Link
                title="creative content"
                to="https://www.moburst.com/services/creative-content/"
              >
                <h5>Creative &#038; Content</h5>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100567">
                  <Link to="https://www.moburst.com/services/creative/campaign-concept-design/">
                    <span>Concept &#038; Design</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-186">
                  <Link to="https://www.moburst.com/services/creative/video-production/">
                    <span>Video Production</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-187">
                  <Link to="https://www.moburst.com/services/creative/social-media-management/">
                    <span>Social Media Management</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-188">
                  <Link to="https://www.moburst.com/services/creative/app-store-assets/">
                    <span>App Store Assets</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189">
                  <Link to="https://www.moburst.com/services/creative/user-generated-content/">
                    <span>UGC (User-Generated Content)</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-items">
              <Link
                title="media buying"
                to="https://www.moburst.com/services/media-buying/"
              >
                <h5>Media Buying</h5>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100791">
                  <Link to="https://www.moburst.com/services/media-buying/social-search/">
                    <span>Social Search</span>
                  </Link>
                </li>
                <li className="digital menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                  <Link to="https://www.moburst.com/services/media-buying/networks-rtbs/">
                    <span>Networks &#038; RTBs</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-191">
                  <Link to="https://www.moburst.com/services/media-buying/influencer-marketing/">
                    <span>Influencer Marketing</span>
                  </Link>
                </li>
                <li className="app menu-item menu-item-type-custom menu-item-object-custom menu-item-192">
                  <Link to="https://www.moburst.com/services/media-buying/email-marketing/">
                    <span>Email Marketing</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-193">
                  <Link to="https://www.moburst.com/services/media-buying/ott-marketing/">
                    <span>OTT Advertising</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-items" id="last">
              <Link
                title="product dev"
                to="https://www.moburst.com/services/product-dev/"
              >
                <h5>Product &#038; Dev</h5>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-100455">
                  <Link to="https://www.moburst.com/services/product/consulting/">
                    <span>Product Consulting</span>
                  </Link>
                </li>
                <li className="app menu-item menu-item-type-custom menu-item-object-custom menu-item-194">
                  <Link to="https://www.moburst.com/services/product/ui-ux/">
                    <span>UI/UX</span>
                  </Link>
                </li>
                <li className="app menu-item menu-item-type-custom menu-item-object-custom menu-item-195">
                  <Link to="https://www.moburst.com/services/product/web-development/">
                    <span>Website Development</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-196">
                  <Link
                    title="digital"
                    to="https://www.moburst.com/services/product/digital-transformation/"
                  >
                    <span>Digital Transformation</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-106792">
                  <Link to="https://www.moburst.com/services/app-development-design-service">
                    <span>App Development</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>{" "}
          <div className="footer_menu-form" id="newsletterForm">
            <div
              className="gf_browser_unknown gform_wrapper gravity-theme gform-theme--no-framework gform_wrapper gravity-theme gform-theme--no-framework_original_id_6"
              data-form-theme="gravity-theme"
              data-form-index="0"
              id="gform_wrapper_2123489895"
            >
              <div
                id="gf_2123489895"
                className="gform_anchor"
                tabindex="-1"
              ></div>
              <div className="gform_heading">
                <h2 className="gform_title">Newsletter</h2>
                <p className="gform_description">
                  Be the first to know about the latest Digital & Mobile
                  Marketing news, special events and much more.
                </p>
              </div>
              <form>
                <div className="subscription_form">
                  <input
                    className="input"
                    placeholder="Type your text"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>

                <button className="subscription_button">
                  <span>BUTTON</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer_desktop">
          <span className="footer_desktop-rights">© All Rights Reserved</span>
          <div className="footer_desktop-links">
            <Link
              className="footer_desktop-link"
              to="https://www.moburst.com/privacy-policy/"
            >
              Privacy Policy
            </Link>
            <Link
              className="footer_desktop-link"
              to="https://www.moburst.com/terms-of-service/"
            >
              Terms of Service
            </Link>
            <Link
              className="footer_desktop-link"
              to="https://www.moburst.com/accessibility-arrangements/"
            >
              Accessibility Arrangements
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
