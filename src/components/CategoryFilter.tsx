
import { useState } from 'react';
import { categories } from '../data/events';

interface CategoryFilterProps {
  selectedCategory: string;
  onChange: (category: string) => void;
  className?: string;
}

const CategoryFilter = ({ selectedCategory, onChange, className = "" }: CategoryFilterProps) => {
  const allCategories = [{ value: 'all', label: 'All Events', icon: '🌟' }, ...categories];
  
  return (
    <div className={`w-full overflow-x-auto py-2 scrollbar-hide ${className}`}>
      <div className="flex space-x-2 min-w-max px-1">
        {allCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => onChange(category.value)}
            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap hover-lift ${
              selectedCategory === category.value
                ? 'bg-primary text-white shadow-md'
                : 'bg-secondary hover:bg-secondary/80 text-foreground'
            }`}
          >
            <span className="mr-2" aria-hidden="true">
              {category.icon}
            </span>
            <span className="font-medium text-sm">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
