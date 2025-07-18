import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essential",
    price: "$999",
    period: "/device",
    description: "Perfect for everyday computing and productivity",
    features: [
      "Intel Core i5 Processor",
      "8GB RAM, 256GB SSD",
      "14-inch Full HD Display",
      "Windows 11 Home",
      "1 Year Warranty",
      "Basic Support"
    ],
    popular: false,
    cta: "Choose Essential"
  },
  {
    name: "Professional",
    price: "$1,599",
    period: "/device",
    description: "Ideal for business users and content creators",
    features: [
      "Intel Core i7 Processor",
      "16GB RAM, 512GB SSD",
      "15.6-inch 4K OLED Display",
      "Windows 11 Pro",
      "2 Year Warranty",
      "Priority Support",
      "Advanced Security Features",
      "Business Tools Suite"
    ],
    popular: true,
    cta: "Choose Professional"
  },
  {
    name: "Ultimate",
    price: "$2,499",
    period: "/device",
    description: "Maximum performance for gaming and creative work",
    features: [
      "Intel Core i9 Processor",
      "32GB RAM, 1TB SSD",
      "17-inch 4K 120Hz Display",
      "Windows 11 Pro",
      "3 Year Warranty",
      "24/7 Premium Support",
      "Gaming Optimization",
      "Creator Tools Bundle",
      "RGB Customization",
      "Liquid Cooling System"
    ],
    popular: false,
    cta: "Choose Ultimate"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            💰 Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Choose Your Perfect Setup
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From everyday computing to professional workstations, find the ASUS device 
            that matches your needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:shadow-card hover:-translate-y-2 animate-fade-in-up ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 lg:scale-110"
                  : "border-border/50 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>

              {/* Background Gradient for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-brand-gradient opacity-5 rounded-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">
            All plans include free shipping, setup assistance, and our satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              Compare All Features
            </Button>
            <Button variant="ghost" className="text-primary">
              Need Help Choosing? Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;