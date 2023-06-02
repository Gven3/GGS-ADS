import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ThemeContext } from "../../themeContext";
import { StyledContact } from "./contact.styled";
import React, { useContext } from "react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledContact theme={theme}>
      <header>
        <h1>
          <i>დაგვიკავშირდით</i>
        </h1>
        <p>ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ!</p>
      </header>
      <div className="inputDiv">
        <div className="leftSide">
          <div className="contact">
            <div>
              <FiPhone />
              <p>+995 596 90 99 33</p>
            </div>
            <div>
              <FiMail />
              <p>info@ggsads.ge</p>
            </div>
            <div>
              <FiMapPin />
              <p>თბილისი, გოძიაშვილის 67, 0171</p>
            </div>
          </div>
          <div className="short">
            <h4>სამუშაო საათები</h4>
            <p>ორშაბათი – პარასკევი : 10:00 - 18:00</p>
            <p>შააბათი – კვირა : 11:00 - 15:00</p>
          </div>
        </div>
        <div className="rightSide">
          <input type="text" placeholder="როგორ მოგმართოთ?" />
          <input type="text" placeholder="ელ.ფოსტა" />
          <textarea placeholder="ტექსტი" className="third"></textarea>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61883.20290032835!2d44.76269000460138!3d41.69413375791064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi!5e0!3m2!1sen!2sge!4v1684860126625!5m2!1sen!2sge"
        height="400"
        loading="lazy"
        className="map"
      ></iframe>
    </StyledContact>
  );
};

export default Contact;
