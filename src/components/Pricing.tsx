import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: '$75',
      description: 'Single Page Application',
      features: [
        { name: 'Responsive Design', included: true },
        { name: 'React/Next.js', included: true },
        { name: 'Basic SEO', included: true },
        { name: 'Backend API', included: false },
        { name: 'Database', included: false },
        { name: 'Maintenance', included: false }
      ],
      popular: false
    },
    {
      title: 'Standard',
      price: '$250',
      description: 'Full Stack Application',
      features: [
        { name: 'Responsive Design', included: true },
        { name: 'React/Next.js', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Backend API', included: true },
        { name: 'Database', included: true },
        { name: '6 Months Maintenance', included: true }
      ],
      popular: true
    },
    {
      title: 'Premium',
      price: '$350',
      description: 'Enterprise Solution',
      features: [
        { name: 'Responsive Design', included: true },
        { name: 'React/Next.js', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Backend API', included: true },
        { name: 'Database', included: true },
        { name: '1 Year Maintenance', included: true }
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing_area py-20 lg:py-28 bg-gray-50 relative">
      <div className="pricing_shape absolute top-0 right-0 w-1/4 opacity-10">
        {/* Shape can be added as SVG or background */}
      </div>

      <div className="container mx-auto px-4">
        <div className="row justify-center">
          <div className="lg:w-2/3">
            <div className="section-title animate-fadeIn">
              <h5 className="sub-title">Pricing</h5>
              <h3 className="main-title">Pricing Plans</h3>
              <ul className="title-line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`single_price bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative animate-slideInUp ${
                plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <span className="sticker absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              )}
              
              <div className="price_header text-center mb-8">
                <h4 className="price_title text-2xl font-bold text-gray-800 mb-4">{plan.title}</h4>
                <span className="price text-4xl font-bold text-blue-600 block">{plan.price}</span>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <div className="price_body mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`mr-3 ${feature.included ? 'text-green-500' : 'text-red-400'}`}>
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="price_btn text-center">
                <Link 
                  href="#contact" 
                  className={`main-btn ${plan.popular ? '' : 'main-btn-2'} w-full`}
                >
                  Choose Plan
                </Link>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;