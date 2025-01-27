import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import styles from './Card.module.css'


export const SubjectCard = ({ subject, onSelect }) => {
const subjId = subject.id
  if (subjId % 12 === 1) {
    return (
      <div className={styles.card} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
            <span className={styles.text}>{subject.name}</span>
            <span className={styles.p}>{subject.description}</span>
            <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/first.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 2) {
    return (
      <div className={styles.card__green} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 3) {
    return (
      <div className={styles.card__black} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 12 === 4) {
    return (
      <div className={styles.card__green} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 5) {
    return (
      <div className={styles.card__black} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 12 === 6) {
    return (
      <div className={styles.card} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/first.svg' width={150}></img>
      </div>
    )
  }else if (subjId % 12 === 7) {
    return (
      <div className={styles.card} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
            <span className={styles.text}>{subject.name}</span>
            <span className={styles.p}>{subject.description}</span>
            <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/first.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 8) {
    return (
      <div className={styles.card__green} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 9) {
    return (
      <div className={styles.card__black} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 12 === 10) {
    return (
      <div className={styles.card__green} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target} /> Learn more</span>
        </div>
        <img className={styles.img} src='/second.svg' width={150}></img>
      </div>
    )
  } else if (subjId % 12 === 11) {
    return (
      <div className={styles.card__black} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text__main}>{subject.name}</span>
          <span className={styles.p__black}>{subject.description}</span>
          <span className={styles.span__black}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/third.svg' width={150}></img>
      </div> 
      )
  } else if (subjId % 12 === 0) {
    return (
      <div className={styles.card} onClick={() => onSelect(subject)}>
        <div className={styles.card__content}>
          <span className={styles.text}>{subject.name}</span>
          <span className={styles.p}>{subject.description}</span>
          <span className={styles.span}> <CircleArrowRight className={styles.white_target}/>Learn more</span>
        </div>
        <img className={styles.img} src='/first.svg' width={150}></img>
      </div>
    )
  }

};