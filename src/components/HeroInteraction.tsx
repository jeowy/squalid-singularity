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

      {/* CONTAINER WRAPPER */}
      {/* 1. mx-auto: Centers it.
          2. w-full: Takes up available space.
          3. max-w-md md:max-w-5xl: Matches form width on mobile, expands on desktop.
          4. mt-8: Adds breathing room after the form.
      */}
      <div className="relative mx-auto w-full max-w-md md:max-w-5xl mt-8 transition-all duration-700 ease-in-out">
        
        {/* Glow Effect (Visible on all screens now for consistency) */}
        <div className="absolute -inset-4 rounded-2xl bg-primary-foreground/20 blur-3xl block"></div>
        
        {/* THE GLASS FRAME */}
        {/* We removed 'sm:' prefixes so this style applies to Mobile too */}
        <div 
          className={`
            relative overflow-hidden transition-all duration-700
            
            // GLASS STYLES (Global)
            rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-0 sm:p-2 shadow-custom-lg backdrop-blur-sm

            ${showCalendar 
              // CALENDAR: Tall fixed height
              ? 'h-[850px] sm:h-[700px]' 
              // IMAGE: Auto height to fit content
              : 'h-auto'
            }
          `}
        >
          
          <div className={`w-full h-full overflow-hidden transition-all duration-700 ${showCalendar ? 'bg-white' : ''} rounded-xl`}>

            
            
            
            {showCalendar ? (
              // CALENDAR VIEW
              <iframe 
                src="https://calendly.com/nick-rakovsky/datadocks-demo?embed_domain=datadocks.com&embed_type=Inline&hide_gdpr_banner=1&text_color=000000&primary_color=FF5722" 
                // Zoom 106% to crop padding
                className="w-[106%] h-[106%] -ml-[3%] -mt-[3%]"
                frameBorder="0"
                title="Select a Date & Time"
                allow="payment"
              ></iframe>
            ) : (
              // CHILD VIEW (PhoneFrame or Image)
              children
            )}

          </div>
        </div>
      </div>
    </>
  );
}