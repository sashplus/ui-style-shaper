import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold text-primary tracking-tight">Login</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-secondary text-base">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-glass border-0 h-14 text-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-secondary text-base">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-glass border-0 h-14 text-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-primary pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        <div className="text-right">
          <button
            type="button"
            className="text-secondary hover:text-primary transition-colors text-sm"
          >
            Forgot password?
          </button>
        </div>
        
        <Button 
          type="submit" 
          variant="login"
          className="w-full h-14 text-lg font-medium"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;