import { BookOpen, Download, ExternalLink, Clock, TrendingUp, Filter, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const sheetsData = [
  {
    id: "sheet-beg-01",
    title: "Beginner DSA Path — 30 problems",
    description: "Curated problems from 0→1; focused on arrays, strings, and basic greedy.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example1",
    difficulty: "Beginner",
    topics: ["Arrays", "Strings", "Greedy"],
    estimatedTime: "2-3 weeks",
    problems: 30,
    followers: 245,
    rating: 4.8,
    progress: 0
  },
  {
    id: "sheet-beg-02",
    title: "String Manipulation Mastery",
    description: "Master string algorithms with 25 carefully selected problems covering all patterns.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example2",
    difficulty: "Beginner",
    topics: ["Strings", "Two Pointers"],
    estimatedTime: "1-2 weeks",
    problems: 25,
    followers: 189,
    rating: 4.6,
    progress: 0
  },
  {
    id: "sheet-int-01",
    title: "Dynamic Programming Fundamentals",
    description: "Build DP intuition with classic problems arranged in progressive difficulty.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example3",
    difficulty: "Intermediate",
    topics: ["Dynamic Programming", "Recursion"],
    estimatedTime: "3-4 weeks",
    problems: 40,
    followers: 312,
    rating: 4.9,
    progress: 0
  },
  {
    id: "sheet-beg-03",
    title: "Binary Search & Two Pointers",
    description: "Master efficient searching techniques with practical implementations.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example4",
    difficulty: "Beginner",
    topics: ["Binary Search", "Two Pointers"],
    estimatedTime: "2 weeks",
    problems: 20,
    followers: 156,
    rating: 4.7,
    progress: 0
  },
  {
    id: "sheet-int-02",
    title: "Tree & Graph Algorithms",
    description: "Comprehensive coverage of tree traversals, graph algorithms, and applications.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example5",
    difficulty: "Intermediate",
    topics: ["Trees", "Graphs", "DFS", "BFS"],
    estimatedTime: "4-5 weeks",
    problems: 45,
    followers: 278,
    rating: 4.8,
    progress: 0
  },
  {
    id: "sheet-adv-01",
    title: "Advanced Data Structures",
    description: "Segment trees, Fenwick trees, and other advanced structures for competitive programming.",
    downloadUrl: "https://docs.google.com/spreadsheets/d/example6",
    difficulty: "Advanced",
    topics: ["Segment Trees", "Fenwick Trees", "Advanced DS"],
    estimatedTime: "6-8 weeks",
    problems: 35,
    followers: 94,
    rating: 4.9,
    progress: 0
  }
];

const SheetCard = ({ sheet }: { sheet: typeof sheetsData[0] }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="card-float group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-all">
              {sheet.title}
            </h3>
            <p className="text-muted-foreground mt-1">{sheet.description}</p>
          </div>
        </div>
        <Badge className={getDifficultyColor(sheet.difficulty)}>
          {sheet.difficulty}
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient-primary">{sheet.problems}</div>
          <div className="text-sm text-muted-foreground">Problems</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient-secondary">{sheet.followers}</div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-xl font-bold text-foreground">{sheet.rating}</span>
          </div>
          <div className="text-sm text-muted-foreground">Rating</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{sheet.estimatedTime}</span>
          </div>
          <div className="text-sm text-muted-foreground">Est. Time</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {sheet.topics.map((topic) => (
          <Badge key={topic} variant="outline" className="text-xs">
            {topic}
          </Badge>
        ))}
      </div>

      {sheet.progress > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">{sheet.progress}%</span>
          </div>
          <div className="w-full h-2 bg-primary-light rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${sheet.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button
          className="btn-hero"
          onClick={() => window.open(sheet.downloadUrl, '_blank')}
        >
          Open Sheet
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

const Sheets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredSheets = sheetsData.filter(sheet => {
    const matchesSearch = sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sheet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sheet.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = selectedDifficulty === 'All' || sheet.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient-hero mb-6">
            Beginner-Friendly Sheets
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured learning paths with carefully curated problems. Start your coding journey 
            with our beginner-friendly sheets designed to build strong fundamentals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search sheets by title, description, or topics..."
              className="pl-10 h-12 text-lg rounded-2xl border-primary/20 focus:border-primary/40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(difficulty)}
                className="rounded-2xl"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Beginner Path CTA */}
        <div className="card-gradient mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-glow">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            New to Programming?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with our recommended beginner path that takes you from zero to confident programmer 
            with a structured approach to learning.
          </p>
          <Button className="btn-secondary">
            Start Beginner Path
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredSheets.length} sheet{filteredSheets.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedDifficulty !== 'All' && ` in ${selectedDifficulty} difficulty`}
          </p>
        </div>

        {/* Sheets Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredSheets.map((sheet) => (
            <SheetCard key={sheet.id} sheet={sheet} />
          ))}
        </div>

        {/* No Results */}
        {filteredSheets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">No sheets found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedDifficulty('All');
              }}
              className="btn-outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sheets;