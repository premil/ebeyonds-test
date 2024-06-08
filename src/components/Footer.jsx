import facebook from "../assets/image/facebook.svg";
import twitter from "../assets/image/twitter.svg";
import insta from "../assets/image/insta.svg";
import linkedin from "../assets/image/linkedin.svg";
import youtube from "../assets/image/youtube.svg";

function FooterSection() {
  return (
    <div class="footer-section">
      <div class="left-footer">
        <div class="l-f-top">
          <div class="l-f-left">Company Logo</div>
          <div class="address">
            Keas 69 Str. 15234, East Nil <br />
            Athens, Greece <br />
            +249 9123 456 78 <br />
            +249 9123 456 78
          </div>
        </div>
        <div class="l-f-bottom">2020 Reserved by Company Name Limited.</div>
      </div>
      <div class="right-footer">
        <div class="r-f-com-div">
          <div class="r-f-top">Stay connected with</div>
          <div class="social-media">
            <div className="social-wrap">
              <img src={facebook} alt="" />
            </div>
            <div className="social-wrap">
              <img src={twitter} alt="" />
            </div>
            <div className="social-wrap">
              <img src={insta} alt="" />
            </div>
            <div className="social-wrap">
              <img src={linkedin} alt="" />
            </div>
            <div className="social-wrap">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div class="l-r-bottom">Published: March 05, 2024</div>
      </div>
    </div>
  );
}

export default FooterSection;
