import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';
import styles from './TopicsList.module.css';

export const TopicsList = ({ subject, onSelectTopic }) => {
  return (
    <div className={styles.topics_container}>
      <div className={styles.topics_card}>
        <div className={styles.topics_header}>
          <BookOpen className={styles.topics_icon} />
          <h2 className={styles.topics_title}>{subject.name}</h2>
        </div>
        <div className={styles.topics_list}>
          {subject.topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className={styles.topic_item}
            >
              <div className={styles.topic_content}>
                <ListChecks className={styles.topic_icon} />
                <span className={styles.topic_title}>{topic.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};