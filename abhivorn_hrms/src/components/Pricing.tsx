// import React, { useState } from "react";
// import { Check, Star } from "lucide-react";

// const Pricing = () => {
//   const [isAnnual, setIsAnnual] = useState(false);

//   const plans = [
//     {
//       name: "Starter",
//       employees: "Up to 50 employees",
//       monthlyPrice: 1999,
//       popular: false,
//       features: [
//         "Up to 50 employees",
//         "Basic HR features",
//         "Email support",
//         "Mobile app",
//         "5GB document storage",
//       ],
//       cta: "Get Started",
//     },
//     {
//       name: "Professional",
//       employees: "Up to 200 employees",
//       monthlyPrice: 4999,
//       popular: true,
//       features: [
//         "Up to 200 employees",
//         "Advanced analytics",
//         "Priority support",
//         "Payroll processing",
//         "Compliance management",
//         "API access",
//       ],
//       cta: "Most Popular",
//     },
//     {
//       name: "Enterprise",
//       employees: "Unlimited employees",
//       monthlyPrice: null,
//       popular: false,
//       features: [
//         "Everything in Professional",
//         "Dedicated account manager",
//         "Custom integrations",
//         "24/7 phone support",
//         "Advanced security",
//         "Custom onboarding",
//       ],
//       cta: "Contact Sales",
//     },
//   ];

//   const formatINR = (amount: number) =>
//     new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(amount);

//   return (
//     <section id="pricing" className="py-16 md:py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <div className="inline-flex px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
//             Pricing
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Simple, transparent pricing
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             Choose a plan that fits your team size. Save 10% with annual billing.
//           </p>

//           {/* TOGGLE */}
//           <div className="inline-flex bg-gray-100 rounded-lg p-1">
//             <button
//               onClick={() => setIsAnnual(false)}
//               className={`px-6 py-2 rounded-md text-sm font-medium ${
//                 !isAnnual ? "bg-white shadow" : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setIsAnnual(true)}
//               className={`px-6 py-2 rounded-md text-sm font-medium flex items-center ${
//                 isAnnual ? "bg-white shadow" : "text-gray-600"
//               }`}
//             >
//               Annual
//               <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
//                 Save 10%
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {plans.map((plan, idx) => {
//             const annualPrice =
//               plan.monthlyPrice !== null
//                 ? plan.monthlyPrice * 12 * 0.9
//                 : null;

//             return (
//               <div
//                 key={idx}
//                 className={`relative rounded-xl border p-6 transition hover:shadow-lg ${
//                   plan.popular
//                     ? "border-blue-300 shadow-md"
//                     : "border-gray-200"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-full">
//                     <Star className="h-3 w-3 inline mr-1" />
//                     Most Popular
//                   </div>
//                 )}

//                 {/* PLAN HEADER */}
//                 <div className="text-center mb-6">
//                   <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

//                   <div className="text-4xl font-bold text-blue-600 mb-1">
//                     {plan.monthlyPrice === null
//                       ? "Custom"
//                       : isAnnual
//                       ? formatINR(annualPrice!)
//                       : formatINR(plan.monthlyPrice)}
//                   </div>

//                   <p className="text-gray-500 text-sm">
//                     {plan.monthlyPrice === null
//                       ? "Tailored pricing"
//                       : isAnnual
//                       ? "per year"
//                       : "per month"}
//                   </p>

//                   <p className="text-gray-600 text-sm mt-2">
//                     {plan.employees}
//                   </p>
//                 </div>

//                 {/* FEATURES */}
//                 <div className="space-y-3 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className="flex items-start">
//                       <Check className="h-4 w-4 text-green-500 mr-3 mt-1" />
//                       <span className="text-sm text-gray-700">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <button
//                   className={`w-full py-3 rounded-lg font-medium ${
//                     plan.popular
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-gray-900 text-white hover:bg-gray-800"
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* TRUST BADGES */}
//         <div className="mt-12 flex flex-wrap justify-center gap-4">
//           {["No setup fees", "Cancel anytime", "10% annual discount", "24/7 support"].map(
//             (item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-600"
//               >
//                 <Check className="h-4 w-4 text-green-500 mr-2" />
//                 {item}
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;




























import React, { useState } from "react";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
 {
  name: "Free Trial",
  employees: "Up to 50 employees",
  monthlyPrice: 0,
  popular: false,
  isFree: true,
  features: [
    "30-day free trial",
    "Up to 50 employees",
    "All core HR features",
    "Email & chat support",
    "Mobile app access",
    "Basic reports & analytics",
  ],
  cta: "Start Free Trial",
},

    {
      name: "Starter",
      employees: "Up to 50 employees",
      monthlyPrice: 1999,
      popular: false,
      features: [
        "Up to 50 employees",
        "Basic HR features",
        "Email support",
        "Mobile app",
        "5GB document storage",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      employees: "Up to 200 employees",
      monthlyPrice: 4999,
      popular: true,
      features: [
        "Up to 200 employees",
        "Advanced analytics",
        "Priority support",
        "Payroll processing",
        "Compliance management",
        "API access",
      ],
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      employees: "Unlimited employees",
      monthlyPrice: null,
      popular: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "Custom onboarding",
      ],
      cta: "Contact Sales",
    },
  ];

  const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Pricing
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start free. Upgrade anytime. Save 10% with annual billing.
          </p>

          {/* TOGGLE */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium ${
                !isAnnual ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium flex items-center ${
                isAnnual ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => {
            const annualPrice =
              plan.monthlyPrice !== null
                ? plan.monthlyPrice * 12 * 0.9
                : null;

            return (
              <div
                key={idx}
                className={`relative rounded-xl border p-6 transition hover:shadow-lg ${
                  plan.popular
                    ? "border-blue-300 shadow-md"
                    : plan.isFree
                    ? "border-green-300 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-full">
                   
                    Most Popular
                  </div>
                )}

                {plan.isFree && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-600 text-white text-sm rounded-full">
                    Free Trial
                  </div>
                )}

                {/* PLAN HEADER */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.monthlyPrice === null
                      ? "Custom"
                      : plan.isFree
                      ? "₹0"
                      : isAnnual
                      ? formatINR(annualPrice!)
                      : formatINR(plan.monthlyPrice)}
                  </div>

                  <p className="text-gray-500 text-sm">
                    {plan.isFree
                      ? "30 days free"
                      : plan.monthlyPrice === null
                      ? "Tailored pricing"
                      : isAnnual
                      ? "per year"
                      : "per month"}
                  </p>

                  <p className="text-gray-600 text-sm mt-2">
                    {plan.employees}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-3 mt-1" />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : plan.isFree
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* TRUST BADGES */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["No setup fees", "Cancel anytime", "Free trial available", "24/7 support"].map(
            (item, i) => (
              <div
                key={i}
                className="flex items-center px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-600"
              >
                <Check className="h-4 w-4 text-green-500 mr-2" />
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
