import { useState, type ReactNode } from "react";
import CTAForm from "./CTAform"; 

interface HeroInteractionProps {
  buttonText?: string;
  placeholder?: string;
  children: ReactNode; 
}

export default function HeroInteraction({ 
  buttonText, 
  placeholder, 
  children 
}: HeroInteractionProps) {
  
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <CTAForm 
        buttonText={buttonText} 
        placeholder={placeholder} 
        onSuccess={() => setShowCalendar(true)} 
      />

      <div className="relative mx-auto w-full max-w-md md:max-w-5xl mt-8 transition-all duration-700 ease-in-out">
        
        {/* Glow Effect */}
        <div className="absolute -inset-4 rounded-2xl bg-primary-foreground/20 blur-3xl block"></div>
        
        {/* THE GLASS FRAME */}
        <div 
          className={`
            relative transition-all duration-700
            rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-0 sm:p-2 shadow-custom-lg backdrop-blur-sm
            
            ${showCalendar 
              // FIX: Only hide overflow when Calendar is open (to clip the iframe)
              // Otherwise allow arrows to hang outside!
              ? 'h-[850px] sm:h-[700px] overflow-hidden' 
              : 'h-auto overflow-visible'
            }
          `}
        >
          
          <div className={`w-full h-full transition-all duration-700 ${showCalendar ? 'bg-white overflow-hidden' : ''} rounded-xl`}>

            {showCalendar ? (
              // CALENDAR VIEW
              <iframe 
                src="https://calendly.com/nick-rakovsky/datadocks-demo?embed_domain=datadocks.com&embed_type=Inline&hide_gdpr_banner=1&text_color=000000&primary_color=FF5722" 
                className="w-[106%] h-[106%] -ml-[3%] -mt-[3%]"
                frameBorder="0"
                title="Select a Date & Time"
                allow="payment"
              ></iframe>
            ) : (
              // CHILD VIEW (Gallery)
              children
            )}

          </div>
        </div>
      </div>
    </>
  );
}