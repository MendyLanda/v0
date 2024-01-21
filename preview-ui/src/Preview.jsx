import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Check, Heart, Home } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ThankYouPage() {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  return (
    (<TooltipProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-500">
        <ScrollArea className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <Card>
            <CardHeader className="flex flex-col items-center justify-center text-center">
              <Avatar className="mb-4">
                <AvatarImage src="https://github.com/EliCohen.png" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
              <CardTitle className="text-4xl font-bold text-gray-800">Eli Cohen</CardTitle>
              <CardDescription className="text-xl text-gray-600">
                Champion of Open Source
              </CardDescription>
              <Badge variant="outline" className="mt-2">
                Generative AI Enthusiast
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <Alert className="mb-4">
                <Check className="h-5 w-5 text-green-500" />
                <AlertTitle className="font-semibold">Thank You!</AlertTitle>
                <AlertDescription>
                  Your contribution to the community is invaluable.
                </AlertDescription>
              </Alert>
              <p className="mb-4">
                Your discovery of the generative AI repo has sparked a wave of creativity and
                innovation. We are all incredibly grateful for your keen eye and willingness to
                share such a cool tool with us.
              </p>
              <AspectRatio ratio={16 / 9} className="my-4">
                <iframe
                  title="Generative AI Video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md"
                />
              </AspectRatio>
              <p>
                Let's continue to build amazing things together. Your efforts have not gone
                unnoticed, and we look forward to what you'll find next!
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setIsAcknowledged(true)}
              >
                {isAcknowledged ? 'Acknowledged' : 'Acknowledge'}
              </Button>
              <div className="flex items-center mt-4 space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span>Made with love for Eli Cohen</span>
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-8 h-8 mt-4 text-gray-800 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Check out the repo</p>
                </TooltipContent>
              </Tooltip>
            </CardFooter>
          </Card>
        </ScrollArea>
      </div>
    </TooltipProvider>)
  );
}