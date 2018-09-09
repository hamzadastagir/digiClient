import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="wrapper row4">
        <footer className="hoc container clear">
          <div className="group" style="margin-top:-20px;">
            <article className="one_third first">
              <h4 style="color:#FF9800; text-align:left; margin-bottom: 25px;">ABOUT THE LAB</h4>
              <p style="text-align:justify">We are a world class digital consulting and training partner for the <span
                style="color:#FF9800;">life science, nutraceutical</span> and FMCG companies that supports their digital
                transformation journey in the current digital era.</p>
            </article>
            <article className="one_third">
              <h4 style="color:#FF9800; text-align:left; margin-bottom: 25px;">CONTACT DETAILS</h4>
              <ul className="nospace linklist contact" style="text-align:left; margin-left:-10px;">
                <li><i className="fa fa-map-marker" style="color:#16a9da" />
                  <address>
                    30, Cecil Street, #19-08 Prudential Tower, Singapore 049712
                  </address>
                </li>
                <li><i className="fa fa-phone" style="color:#16a9da" /> +65 6320 1888</li>
                <li><i className="fa fa-fax" style="color:#16a9da" /> +65 6438 2436</li>
                <li><i className="fa fa-envelope-o" style="color:#16a9da" /> connect@digitranslab.com</li>
              </ul>

            </article>
            <article className="one_third">
              <h4 style="color:#FF9800; text-align:left; margin-bottom: 25px;">&nbsp;</h4>
              <ul className="nospace linklist" style="text-align:left;">
                <li><a href="About DTL.html">ABOUT DTL</a></li>
                <li><a href="How LAB Help .html">HOW THE LAB CAN HELP?</a></li>
                <li><a href="Digital.html">DIGITAL MATURITY INDEX</a></li>
                <li><a href="Workshops.html">WORKSHOP</a></li>
                <li><a href="Event.html">EVENTS</a></li>
              </ul>
            </article>
          </div>
        </footer>
      </div>

      <div className = "wrapper row5" >
        <div id = "copyright" className = "hoc clear" >
          <p style = "text-align:center" >
            Copyright & copy; 2017 - All
            Rights Reserved - <a href="#"> www.digitranslab.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
