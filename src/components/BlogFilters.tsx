 
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Filter } from 'lucide-react';

export type SortOption = 'recent' | 'oldest' | 'readTime' | 'title';
export type CategoryFilter = string | 'all';

interface BlogFiltersProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  categoryFilter: CategoryFilter;
  setCategoryFilter: (category: CategoryFilter) => void;
  categories: string[];
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  sortBy,
  setSortBy,
  categoryFilter,
  setCategoryFilter,
  categories,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <Toggle 
          pressed={isOpen} 
          onPressedChange={setIsOpen}
          aria-label="Toggle filters"
          className="flex items-center"
        >
          <Filter size={16} className="mr-2" />
          Filters
        </Toggle>
      </div>

      {isOpen && (
        <div className="bg-card border border-border rounded-lg p-4 mb-8 animate-slide-down shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Sort By</h3>
              <RadioGroup 
                value={sortBy} 
                onValueChange={(value) => setSortBy(value as SortOption)}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recent" id="recent" />
                  <Label htmlFor="recent">Most Recent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oldest" id="oldest" />
                  <Label htmlFor="oldest">Oldest First</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="readTime" id="readTime" />
                  <Label htmlFor="readTime">Read Time</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="title" id="title" />
                  <Label htmlFor="title">Alphabetical</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">Filter by Category</h3>
              <RadioGroup 
                value={categoryFilter} 
                onValueChange={(value) => setCategoryFilter(value as CategoryFilter)}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Categories</Label>
                </div>
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <RadioGroupItem value={category} id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
