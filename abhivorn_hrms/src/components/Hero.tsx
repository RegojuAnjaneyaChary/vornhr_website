// import { ArrowRight, CheckCircle } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="pt-28 sm:pt-36 pb-20 text-center">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
//           HR Management
//           <span className="block sm:inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             {" "}Simplified
//           </span>
//         </h1>

//         <p className="text-gray-600 max-w-2xl mx-auto mb-10">
//           All-in-one HR platform for payroll, attendance and compliance.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a href="#pricing" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
//             Start Free Trial <ArrowRight className="inline ml-1 h-4 w-4" />
//           </a>
//           <a href="#demo" className="border px-6 py-3 rounded-lg">
//             Schedule Demo
//           </a>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
//           {["No credit card", "30-day trial", "Cancel anytime"].map((f) => (
//             <div key={f} className="flex items-center">
//               <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
//               {f}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;















import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HEADING */}
        <h1
          className="
            font-bold mb-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            leading-tight
          "
        >
          <span className="block sm:inline">
            HR Management
          </span>

          <span
            className="
              block sm:inline sm:ml-2
              bg-gradient-to-r from-blue-600 to-purple-600
              bg-clip-text text-transparent
            "
          >
            Simplified
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          All-in-one HR platform for payroll, attendance, and compliance —
          built for growing teams.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="#pricing"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center
              bg-blue-600 hover:bg-blue-700
              text-white px-6 py-3 rounded-lg
              font-medium transition
            "
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href="#demo"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center
              border border-gray-300
              px-6 py-3 rounded-lg
              font-medium text-gray-700
              hover:bg-gray-50 transition
            "
          >
            Schedule Demo
          </a>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm sm:text-base">
          {["No credit card", "30-day trial", "Cancel anytime"].map((f) => (
            <div key={f} className="flex items-center text-gray-600">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              {f}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
