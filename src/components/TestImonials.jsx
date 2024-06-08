import leftArrow from "../assets/image/left-w-icon.svg";
import rightArrow from "../assets/image/right-w-icon.svg";
import location from "../assets/image/Location.PNG";

function ImonialSection() {
  return (
    <div>
      <div class="testimonials-section container">
        <div class="t-left-div l-r-common">
          <img className="image-c-arrow" src={leftArrow} alt="" />
        </div>
        <div class="t-middle-div">
          <div class="m-top-div">Testimonials</div>
          <div class="img-quote up-img-quote"></div>
          <div class="quote-para">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
          <div class="img-quote down-img-quot"></div>
          <div class="m-bottom-h2">-Lorem ipaum dolor</div>
          <div class="quote-para">Lorem ipsum dolor</div>
          <div class="m-top-div">Contact Us</div>
        </div>
        <div class="t-right-div l-r-common">
          <img className="image-c-arrow" src={rightArrow} alt="" />
        </div>
      </div>
      <div className="location">
        <img className="location-img" src={location} alt="" />
      </div>
    </div>
  );
}

export default ImonialSection;
