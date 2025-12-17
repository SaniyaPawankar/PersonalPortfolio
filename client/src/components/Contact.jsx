import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
       className="relative w-full overflow-hidden
                 bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
                 py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">
            Contact Me
          </h2>
          <p className="text-gray-100 mt-3 ">
            Have a project idea or want to collaborate? Let’s talk.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;













// import React from "react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative w-full overflow-hidden
//                  bg-gradient-to-b from-black via-[#12001f] to-[#0b0014]
//                  py-20 px-6 text-white"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 blur-3xl
//         bg-[radial-gradient(circle_at_right,rgba(168,85,247,0.25),transparent_70%)]">
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-extrabold">
//             Contact <span className="text-violet-400">Me</span>
//           </h2>
//           <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//             Have a project idea or want to collaborate? Let’s talk.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

//           {/* Contact Form */}
//           <div className="bg-white/5 backdrop-blur-md border border-white/10
//                           rounded-2xl shadow-lg p-8">
//             <h3 className="text-xl font-semibold mb-6">
//               Send a Message
//             </h3>

//             <form className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 rounded-lg bg-black/40
//                              border border-white/10 text-white
//                              focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full px-4 py-3 rounded-lg bg-black/40
//                              border border-white/10 text-white
//                              focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   placeholder="Write your message..."
//                   className="w-full px-4 py-3 rounded-lg bg-black/40
//                              border border-white/10 text-white
//                              focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-violet-600 hover:bg-violet-700
//                            py-3 rounded-lg font-semibold transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Map Section */}
//           <div className="bg-white/5 backdrop-blur-md border border-white/10
//                           rounded-2xl shadow-lg overflow-hidden">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps?q=India&output=embed"
//               className="w-full h-full min-h-[420px] border-0 grayscale opacity-90"
//               loading="lazy"
//             ></iframe>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
