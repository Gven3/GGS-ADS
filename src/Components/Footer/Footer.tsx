import { StyledFooter } from "./footer.styled";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledFooter theme={theme}>
      <div className="footerDiv">
        <h1>GGS ADS</h1>
        <div className="footerContent">
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
        <div className="footerFooter">
          <p>
            Copyright <AiOutlineCopyright /> 2023 All rights reserved
          </p>
          <div className="socialMedia">
            <BsLinkedin />
            <BsFacebook />
            <BsInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
