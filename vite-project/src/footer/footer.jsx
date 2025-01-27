import styles from "../footer/footer.module.css";


export function Footer() {
    return (
    <footer className={styles.footer_main}>
    <div className={styles.footer_flexbox}>
        <div className={styles.form_text}>
            <div className={styles.footer_h3}>Contact us:</div>
            <p className={styles.p}>Email: garagegenius@gmail.com</p>
            <p className={styles.p}>phone: +7 901 588 1244</p>
            <p className={styles.p}>Address: Moscow City</p>
        </div>
    </div>
    <p className={styles.form_copyright}>&copy; 2025 Garage Genius. All Rights Reserved</p>
    </footer>
    ) 
}