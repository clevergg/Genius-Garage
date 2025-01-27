import styles from "./Main.module.css";
import { CourseDropdown } from "../components/CourseDropdown/CourseDropdown";
import { BackButton } from "../components/BackButton/BackButton.jsx";
import { SubjectCard } from "../components/SubjectCard/SubjectCard.jsx";
import { TopicsList } from "../components/TopicsList/TopicsList.jsx";
import { TopicContent } from "../components/TopicContent/TopicContent.jsx";
import { courses } from "../data/courses";
import { extractHeadings } from '../utils/content';
import React, { useState, useMemo } from 'react';


export function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
      setSearchQuery("");
    } else if (selectedSubject) {
      setSelectedSubject(null);
    }
  };

  const headings = useMemo(() => {
    if (!selectedTopic) return [];
    return extractHeadings(selectedTopic.content);
  }, [selectedTopic]);

  const filteredHeadings = useMemo(() => {
    if (!searchQuery) return headings;
    return headings.filter((heading) =>
      heading.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [headings, searchQuery]);

  const scrollToHeading = (headingText) => {
    const element = document.getElementById(
      headingText.replace(/\s+/g, "-").toLowerCase()
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.text_container}>
          <h1 className={styles.h1}>
            На нашем сайте вы можете выбрать курс обучения и получить материалы
            по предметам.
          </h1>
          <p className={styles.main_text}>
            Каждый курс включает в себя разнообразные предметы, которые помогут
            вам глубже понять предмет и подготовят вас к реальным вызовам в
            профессиональной среде. Выбирайте предметы, которые соответствуют
            вашим интересам и целям!
          </p>
          </div>
        </div>
        <div className={styles.main__image}>
          <img className={styles.image_main} src="Illustration.svg" alt="" width={950} />
        </div>
      </section>
      <section className={styles.ButtonSection}>
      {(selectedSubject || selectedTopic) && (
            <BackButton onClick={handleBack} />
          )}

          {!selectedSubject && (
            <>
              <CourseDropdown
                isOpen={isOpen}
                selectedCourse={selectedCourse}
                courses={courses}
                onToggle={() => setIsOpen(!isOpen)}
                onSelect={(course) => {
                  setSelectedCourse(course);
                  setIsOpen(false);
                }}
              />
              {selectedCourse && (   
                  <div className={styles.subjectsgrid}>
                  {selectedCourse.subjects.map((subject) => (
                 <SubjectCard key={subject.id}
                subject={subject} 
                onSelect={setSelectedSubject} 
              /> ))} 
            </div>
              )} 
            </>
          )}

          {selectedSubject && !selectedTopic && (
            <div className={styles.topic_container}>
            <TopicsList
              subject={selectedSubject}
              onSelectTopic={setSelectedTopic}
            />
            </div>
          )}

          {selectedTopic && (
            <TopicContent
              topic={selectedTopic}
              searchQuery={searchQuery}
              filteredHeadings={filteredHeadings}
              onSearchChange={setSearchQuery}
              onHeadingClick={scrollToHeading}
            />
          )}
      </section>
    </div>
  );
}
