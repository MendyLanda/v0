import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Home, Twitter, Share2, Check, Star, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function ThankYouPage() {
  const [feedback, setFeedback] = useState('');

  return (
    (<TooltipProvider>
      <div className="flex flex-col h-screen">
        <header className="bg-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Thank You!</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://github.com" className="text-gray-600 hover:text-gray-800">
                    <div className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                    <Twitter className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger>
                      <Share2 className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                    </TooltipTrigger>
                    <TooltipContent>
                      Share this project
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="container mx-auto">
            <section className="text-center my-12">
              <Check className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-3xl font-bold mt-4">You've Found a Gem!</h2>
              <p className="text-gray-600 mt-2">A cool generative AI open source repo for generating UI</p>
            </section>
            <section className="my-12">
              <Card>
                <CardHeader>
                  <CardTitle>Generative UI Project</CardTitle>
                  <CardDescription>Open Source Repository</CardDescription>
                </CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1519995451813-39e29e054914?w=800&dpr=2&q=80"
                    alt="Generative AI"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <CardContent>
                  <p>This project uses AI to generate beautiful, unique UI components for your projects. It's easy to use and completely open source!</p>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-2">
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">Open Source</Badge>
                    <Badge variant="outline">UI Generation</Badge>
                  </div>
                </CardFooter>
              </Card>
            </section>
            <section className="my-12">
              <h3 className="text-xl font-bold mb-4">Community Love</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <Avatar>
                    <AvatarImage src="https://github.com/octocat.png" />
                    <AvatarFallback>OC</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold mt-2">Octocat</h4>
                  <p className="text-gray-600">"This project saved me hours of work. Absolutely love it!"</p>
                  <div className="flex mt-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <Avatar>
                    <AvatarImage src="https://github.com/octocat.png" />
                    <AvatarFallback>OC</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold mt-2">DevGirl</h4>
                  <p className="text-gray-600">"The AI-generated components are so unique and beautiful. A must-have for any developer."</p>
                  <div className="flex mt-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <Avatar>
                    <AvatarImage src="https://github.com/octocat.png" />
                    <AvatarFallback>OC</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold mt-2">CodeMaster</h4>
                  <p className="text-gray-600">"Integrating these AI components into my projects has been a game-changer."</p>
                  <div className="flex mt-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              </div>
            </section>
            <section className="my-12">
              <h3 className="text-xl font-bold mb-4">Your Feedback</h3>
              <div className="bg-white p-6 rounded shadow">
                <Tabs defaultValue="feedback" className="w-full">
                  <TabsList>
                    <TabsTrigger value="feedback">Leave a Comment</TabsTrigger>
                    <TabsTrigger value="bug">Report a Bug</TabsTrigger>
                  </TabsList>
                  <TabsContent value="feedback">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="feedback">Your Comment</Label>
                        <Textarea
                          id="feedback"
                          placeholder="What do you think about the project?"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <Button>Submit Feedback</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="bug">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bug">Bug Description</Label>
                        <Input
                          id="bug"
                          placeholder="Describe the bug you found"
                          className="mt-1"
                        />
                      </div>
                      <Button>Report Bug</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </div>
        </main>
        <footer className="bg-white p-4 shadow-md">
          <div className="container mx-auto text-center">
            <p className="text-gray-600">Made with <Heart className="inline w-4 h-4 text-red-500" /> by the Open Source Community</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>)
  );
}