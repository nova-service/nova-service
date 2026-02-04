import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialCarousel = () => {
  const { t } = useTranslation();

  const originalTestimonials = [
    {
      id: 1,
      name: t('about.testimonials.items.0.name'),
      location: t('about.testimonials.items.0.location'),
      rating: 5,
      text: t('about.testimonials.items.0.text'),
      service: t('about.testimonials.items.0.service'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      name: t('about.testimonials.items.1.name'),
      location: t('about.testimonials.items.1.location'),
      rating: 5,
      text: t('about.testimonials.items.1.text'),
      service: t('about.testimonials.items.1.service'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 3,
      name: t('about.testimonials.items.2.name'),
      location: t('about.testimonials.items.2.location'),
      rating: 5,
      text: t('about.testimonials.items.2.text'),
      service: t('about.testimonials.items.2.service'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      id: 4,
      name: t('about.testimonials.items.3.name'),
      location: t('about.testimonials.items.3.location'),
      rating: 5,
      text: t('about.testimonials.items.3.text'),
      service: t('about.testimonials.items.3.service'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];
  // Clone first and last items for seamless looping
  const testimonials = [
    ...originalTestimonials.slice(-3),
    ...originalTestimonials,
    ...originalTestimonials.slice(0, 3)
  ];

  const [currentSlide, setCurrentSlide] = useState(3); // Start at the first real item
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  // Responsive items per slide
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Instant jump for infinite loop
    if (currentSlide >= originalTestimonials.length + 3) {
      setCurrentSlide(3); // Jump back to start
    } else if (currentSlide < 3) {
      setCurrentSlide(originalTestimonials.length + 3 - 1); // Jump to end
    }
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(nextSlide, 3500);
    }
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  // Swipe logic
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    setIsPaused(false);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 3);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-[#1a2e1a] to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative group">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#84CC16] to-[#65a30d] bg-clip-text text-transparent animate-gradient">
            {t('about.testimonials.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-300 font-light">{t('about.testimonials.subtitle')}</p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl p-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={containerRef}
        >
          {/* Slides Container */}
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
              transition: isTransitioning ? 'transform 700ms ease-out' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-3"
              >
                <div className="bg-gray-800 rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-opacity-90 border border-[#84CC16]/20 h-full transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-[#84CC16]/20"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";
                        }}
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#84CC16] rounded-full p-2">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                      <p className="text-[#84CC16] font-medium">{testimonial.location}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{testimonial.service}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic line-clamp-4">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-gray-800 p-3 rounded-full shadow-lg text-[#84CC16] hover:bg-[#84CC16] hover:text-white transition-all z-10 hidden sm:block opacity-0 group-hover:opacity-100 border border-[#84CC16]/20"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-gray-800 p-3 rounded-full shadow-lg text-[#84CC16] hover:bg-[#84CC16] hover:text-white transition-all z-10 hidden sm:block opacity-0 group-hover:opacity-100 border border-[#84CC16]/20"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {originalTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${(currentSlide - 3 + originalTestimonials.length) % originalTestimonials.length === index
                ? "bg-[#84CC16] w-8"
                : "bg-gray-600 hover:bg-[#84CC16]/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>


  );
};

export default TestimonialCarousel;