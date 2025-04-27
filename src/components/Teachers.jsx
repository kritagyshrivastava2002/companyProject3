import React from "react";

const teachers = [
  {
    name: "Kamlesh Kumar",
    subject: "Computer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://img.freepik.com/premium-photo/3d-rendered-teacher-with-beard-pointing_934664-141.jpg"
  },
 
];

export default function Teachers() {
  return (
    <div className="p-6 space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Meet Our Teachers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-30 h-22 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-blue-600 font-medium">{teacher.subject}</p>
              <p className="text-sm text-gray-600 mt-2">{teacher.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


