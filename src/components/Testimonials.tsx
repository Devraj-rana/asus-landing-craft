import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Design Studio Pro",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400",
    content: "ASUS has transformed our workflow. The performance and reliability are unmatched. Our team's productivity has increased by 40% since switching to ASUS workstations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Professional Gamer",
    company: "ESports Team Alpha",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    content: "The gaming performance is incredible. Zero lag, stunning visuals, and the build quality is premium. ASUS understands what gamers truly need.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    company: "Tech Innovations Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content: "Perfect for development work. The keyboard is comfortable for long coding sessions, and the display quality makes debugging a breeze. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            💬 Customer Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who have elevated their work and play with ASUS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-fade-in-up relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/20"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25M+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;