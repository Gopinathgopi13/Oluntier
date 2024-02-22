import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactMainContainer from "./ContactMainContainer";
import ContactSecondContainer from "./ContactSecondContainer";

function Contact() {
  return (
    <div>
      <div className="bg-HomePageBG5 bg-cover bg-center h-[40vh] text-[#282936]">
        <Navbar />
        <div>
          <div className="text-5xl font-bold text-center mt-16">Contact</div>
        </div>
      </div>
      {/* <div>
        <ContactMainContainer />
      </div> */}
      <div>
        <ContactSecondContainer/>
      </div>

      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
