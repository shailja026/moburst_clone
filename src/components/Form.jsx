import React from "react";
import "../Css/form.css";
function Form() {
  return (
    <div className="form_hide">
      <div className="form_content">
        {/* maine msg */}
        <div className="connect">
          <h2>Let’s talk</h2>
          <p>Ready to experience hypergrowth?</p>
        </div>

        {/* form */}

        <div className="form_div">
          <div className="form">
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
              />
              <label for="name" className="form__label">
                Name
              </label>
            </div>

            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
              />
              <label for="name" className="form__label">
                Name
              </label>
            </div>

            <div className="select">
              <select name="Upto $50" id="">
                <option value="">Monthly budget</option>
                <option value="">Up to $50</option>
                <option value="">$50000 - $100000</option>
                <option value="">$15000 - $250000</option>
                <option value="">$30000- $350000</option>
                <option value="">$40000- $100000</option>
                <option value="">Over 100000$</option>
              </select>
            </div>
          </div>
          <div text_area>
            <p for="w3review">How can we help?</p>
            <div className="div"></div>
          </div>
        </div>
        <div className="services">
        <h2>Choose services</h2>
        <div className="btns">
            <button id="niche1736119349" className="btn">Creative & Videos</button>
            <button id="niche535957964" className="btn">Influencer Marketing</button>
            <button id="niche2141131126" className="btn">Marketing Strategy</button>
            <button id="niche260692903" className="btn">Media Buying</button>
            <button id="niche298576580" className="btn">Organic growth</button>
            <button id="niche626621150" className="btn">Web & App Development</button>
        </div>
      </div>
      <button className="submit">Submit</button>
      </div>
      
    </div>
  );
}

export default Form;
