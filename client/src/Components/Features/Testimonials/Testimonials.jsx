import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5020/api/reviews");
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getReviews();
  }, []);

  return (
    <section id="testimonials" className="min-h-[80vh]  py-20 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Testimonials
          </h2>

          <p className="text-body mb-6">
            Feedback from clients & collaborators
          </p>

          {/* Write Review Button */}
          <a
            href="#feedback"
            className="inline-block bg-primary text-white px-5 py-2 rounded-md text-sm hover:bg-accent transition"
          >
            Leave a Review
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.length === 0 ? (
            <p className="text-center col-span-3 text-body">
              No reviews yet.
            </p>
          ) : (
            reviews.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-lg
                  shadow-md
                  hover:shadow-lg
                  transition
                  duration-300
                  p-6
                  flex
                  flex-col
                  justify-between
                "
              >

                <p className="text-body mb-6 leading-relaxed text-sm">
                  “{item.feedback}”
                </p>

                <div className="mt-auto">
                  <h4 className="font-semibold text-heading text-sm">
                    {item.name}
                  </h4>

                  <span className="text-xs text-gray-500">
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