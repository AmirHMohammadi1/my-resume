import { Testimonial } from '@/types';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechCorp',
      content: `Working with John was an absolute pleasure. He delivered our project on time and exceeded our expectations in every way.`,
      avatar: '/api/placeholder/100/100',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      position: 'CEO',
      company: 'StartUpXYZ',
      content: `The website John built for us has significantly improved our online presence and customer engagement. Highly recommended!`,
      avatar: '/api/placeholder/100/100',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      position: 'Product Manager',
      company: 'DesignStudio',
      content: `Professional, creative, and extremely talented. John transformed our vision into a beautiful, functional reality.`,
      avatar: '/api/placeholder/100/100',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2 className="main-title">What Clients Say</h2>
          <ul className="title-line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4 text-lg">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;