import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface CTAFormProps {
  buttonText?: string;
  placeholder?: string;
  onSuccess: () => void; 
}

export default function CTAForm({ buttonText = "Schedule a Demo", placeholder, onSuccess }: CTAFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus('success');
      toast.success("Success! Please select a time below.");
      onSuccess();
      
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
      setStatus('idle');
    }
  };

 if (status === 'success') {
    return (
      <div className="mx-auto max-w-md flex items-center justify-center gap-2 mb-4 sm:mb-6 h-12 bg-[#FFF8E9] text-black border border-primary/20 rounded-md animate-in fade-in zoom-in font-recoleta">
        <CheckCircle2 className="h-5 w-5 text-[#FF5722]" />
        <span className="text-lg">Details received! Select a time below ↓</span>
      </div>
    );
  }

  // UPDATED: Reduced bottom margin from mb-16 to mb-8
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col sm:flex-row gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <Input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder || "Enter your email"} 
        className="flex-1 h-12 bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground" 
        required 
        disabled={status === 'loading'}
      />
      <Button 
        type="submit" 
        variant="default" 
        size="lg" 
        className="whitespace-nowrap h-12 bg-[#FF5722] hover:bg-black text-white font-recoleta transition-all"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
           <>
             {buttonText}
             <ArrowRight className="ml-2 h-5 w-5" />
           </>
        )}
      </Button>
    </form>
  );
}