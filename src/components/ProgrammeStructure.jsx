import React from "react";

const ProgrammeStructure = () => {
  const semesters = [1, 2, 3];
  const pedagogy = Array(4).fill("Dummy Title");

  return (
    <div className="bg-white text-gray-800 p-8">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Programme Structure</h2>
      <div className="space-y-8">
        {semesters.map((num) => (
          <div key={num} className="flex bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/ff44/52d2/f753948da14344deb954577dcfc55f1c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXStjdgWSp1XFzOF5tcM48aKqqz-VmXqHElIHyUCWZQDtJW7YSXJHZ~56Wl0C7ijjXnDndMxx8zRQipCrGcnFfmDloplL6Y0jhaDCQkkQYbVPallPW7CQZ~XgrzmOZlFJoUyzBdSqd9A89kNW1dJa8xHh~W~gx0kJil8b9NajD5qzNT6kkSR-V9wZErv4Oo5hGK1bb~EroKKk7dEgL5yTn-vMRmRRYRalCcUGJrVqj3Od5sbiqthfnvZL0-B8YLMbK9EebNG6obN3sxwyYsjZX3kRD8p4VseHlGkO0n6ndLPafNEBA589dWJz3POLTZDGRsodu-6cVwdgr18Sbi29g__"
              alt={`Semester ${num}`}
              className="w-1/3 object-cover"
            />
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Semester {num}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm w-fit">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-blue-700 mt-16 mb-8">Learning Pedagogy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pedagogy.map((title, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src="https://s3-alpha-sig.figma.com/img/ff44/52d2/f753948da14344deb954577dcfc55f1c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXStjdgWSp1XFzOF5tcM48aKqqz-VmXqHElIHyUCWZQDtJW7YSXJHZ~56Wl0C7ijjXnDndMxx8zRQipCrGcnFfmDloplL6Y0jhaDCQkkQYbVPallPW7CQZ~XgrzmOZlFJoUyzBdSqd9A89kNW1dJa8xHh~W~gx0kJil8b9NajD5qzNT6kkSR-V9wZErv4Oo5hGK1bb~EroKKk7dEgL5yTn-vMRmRRYRalCcUGJrVqj3Od5sbiqthfnvZL0-B8YLMbK9EebNG6obN3sxwyYsjZX3kRD8p4VseHlGkO0n6ndLPafNEBA589dWJz3POLTZDGRsodu-6cVwdgr18Sbi29g__" alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammeStructure;
