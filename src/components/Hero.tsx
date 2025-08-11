import { ArrowRight, Play, TrendingUp, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float animation-delay-1000 blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float animation-delay-2000 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="text-gradient-hero">Compete.</span>{' '}
                <span className="text-gradient-hero">Learn.</span>{' '}
                <span className="text-gradient-hero">Conquer.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Weekly long contests on HackerRank and structured learning paths for beginners. 
                Polished, fast, and friendly — your journey to coding mastery starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link to="/contests">
                  <Button className="btn-hero group">
                    Join Next Week's Contest
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/sheets">
                  <Button className="btn-outline group">
                    Browse Beginner Sheets
                    <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-primary mb-2">500+</div>
                <div className="text-muted-foreground">Active Coders</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-primary mb-2">32</div>
                <div className="text-muted-foreground">Weekly Contests</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient-primary mb-2">15+</div>
                <div className="text-muted-foreground">Practice Sheets</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Contest Card */}
              <div className="card-float animate-float">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Weekly Contest</div>
                    <div className="text-sm text-muted-foreground">Live Now</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">Week 32</div>
                <div className="text-sm text-muted-foreground">187 participants</div>
                <div className="mt-4 w-full h-2 bg-primary-light rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-primary rounded-full animate-pulse-soft"></div>
                </div>
              </div>

              {/* Sheet Progress Card */}
              <div className="card-float animate-float mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Beginner DSA</div>
                    <div className="text-sm text-muted-foreground">30 Problems</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient-hero mb-2">75%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
                <div className="mt-4 w-full h-2 bg-secondary-light rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-secondary rounded-full"></div>
                </div>
              </div>

              {/* Community Card */}
              <div className="card-float animate-float col-span-2 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">Growing Community</div>
                      <div className="text-muted-foreground">Join passionate coders worldwide</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient-hero">500+</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-primary rounded-3xl animate-float animation-delay-500 opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-secondary rounded-3xl animate-float animation-delay-1500 opacity-20"></div>
          </div>
        </div>
      </div>

      {/* How it works anchor */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#how-it-works"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm mb-2">How it works</span>
          <ArrowRight className="h-5 w-5 rotate-90 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;