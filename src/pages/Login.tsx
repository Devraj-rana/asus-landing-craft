import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, BookOpen, GraduationCap } from "lucide-react";
import educationIllustration from "@/assets/education-illustration.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
    // Redirect to welcome page after login
    window.location.href = "/welcome";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 dark:from-blue-800 dark:via-purple-800 dark:to-blue-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjI3IiBjeT0iNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjQ3IiBjeT0iNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIyNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjI3IiBjeT0iMjciIHI9IjEiLz48Y2lyY2xlIGN4PSI0NyIgY3k9IjI3IiByPSIxIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjQ3IiByPSIxIi8+PGNpcmNsZSBjeD0iMjciIGN5PSI0NyIgcj0iMSIvPjxjaXJjbGUgY3g9IjQ3IiBjeT0iNDciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8">
          <div className="relative">
            <img 
              src={educationIllustration} 
              alt="Education illustration" 
              className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <GraduationCap size={40} className="text-yellow-300" />
              <h1 className="text-4xl font-bold font-inter">CampusConnect</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-md font-inter">
              Your gateway to academic excellence and campus life
            </p>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span className="font-inter">Learn</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap size={20} />
                <span className="font-inter">Grow</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-yellow-300"></span>
                <span className="font-inter">Succeed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap size={32} className="text-yellow-300" />
              <h1 className="text-3xl font-bold text-white font-inter">CampusConnect</h1>
            </div>
            <p className="text-blue-100 font-inter">Your gateway to academic excellence</p>
          </div>

          {/* Glassmorphic Login Card */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-white/10">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white font-inter">Welcome Back</h2>
                <p className="text-blue-100 font-inter">Sign in to your student portal</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-inter font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="backdrop-blur-md bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/50 transition-all duration-300 font-inter"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-inter font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="backdrop-blur-md bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/50 transition-all duration-300 font-inter"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <Label htmlFor="remember" className="text-sm text-blue-100 font-inter">
                      Remember me
                    </Label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-yellow-300 hover:text-yellow-200 transition-colors font-inter"
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 font-inter"
                >
                  Sign In to CampusConnect
                </Button>
              </form>

              <div className="text-center">
                <p className="text-blue-100 font-inter">
                  Don't have an account?{" "}
                  <button className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors">
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-blue-200 font-inter">
              Need help? Contact IT Support at{" "}
              <span className="text-yellow-300">support@campusconnect.edu</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;