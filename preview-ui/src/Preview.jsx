import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ThankYouPage() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleAcknowledge = () => {
    setIsAcknowledged(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md text-center">
        <h1 className="text-3xl font-bold">Thank You!</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center bg-gray-100">
        <AspectRatio ratio={16 / 9} className="w-full max-w-2xl">
          <img
            src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&dpr=2&q=80"
            alt="Generative AI"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold">Eli Cohen</h2>
          <p className="mt-2 text-lg">Your contribution to the open source community is invaluable.</p>
          <p className="mt-1 text-lg">We've found the generative AI repository you've worked on to be incredibly useful for generating UI components.</p>
        </div>
        <div className="mt-8">
          {isAcknowledged ? (
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-6 h-6 text-green-500" />
              <span className="text-green-500">Acknowledged</span>
            </div>
          ) : (
            <Button onClick={handleAcknowledge}>Acknowledge</Button>
          )}
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md text-center">
        <p className="text-sm">Made with ❤️ by the open source community</p>
      </footer>
    </div>
  );
}