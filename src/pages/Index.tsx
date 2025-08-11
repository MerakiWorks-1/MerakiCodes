import Hero from '@/components/Hero';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Calendar, BookOpen, TrendingUp, Users, Code2, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-hero mb-6">
              How MerakiCodes Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, effective approach to building your programming skills through contests and structured practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center card-float">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Weekly Contests</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our 7-day long contests on HackerRank every week. Flexible timing lets you solve at your own pace while competing with peers.
              </p>
            </div>
            
            <div className="text-center card-float">
              <div className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Practice Sheets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access curated problem sets organized by topic and difficulty. Perfect for systematic learning and skill building.
              </p>
            </div>
            
            <div className="text-center card-float">
              <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Track Progress</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your improvement over time with detailed progress tracking and personalized learning recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contest Preview */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-secondary text-secondary-foreground">Live Now</Badge>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                This Week's Contest
              </h3>
              <h4 className="text-2xl font-semibold text-gradient-primary mb-4">
                Meraki Long — Week 32
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Join 187+ participants in this week's challenge featuring carefully selected DSA problems. 
                Contest runs until January 21st with problems ranging from 100-1200 difficulty.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">5</div>
                  <div className="text-sm text-muted-foreground">Days Left</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">187</div>
                  <div className="text-sm text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-primary">6</div>
                  <div className="text-sm text-muted-foreground">Problems</div>
                </div>
              </div>
              <Link to="/contests">
                <Button className="btn-hero">
                  Join Contest Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Contest Card Visual */}
            <div className="card-float">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Meraki Long — Week 32</div>
                    <div className="text-sm text-muted-foreground">Live Contest</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm text-secondary font-medium">Live</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <div className="text-lg font-bold text-gradient-primary">187</div>
                  <div className="text-xs text-muted-foreground">Registered</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gradient-primary">5d</div>
                  <div className="text-xs text-muted-foreground">Remaining</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gradient-primary">6</div>
                  <div className="text-xs text-muted-foreground">Problems</div>
                </div>
              </div>
              <Button className="w-full btn-outline">
                View Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sheets Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Sheet Card Visual */}
            <div className="order-2 lg:order-1">
              <div className="card-float">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Beginner DSA Path</div>
                    <div className="text-sm text-muted-foreground">30 Problems</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-gradient-secondary">245</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold">4.8</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gradient-secondary">2-3w</div>
                    <div className="text-xs text-muted-foreground">Est. Time</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Arrays</Badge>
                  <Badge variant="outline" className="text-xs">Strings</Badge>
                  <Badge variant="outline" className="text-xs">Greedy</Badge>
                </div>
                <Button className="w-full btn-secondary">
                  Start Learning
                </Button>
              </div>
            </div>
            
            {/* Sheet Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-glow">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Structured Learning Paths
              </h3>
              <h4 className="text-2xl font-semibold text-gradient-secondary mb-4">
                Beginner DSA Path — 30 Problems
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Start your programming journey with our most popular sheet. Carefully curated problems 
                covering arrays, strings, and basic greedy algorithms with clear progression.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Practice Sheets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Total Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-secondary">4.8★</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </div>
              </div>
              <Link to="/sheets">
                <Button className="btn-secondary">
                  Browse All Sheets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Be part of a supportive community of learners and experienced programmers helping each other grow.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">32</div>
              <div className="text-white/80">Contests Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Practice Sheets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contests">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold text-lg shadow-glow">
                Join Next Contest
              </Button>
            </Link>
            <Link to="/sheets">
              <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
