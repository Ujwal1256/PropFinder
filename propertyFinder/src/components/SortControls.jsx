import React from 'react';
import { Filter } from 'lucide-react';

export function SortControls({ filters, onFiltersChange, onToggleFilters, resultCount }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* Results Count */}
      <div className="text-gray-600">
        <span className="font-semibold">{resultCount}</span> {resultCount === 1 ? 'property' : 'properties'} found
      </div>

      <div className="flex items-center space-x-4">
        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={filters.sortBy || 'date-newest'}
            onChange={(e) => onFiltersChange({
              ...filters,
              sortBy: e.target.value
            })}
            className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="date-newest">Newest First</option>
            <option value="date-oldest">Oldest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={onToggleFilters}
          className="lg:hidden flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}