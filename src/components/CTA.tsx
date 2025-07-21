import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Main CTA */}
          <div className="mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              🚀 Ready to Get Started?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Transform Your Digital Experience
              <span className="block bg-brand-gradient bg-clip-text text-transparent">
                Starting Today
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join millions of satisfied customers who have chosen ASUS for their computing needs. 
              Experience the perfect blend of performance, innovation, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary/30 text-foreground hover:bg-primary/10">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {/* Sales */}
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:bg-card/30">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sales Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Need help choosing the right product? Our experts are here to help.
              </p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                1-800-ASUS-NOW
              </Button>
            </div>

            {/* Technical */}
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:bg-card/30">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get technical assistance and product support from our certified team.
              </p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                support@asus.com
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:bg-card/30 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Solutions</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Custom solutions for businesses with volume discounts and dedicated support.
              </p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                Contact Enterprise
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">Warranty Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;