import React from "react";
import about from "../../assets/about.jpg";
const AboutMainContainer = () => {
  return (
    <div className="lg:w-[1280px] px-3 mx-auto space-y-10 md:py-10 py-20">
      <div className="grid md:grid-cols-2 gap-5 mx-auto">
        <div className="flex flex-col justify-around pr-5 gap-5">
          <div className="text-6xl">About</div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            nulla culpa laudantium officia, iure eum nam deserunt, veritatis
            quod quisquam cupiditate labore eligendi corrupti esse fugiat magni
            deleniti fuga a? Numquam facere accusantium libero, reiciendis
            asperiores corporis quis! Doloribus beatae laborum natus magni iusto
            quidem et minima, quaerat dolor consectetur.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            nulla culpa laudantium officia, iure eum nam deserunt, veritatis
            quod quisquam cupiditate labore eligendi corrupti esse fugiat magni
            deleniti fuga a? Numquam facere accusantium libero, reiciendis
            asperiores corporis quis! Doloribus beatae laborum natus magni iusto
            quidem et minima, quaerat dolor consectetur.
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
