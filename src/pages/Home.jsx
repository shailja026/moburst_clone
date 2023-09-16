import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styels from "../Css/home.module.css";
import bg from "../assets/backgraound.mp4";
import leaderVideo from "../assets/advertisement.mp4";
import infinity_loop from "../assets/Infinty-Loop-Desktop-2.mp4";
import "../Css/home.css";
import Form from "../components/Form";
import Footer from "../components/Footer";
function Home() {
  return (
    <div classNameName={StyleSheet.HomePage}>
      <Navbar />
      {/* background video */}
      <div className={styels.videos}>
        <video autoPlay loop muted src={bg} />
        <div className={styels.slider}>
          <div className={styels.slider_track}>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Uber.png"
                alt=""
              />
            </div>

            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Deezer.png"
                alt=""
              />
            </div>

            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Dunkin.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Google.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2023/06/new-day.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Nielsen.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/NYFW-1.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Pfizer.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Playtika-2.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Reddit-1.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Samsung.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Playtika-2.png"
                alt=""
              />
            </div>

            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Uber.png"
                alt=""
              />
            </div>

            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Deezer.png"
                alt=""
              />
            </div>

            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Dunkin.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Google.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2023/06/new-day.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Nielsen.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/NYFW-1.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Pfizer.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Playtika-2.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Reddit-1.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Samsung.png"
                alt=""
              />
            </div>
            <div className={styels.slide}>
              <img
                src="https://www.moburst.com/wp-content/uploads/2022/05/Playtika-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styels.progress}>
          <h3>Ready to experience hypergrowth? Let's talk!</h3>
          <button className={styels.btn}>I WANT TO GROW</button>
        </div>
      </div>
      {/* partners slide */}
      <div className={styels.leader_section}>
        <div className={styels.leader_content}>
          <h1>How to become your category leader</h1>
          <p>
            Own your category, and blast off with hypergrowth. We’ve helped the
            world’s best and biggest companies exceed their KPIs – and we can
            help you do the same.
          </p>
          <video src={leaderVideo} autoPlay loop muted />
          {/* <div className={styels.loader}></div> */}
          <h3>Ready to experience hypergrowth? Let's talk!</h3>
          <button className={styels.btn}> I WANT TO GROW</button>
        </div>
      </div>

      {/* infinity section */}

      <div className={styels.infinity_Section}>
        <div className={styels.infinity_content}>
          <h1>Mobile-First Digital Marketing Agency</h1>
          <p>We help companies to scale and become category leaders.</p>
          <video src={infinity_loop} autoPlay loop muted />
          <h3>Ready to experience hypergrowth? Lets Talk!</h3>
          <button className={styels.btn}>I WANT TO GROW</button>
        </div>
      </div>

      {/* why section */}
      <div className="why">
        <div className="why_content">
          <h2 className="why_title_hide">
            <span className="animation-wrapper">
              <span className="letters">Why choose Moburst</span>
            </span>
          </h2>
          <div className="why_description">
            Every day, our team’s mission is to innovate creative solutions,
            connecting brands with highly targeted audiences that convert into
            loyal users.
          </div>
        </div>
        <div className="why_info">
          <div className="swiper_whySwiper">
            <div className="swiper-wrapperDown">
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-1.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">GROWTH</h3>
                <div className="whySwiper_description">
                  We’re all about hitting your KPIs. That means no fluff, no
                  excuses. Ever.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-3.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">RESULTS</h3>
                <div className="whySwiper_description">
                  Everything we do is based on real-time data. Measurable, and
                  fully transparent.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-2.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">EXPERIENCE</h3>
                <div className="whySwiper_description">
                  After working with 600+ products, our experts know what it
                  takes.
                </div>
              </div>

              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-1.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">GROWTH</h3>
                <div className="whySwiper_description">
                  We’re all about hitting your KPIs. That means no fluff, no
                  excuses. Ever.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-3.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">RESULTS</h3>
                <div className="whySwiper_description">
                  Everything we do is based on real-time data. Measurable, and
                  fully transparent.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-2.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">EXPERIENCE</h3>
                <div className="whySwiper_description">
                  After working with 600+ products, our experts know what it
                  takes.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-1.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">GROWTH</h3>
                <div className="whySwiper_description">
                  We’re all about hitting your KPIs. That means no fluff, no
                  excuses. Ever.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-3.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">RESULTS</h3>
                <div className="whySwiper_description">
                  Everything we do is based on real-time data. Measurable, and
                  fully transparent.
                </div>
              </div>
              <div className="swiper-slideTwo">
                <div className="whySwiper_container">
                  <img
                    className="whySwiper_image"
                    src="https://www.moburst.com/wp-content/uploads/2022/03/icons-2.svg"
                    alt="icons"
                  />
                </div>
                <h3 className="whySwiper_title">EXPERIENCE</h3>
                <div className="whySwiper_description">
                  After working with 600+ products, our experts know what it
                  takes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* learning section */}

      {/* llllllllllllllllllllllll */}
      {/* growth section */}
      <div className="growth_contianer">
        <h1> Growth results</h1>
        <div className="swiper-wrapper">
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/04/samsung-logo-transparent-9.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">1400</span>%
            </div>
            <div className="growth_single-description">
              Learn how we helped Samsung achieve astronomical success including
              a campaign that took home an international award!
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/samsung/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Discovert_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">27</span>%
            </div>
            <div className="growth_single-description">
              The Discovery Network sought our assistance in promoting their
              portfolio of name-brand apps. We delivered Link higher conversion
              ratio at the lowest cost per download.
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/discovery/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Reddit_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">90</span>%
            </div>
            <div className="growth_single-description">
              Discover how we were able to assist Reddit in gaining more app
              exposure, particularly with conversion optimization and highly
              competitive keywords and phrases.
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/reddit/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Reflectly_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">40</span>%
            </div>
            <div className="growth_single-description">
              Discover how we established Link high-value keyword base to enable
              Reflect.ly's growth and succeeded in lowering in-app event
              costs--all within just two months.
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/reflect-ly/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Pink_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">20</span>%
            </div>
            <div className="growth_single-description">
              By employing Link hyper-targeted user acquisition strategy, Pink
              Park experienced Link 20% surge in monthly ROI
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/pink-park/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Titanbet_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">60</span>%
            </div>
            <div className="growth_single-description">
              Boosting app discoverability and install rates through vigorous
              optimization of app store page components
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/titanbet/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Gameit_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">391</span>%
            </div>
            <div className="growth_single-description">
              Moburst has managed to bring gameit to Link #1 ranking for Link
              line of significant keywords and phrases in its field
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/gameit/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Pango_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">50</span>%
            </div>
            <div className="growth_single-description">
              More than 100 highly targeted, personalized ads were used to
              acquire users who would not only install the app, but also
              complete the registration process and use the app to pay for
              parking
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/pango/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Vodio_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">560</span>%
            </div>
            <div className="growth_single-description">
              Vodio’s daily download volume increased by 560%
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/vodio/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Calm_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">36</span>%
            </div>
            <div className="growth_single-description">
              Moburst helped Calm optimize their app store presence components
              and app ranking mechanism to achieve maximum visibility in
              category rankings and search results
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/calm/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Say_White_Logo-1.png-1.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">60</span>%
            </div>
            <div className="growth_single-description">
              Learn how Moburst helped Say launch with tens of thousands of
              active users in just 3 months!
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/say/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Mailwise_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">70</span>%
            </div>
            <div className="growth_single-description">
              An ongoing process of app store optimization and hyper-targeted
              user acquisition tactics has contributed to Link constant flow of
              installs by quality users.
            </div>
            <Link
              className="growth_single-link pramiryColor_backgroud pramiryColor_NoboxShadow"
              to="https://www.moburst.com/case_study/mailwise/"
            >
              <span>View Case Study</span>
            </Link>
          </div>
          <div className="growth_single pramiryColor_after swiper-slide ">
            <img
              className="growth_single-img"
              src="https://www.moburst.com/wp-content/uploads/2022/05/Uber_White_Logo.png.png"
              alt
              loading="lazy"
            />
            <div className="growth_single-number ">
              +<span className="running_numbers hide">27</span>%
            </div>
            <div className="growth_single-description">
              Optimizing an app for discoverability across ten different
              languages is hardly an easy task. However, with the help of
              Moburst localization and ASO efforts, Uber was able to achieve
              higher indexing for extremely competitive keywords and phrases on
              Link global scale.
            </div>
            <Link to="https://www.moburst.com/case_study/uber/">
              <span>View Case Study</span>
            </Link>
          </div>
        </div>
      </div>

      {/* award section */}
      <div className="awards">
        <h2 className="awards_title hide">
          <span className="animation-wrapper">
            <span className="letters">Our awards</span>
          </span>
        </h2>
        <div className="awards_contianer">
          <div className="swiper_awardsSwiper">
            <div className="swiper-wrapper ">
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/10/Adweeks-Fastest-Growing.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Adweek’s Fastest Growing Agencies of 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/smarties-award-program_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Gold Award for Product/Service Launch
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/06/Bitmap-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Top User Acquisition Companies in 2023
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/smarties-award-program_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Bronze Award for Short or Long Form Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/top-mobile-app-development-companiesv_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Top Mobile App Development Company
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/buissness-of-aps-_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2020 Top App Marketing Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/mobile-app-daily_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2021 Top App Development Companies for Start-ups
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/top-app-install-ad-platforms_optimized-2.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2019 Top App Install Ad Platforms
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/best-app-marketing-companies_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2020 Best App Marketing Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/top-b2b-companies-clutch_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2020 Top B2B Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/05/app-leader-of-the-year_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2021 App Leader of the Year
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/06/effective-mobile-winner_optimized-1-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2019 Effective Mobile Marketing Awards
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/06/top-influencer-marketing-2022_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top Influencer Marketing Company
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/06/top-app-marketing-companies-2022_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top App Marketing Company
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/growth_marketing_optimized.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top Growth Marketing Agencies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/07/masterclassing-awards-2022-winner-v2_optimized.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 MOST EFFECTIVE VIDEO CAMPAIGN
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/07/masterclassing-awards-2022-winner-v2_optimized.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 MOST EFFECTIVE MOBILE CAMPAIGN
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/07/the-drum-awards_Marketing_optimized.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 DRUM AWARD MARKETING FINALIST
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/acquisition.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top User Acquisition Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/07/the_telly_awards_gold.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 TELLY AWARDS GOLD WINNER
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/TikTok-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top TikTiok Marketing Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/App-Store-Optimization.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Top App Store Optimization Companies
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/Resolute-Nyx-award-1-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      #2 Top 10 Agencies of the Year
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2022/11/ANOTHER_AWARD.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      2022 Effective Mobile Marketing Awards
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/clutch-1000-social-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Top 1000 Global Company in 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide awards_single">
                <div className="awards_single-wrapper">
                  <img
                    className="awards_single-logo"
                    src="https://www.moburst.com/wp-content/uploads/2023/05/clutch-2022-1.png"
                    alt
                    loading="lazy"
                  />
                  <div className="awards_single-standCon">
                    <img
                      className="awards_single-stand"
                      src="https://www.moburst.com/wp-content/uploads/2022/03/stand.png"
                      alt="stand"
                      loading="lazy"
                    />
                    <div className="awards_single-description">
                      Top Advertising & Marketing Agencies in 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase">
          <img src="https://www.moburst.com/wp-content/uploads/2022/03/show.png" alt="" />
        </div>
      </div>

      <Form />
      <Footer />
    </div>
  );
}

export default Home;
