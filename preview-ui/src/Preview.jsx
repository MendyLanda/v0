import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function ThankYouPage() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <Card className="max-w-lg mx-auto bg-gray-800 border-gray-700">
        <CardContent className="flex flex-col items-center justify-center text-center">
          <Avatar className="mb-4">
            <AvatarImage src="https://github.com/Yuyz0112.png" alt="Eli Cohen" />
            <AvatarFallback>Eli Cohen</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-2">Eli Cohen</h1>
          <p className="mb-4">Thank you for your incredible contribution to the open source community!</p>
          <p>Your work on the generative AI for UI has inspired and enabled countless developers.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          {!isAcknowledged ? (
            <Button variant="outline" className="mt-4" onClick={() => setIsAcknowledged(true)}>
              Acknowledge
            </Button>
          ) : (
            <div className="flex items-center mt-4">
              <Check className="w-6 h-6 mr-2" />
              Acknowledged
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}