import { Book } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Book className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">
          OrdersBook
        </h1>
      </div>
    </div>
  );
};

export default Logo;