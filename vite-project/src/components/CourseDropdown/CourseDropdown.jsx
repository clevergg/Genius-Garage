import React from 'react';
import styles from './CourseDropdown.module.css';
import { ArrowDown } from 'lucide-react';
export const CourseDropdown = ({
  isOpen,
  selectedCourse,
  courses,
  onToggle,
  onSelect, 
}) => {
  return (
    <div className={styles.course_dropdown}>
      <button onClick={onToggle} className={styles.dropdown_button}>
        <span className={styles.dropdown_text}>
          {selectedCourse ? selectedCourse.name : 'Выберите курс'} 
        </span>
        <ArrowDown className={`${styles.ArrowVniz} ${isOpen ? styles.ArrowVverx: ''}`}/>
      </button>
 
      {isOpen && (
        <div className={styles.dropdown_menu}>
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelect(course)}
              className={styles.dropdown_item}
            >
              {course.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};