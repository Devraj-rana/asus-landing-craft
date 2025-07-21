import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Bell, 
  Trophy, 
  Star,
  Sun,
  Moon,
  GraduationCap,
  Target,
  Zap
} from "lucide-react";

const Welcome = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const quickActions = [
    { icon: BookOpen, label: "My Courses", color: "bg-blue-500/20 text-blue-300" },
    { icon: Calendar, label: "Schedule", color: "bg-purple-500/20 text-purple-300" },
    { icon: Users, label: "Study Groups", color: "bg-indigo-500/20 text-indigo-300" },
    { icon: Trophy, label: "Achievements", color: "bg-amber-500/20 text-amber-300" }
  ];

  const recentActivity = [
    { title: "Assignment Due", subject: "Computer Science", time: "2 hours" },
    { title: "New Announcement", subject: "Mathematics", time: "4 hours" },
    { title: "Quiz Available", subject: "Physics", time: "1 day" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <GraduationCap className="h-16 w-16 text-white/90 animate-bounce" />
              <Zap className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {getGreeting()}!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-2">
            Welcome to <span className="font-semibold text-white">CampusConnect</span>
          </p>
          
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Star className="h-4 w-4 mr-2" />
            Student Portal
          </Badge>
          
          <div className="mt-4 text-white/60">
            {currentTime.toLocaleDateString()} • {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {quickActions.map((action, index) => (
            <Card 
              key={action.label}
              className={`p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-lg ${action.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <p className="text-white font-medium">{action.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activity & Stats */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Recent Activity */}
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-white/80 mr-2" />
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {recentActivity.map((item, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors animate-fade-in`}
                  style={{ animationDelay: `${600 + (index * 100)}ms` }}
                >
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/60 text-xs">{item.subject}</p>
                  </div>
                  <span className="text-white/60 text-xs">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
            <div className="flex items-center mb-4">
              <Target className="h-5 w-5 text-white/80 mr-2" />
              <h3 className="text-lg font-semibold text-white">Your Progress</h3>
            </div>
            <div className="space-y-4">
              <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
                <div className="flex justify-between text-white/80 text-sm mb-1">
                  <span>Courses Completed</span>
                  <span>8/12</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-2/3 animate-pulse"></div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
                <div className="flex justify-between text-white/80 text-sm mb-1">
                  <span>Assignment Score</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-11/12 animate-pulse"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="space-x-4">
            <Button 
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => navigate('/')}
            >
              Explore Dashboard
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;