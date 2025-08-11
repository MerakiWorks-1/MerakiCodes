import { Calendar, Clock, Users, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const contestsData = [
  {
    id: "wkly-001",
    title: "Meraki Long — Week 32",
    start: "2025-01-15T00:00:00+05:30",
    end: "2025-01-21T23:59:59+05:30",
    externalUrl: "https://www.hackerrank.com/contests/meraki-week32",
    tags: ["DSA", "100–1200"],
    participants: 187,
    status: "live",
    description: "Weekly long contest featuring carefully curated DSA problems for skill building."
  },
  {
    id: "wkly-002",
    title: "Meraki Long — Week 33",
    start: "2025-01-22T00:00:00+05:30",
    end: "2025-01-28T23:59:59+05:30",
    externalUrl: "https://www.hackerrank.com/contests/meraki-week33",
    tags: ["DSA", "200–1500"],
    participants: 0,
    status: "upcoming",
    description: "Next week's challenge with increased difficulty range for intermediate programmers."
  },
  {
    id: "wkly-000",
    title: "Meraki Long — Week 31",
    start: "2025-01-08T00:00:00+05:30",
    end: "2025-01-14T23:59:59+05:30",
    externalUrl: "https://www.hackerrank.com/contests/meraki-week31",
    tags: ["DSA", "100–1000"],
    participants: 234,
    status: "completed",
    description: "Previous week's contest with excellent participation and challenging problems."
  }
];

const ContestCard = ({ contest }: { contest: typeof contestsData[0] }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-secondary text-secondary-foreground';
      case 'upcoming': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getTimeRemaining = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) {
      const diff = start.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return `Starts in ${days} days`;
    } else if (now >= start && now <= end) {
      const diff = end.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return `${days}d ${hours}h remaining`;
    } else {
      return 'Contest ended';
    }
  };

  return (
    <div className="card-float group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-all">
              {contest.title}
            </h3>
            <p className="text-muted-foreground">{contest.description}</p>
          </div>
        </div>
        <Badge className={getStatusColor(contest.status)}>
          {contest.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">
            {formatDate(contest.start)} - {formatDate(contest.end)}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="text-sm">
            {getTimeRemaining(contest.start, contest.end)}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span className="text-sm">{contest.participants} participants</span>
        </div>
        <div className="flex items-center space-x-2">
          {contest.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          className={contest.status === 'live' ? 'btn-hero' : 'btn-outline'}
          onClick={() => window.open(contest.externalUrl, '_blank')}
        >
          {contest.status === 'live' ? 'Join Contest' : 
           contest.status === 'upcoming' ? 'Register' : 'View Results'}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        
        {contest.status === 'live' && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm text-secondary font-medium">Live Now</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Contests = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient-hero mb-6">
            Weekly Long Contests
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our weekly HackerRank contests designed to improve your problem-solving skills. 
            Each contest runs for 7 days, giving you flexibility to participate at your own pace.
          </p>
        </div>

        {/* Contest Grid */}
        <div className="grid gap-8 mb-16">
          {contestsData.map((contest) => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>

        {/* Info Section */}
        <div className="card-gradient text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            How Our Contests Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Schedule</h3>
              <p className="text-muted-foreground">
                New contests start every Monday and run for 7 days, giving you flexibility to participate.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Building</h3>
              <p className="text-muted-foreground">
                Carefully curated problems that progressively build your algorithmic thinking skills.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Join a supportive community of learners and compete in a friendly environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;