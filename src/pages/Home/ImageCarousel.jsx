import React, { useEffect, useState } from 'react';
import image1 from '../../assets/imageCaurosol/activity1.jpg';
import image2 from '../../assets/imageCaurosol/activity2.jpg';
import image3 from '../../assets/imageCaurosol/activity3.jpg';
import image4 from '../../assets/imageCaurosol/activity4.jpg';
import image5 from '../../assets/imageCaurosol/banner.png';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: image1, alt: "Lab Activity 1", caption: "Students working on virtual experiments" },
    { src: image2, alt: "Lab Activity 2", caption: "Interactive learning sessions" },
    { src: image3, alt: "Lab Activity 3", caption: "Virtual lab demonstrations" },
    { src: image4, alt: "Lab Activity 4", caption: "Online practical sessions" },
    { src: image5, alt: "Lab Activity 5", caption: "Remote learning experience" }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  return (
    <div className="w-full max-w-[1650px] mx-auto my-4">
  <div
    className="relative w-full h-[450px] overflow-hidden border-0 border-gray-200 rounded-[2px]" // Added border-2
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >

        {/* Images Container */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[450px] flex-shrink-0" // Fixed height
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{
                  maxWidth: '1650px',
                  maxHeight: '450px'
                }}
              />
              {/* Caption with adjusted positioning */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-center py-3 px-6 text-lg">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-all shadow-lg"
          onClick={() => {
            setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition-all shadow-lg"
          onClick={() => {
            setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
