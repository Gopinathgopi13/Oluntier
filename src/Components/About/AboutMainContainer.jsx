import React from "react";
import about from "../../assets/about.jpg";
const AboutMainContainer = () => {
  return (
    <div className="lg:w-[1280px] px-3 mx-auto space-y-10 md:py-10 py-20">
      <div className="grid md:grid-cols-2 gap-5 mx-auto">
        <div className="flex flex-col justify-around pr-5 gap-5">
          <div className="text-6xl">About</div>
          <p className="text-xl">
            Welcome to OL UNTIER, your premier destination for comprehensive
            interior decoration and construction services across Tamil Nadu and
            Bangalore. Specializing in individual house and villa construction
            in Chennai and Bangalore, as well as crafting exquisite marble
            temples, we pride ourselves on offering a wide range of services to
            meet all your needs.
          </p>
          <p className="text-xl">
            From false ceiling installation to expert flooring solutions,
            meticulous painting services, and custom railings, our skilled team
            ensures exceptional quality in every project. We also specialize in
            woodworks, including wardrobe making, modular kitchen installation,
            and wall paneling, tailored to suit your preferences and space
            requirements.
          </p>
          <p className="text-xl">
            At OL UNTIER, we are committed to exceeding your expectations with
            our attention to detail, craftsmanship, and customer satisfaction.
            Trust us to transform your space into a haven of style and
            functionality, with services extending to meet all your interior
            decoration and construction needs.
          </p>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMainContainer;
