import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center p-10 bg-gray-50">
        <img src="https://s3-alpha-sig.figma.com/img/80a6/515c/6624338225aa14433c7636842aa163c0?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YalIczbOZkL19DL-z8mbBumGPuhWpe6RJUJXxhZ~hRA6sHKIddPVhlXvSfQXmC4p9ZNSBjmhxFV0zc2Hv0ZPAGFk34SsrOLeTAQv9zJs9fQcI~4VVcMFN6rhANHUm4m0mde1~G1FMduBHNNljtuAOXjDYYEMEDMGNegNX9Xf8m6Y7pFcFjPIqkfS5~XDPagK4aohMbneul1p-AOlFWnA59Iezg-EKmNPAleTkd0tFUnLeOhFPpNyGqWsZtw6vZO93IkEgBLlXZGDVtvGDrx0hn73fd6oO5xGofGWcbtid9WymtyDHKi1w7EfoStFP2oSAJmLi236ZUt-9SkkwDO5fw__" alt="Students studying" className="w-full lg:w-1/2 rounded-xl shadow-md mb-6 lg:mb-0" />
        <div className="lg:ml-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">About Us</h2>
          <h3 className="text-xl font-semibold mb-4">School Name</h3>
          <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
        </div>
      </section>

  );
};

export default AboutUs;

