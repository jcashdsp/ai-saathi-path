import { Button } from "@/components/ui/button";
import { BookOpen, Mail, MessageCircle, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">AI Seekho</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering Pakistan & South Asia with practical AI skills. 
              From computer basics to AI-powered businesses.
            </p>
            <div className="text-sm text-primary-foreground/60">
              🌍 Available in English with Urdu/Hindi support
            </div>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Learning Path</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#level1" className="hover:text-accent transition-colors">Computer Basics</a></li>
              <li><a href="#level2" className="hover:text-accent transition-colors">Talking to AI</a></li>
              <li><a href="#level3" className="hover:text-accent transition-colors">Workflows</a></li>
              <li><a href="#level4" className="hover:text-accent transition-colors">Real Projects</a></li>
              <li><a href="#level5" className="hover:text-accent transition-colors">Business & Earning</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Community</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#whatsapp" className="hover:text-accent transition-colors flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Group
              </a></li>
              <li><a href="#discord" className="hover:text-accent transition-colors">Discord Server</a></li>
              <li><a href="#facebook" className="hover:text-accent transition-colors">Facebook Community</a></li>
              <li><a href="#success" className="hover:text-accent transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#help" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </a></li>
              <li><a href="#feedback" className="hover:text-accent transition-colors">Send Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-primary-foreground/80">
                Get weekly tips, new lessons, and success stories from our community.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; 2024 AI Seekho. Empowering South Asia with AI skills.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;