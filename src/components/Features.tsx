import { Cpu, Shield, Zap, Users, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Cutting-Edge Performance",
    description: "Experience unmatched speed with our latest processors and advanced cooling systems designed for peak performance."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Military-grade security features including biometric authentication and hardware-level encryption for complete protection."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Blazing-fast SSD storage and optimized software ensure instant boot times and seamless multitasking capabilities."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Ergonomic designs crafted based on extensive user research to provide comfort during extended usage sessions."
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 worldwide customer support and service centers in over 50 countries for peace of mind wherever you are."
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Internationally recognized for design excellence and innovation, winning multiple industry awards year after year."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-feature-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            ✨ Why Choose ASUS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Built for Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the features that make ASUS the preferred choice for professionals, 
            gamers, and creators worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Ready to experience the ASUS difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-elegant">
              View All Products
            </button>
            <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;