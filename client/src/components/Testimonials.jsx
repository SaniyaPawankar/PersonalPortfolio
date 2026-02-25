import React, { useEffect, useState } from "react";
import axios from "axios"

// const staticTestimonials = [
//   {
//     name: "Amit Sharma",
//     role: "Client",
//     review:
//       "John delivered an excellent MERN application. Clean UI, scalable backend, and timely delivery.",
//   },
//   {
//     name: "Sneha Verma",
//     role: "Startup Founder",
//     review:
//       "Very professional and skilled developer. Great understanding of React and backend APIs.",
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Team Lead",
//     review:
//       "Strong problem-solving skills and clean code practices. Highly recommended.",
//   },
// ];

const Testimonials = () => {
  //   const [reviews, setReviews] = useState([]);

  //   useEffect(() => {
  //     const storedReviews =
  //       JSON.parse(localStorage.getItem("reviews")) || [];

  //     const formattedReviews = storedReviews.map((item) => ({
  //       name: item.name,
  //       role: "Reviewer",
  //       review: item.message,
  //     }));

  //     // combine submitted reviews + static testimonials
  //     setReviews([...formattedReviews, ...staticTestimonials]);
  //   }, []);

  let [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async() => {
      try{
        const res = await axios.get("http://localhost:5020/api/reviews");
        setReviews(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getReviews()
  })


  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen overflow-hidden
      px-6 py-24 text-black"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 blur-3xl 
        bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_70%)]"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What People <span className="text-violet-400">Say</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Feedback from clients & collaborators
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.length === 0 ? (
            <p className="text-center col-span-3 text-gray-400">
              No reviews yet.
            </p>
          ) : (
            reviews.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10
                rounded-xl p-6 shadow-md hover:border-violet-400/40
                transition-all duration-300"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  “{item.feedback}”
                </p>
                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {item.email}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;