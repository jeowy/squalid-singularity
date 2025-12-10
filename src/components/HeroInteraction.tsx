import { useState, type ReactNode } from "react";
import CTAForm from "./CTAform"; 

interface HeroInteractionProps {
  buttonText?: string;
  placeholder?: string;
  children: ReactNode;
  fitContent?: boolean; // FIX: Added this to solve the TS error
}

export default function HeroInteraction({ 
  buttonText, 
  placeholder, 
  children,
  fitContent = false 
}: HeroInteractionProps) {
  
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <CTAForm 
        buttonText={buttonText} 
        placeholder={placeholder} 
        onSuccess={() => setShowCalendar(true)} 
      />

      {/* Container Logic:
          - Default: w-full (expands to max-w-5xl)
          - fitContent: w-fit (shrinks to image width). 
            Note: We keep min-w properties to prevent it collapsing too small on load.
      */}
      <div className={`
        relative mx-auto mt-8 transition-all duration-700 ease-in-out
        ${fitContent ? 'w-full md:w-fit' : 'w-full max-w-md md:max-w-5xl'} 
      `}>
        
        <div className="absolute -inset-4 rounded-2xl bg-primary-foreground/20 blur-3xl block"></div>
        
        <div 
          className={`
            relative transition-all duration-700
            
            rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-0 sm:p-2 shadow-custom-lg backdrop-blur-sm

            ${showCalendar 
              ? 'h-[850px] sm:h-[700px] overflow-hidden' 
              : 'h-auto overflow-visible'
            }
          `}
        >
          
          <div className={`w-full h-full transition-all duration-700 ${showCalendar ? 'bg-white overflow-hidden' : ''} rounded-xl`}>

            {showCalendar ? (
              <iframe 
                src="https://calendly.com/nick-rakovsky/datadocks-demo?embed_domain=datadocks.com&embed_type=Inline&hide_gdpr_banner=1&text_color=000000&primary_color=FF5722" 
                className="w-[106%] h-[106%] -ml-[3%] -mt-[3%]"
                frameBorder="0"
                title="Select a Date & Time"
                allow="payment"
              ></iframe>
            ) : (
              children
            )}

          </div>
        </div>
      </div>
    </>
  );
}