import React from 'react';
import {ArrowLeft} from 'lucide-react';
import styles from './BackButton.module.css';

export const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.back_button}>
      <ArrowLeft className={styles.back_button_icon} />
      Back
    </button> 
  );
};