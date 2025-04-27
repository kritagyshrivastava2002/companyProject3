import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ff44/52d2/f753948da14344deb954577dcfc55f1c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXStjdgWSp1XFzOF5tcM48aKqqz-VmXqHElIHyUCWZQDtJW7YSXJHZ~56Wl0C7ijjXnDndMxx8zRQipCrGcnFfmDloplL6Y0jhaDCQkkQYbVPallPW7CQZ~XgrzmOZlFJoUyzBdSqd9A89kNW1dJa8xHh~W~gx0kJil8b9NajD5qzNT6kkSR-V9wZErv4Oo5hGK1bb~EroKKk7dEgL5yTn-vMRmRRYRalCcUGJrVqj3Od5sbiqthfnvZL0-B8YLMbK9EebNG6obN3sxwyYsjZX3kRD8p4VseHlGkO0n6ndLPafNEBA589dWJz3POLTZDGRsodu-6cVwdgr18Sbi29g__')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlock Your Future with Easy Online Admissions
          </h1>
          <p className="mb-6 max-w-xl">
            Join thousands of students in accessing quality education from the comfort of your home. Fast, easy, and secure online admissions.
          </p>
    <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700">Apply Online</button>
            <button className="px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-200">Explore More</button>
          </div>
        </div>
      </section>

  <section className="flex justify-around items-center bg-white py-10 shadow-md">
        <div className="text-center">
          <p className="text-3xl font-bold">1000+</p>
          <p>Happy Students</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">200</p>
          <p>Teachers</p>
  </div>
        <div className="text-center">
          <p className="text-3xl font-bold">10</p>
          <p>Cities</p>
    </div>
        <div className="text-center">
          <p className="text-3xl font-bold">10+</p>
          <p>Years Experience</p>
     </div>
      </section>
    </>
  );
}

export default HeroSection;
