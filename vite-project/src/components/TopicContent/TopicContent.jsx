import React from 'react';
import { Search } from 'lucide-react';
import { renderContent } from '../../utils/content';
import  './TopicContent.css';

export const TopicContent = ({
  topic,
  searchQuery,
  filteredHeadings,
  onSearchChange,
  onHeadingClick,
}) => {
  return (
    <div className="content-container">
      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Поиск по подтемам..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        {searchQuery && (
          <div className="search-results">
            {filteredHeadings.map((heading, index) => (
              <button
                key={index}
                onClick={() => onHeadingClick(heading.text)}
                className="search-result-item">
                <span className="search-result-hash">{'#'.repeat(heading.level)}</span>{' '}
                {heading.text}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="content-wrapper">
        <div className="content-text">
          <div 
            className="content-body"
            dangerouslySetInnerHTML={{ __html: renderContent(topic.content) }}
          />
        </div>
      </div>
    </div>
  );
};