import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container">
        <div className="call_to_action_wrapper animate-fadeIn">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <div className="call_to_action_content mb-8 lg:mb-0 lg:w-2/3">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Have Any Project in Mind?
              </h3>
              <ul className="title-line justify-center lg:justify-start mb-4">
                <li className="bg-white"></li>
                <li className="bg-white"></li>
                <li className="bg-white"></li>
              </ul>
              <p className="text-blue-100 text-lg">
                Let&apos;s discuss your project and bring your ideas to life with modern technology and creative solutions.
              </p>
            </div>

            <div className="call_to_action_btn">
              <Link 
                href="mailto:a.h.mohammadi5@gmail.com" 
                className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700"
              >
                HIRE ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;