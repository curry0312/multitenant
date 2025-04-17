import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";


export default function Home() {
  return (
   <div className="p-4 space-y-4">
      <h1>Hello World</h1>
      <Button variant="elevated">Click me</Button>
      <Progress value={33} />
      <Input placeholder="Enter your name" />
    </div>
  );
}
