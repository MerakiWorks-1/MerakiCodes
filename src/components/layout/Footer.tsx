import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-primary">
                MerakiCodes
              </span>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Join our weekly long contests and master programming fundamentals with 
              our beginner-friendly sheets. Code with passion, compete with purpose.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="p-3 rounded-2xl bg-white/80 border border-primary/20 text-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-2xl bg-white/80 border border-primary/20 text-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-2xl bg-white/80 border border-primary/20 text-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Contests', href: '/contests' },
                { name: 'Sheets', href: '/sheets' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Beginner Path', href: '/sheets/beginner' },
                { name: 'Contest Rules', href: '/contests/rules' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground flex items-center">
            © 2024 MerakiCodes. Made with 
            <Heart className="h-4 w-4 mx-1 text-secondary fill-current" />
            for coders.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Powered by passion • Built with React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;