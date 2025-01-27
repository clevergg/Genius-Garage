import React from 'react';
import styles from "./Developers.module.css"
import { Github } from 'lucide-react';
import { Header } from '../header/Header';

const Developers = () => {
    return (
    <div className={styles.body}>
        <main>
        <Header/>
    <div className={styles.card_general}>

        <div className={styles.card_container}>

            <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Artem (clevergg) Gorbunov Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/clevergg', '_blank')}><Github/></button>
                </div>
                <hr></hr>
                <span className={styles.spanText}>Моё знакомство с программированием началось с желания создавать и прогрессировать в своих навыках. Я начал с изучения HTML, CSS и JavaScript и оно меня быстро увлекло. Теперь я стремлюсь к новым знаниям и карьерному росту, превращая идеи в реальность.</span>
            </div>

       
       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Dmitriy (RENEE) Zelenin<br></br> Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/ReeneQo', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span className={styles.spanText}>Мне 17 лет и я студент второго курса Хекслет. Мое знакомство с программированием началось в 2021 году c python, и затем в 2023 году я пришел в хекслет колледж на 1 курс и там началась история моего полноценного развития в программировании, и сейчас на hakatoon я хочу применить все навыки которые изучил.</span>
       </div>
       
       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}>Stepan (ierumi) Starostin Developer</span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/ierumi', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span className={styles.spanText}>Написал хуевый футер</span>
        </div>

       </div>

       <div className={styles.card_container2}>

       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}> Valeriy (valeron1380) Erushev Captain CEO </span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/valeron1380', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span className={styles.spanText}>Мне 17 лет, я студент второго курса 
"Хекслет колледжа". Меня всегда вдохновляло
изучение и создание чего - то нового,
поэтому я решил связать свою жизнь
с этим делом. Вместе со своими
одногруппниками мы решили принять
 участие в конкурсе "OpenHackaton" и 
разработать этот сайт в команде
</span>
       </div>

       <div className={styles.card_main}>
                <div className={styles.names}>
                    <img className={styles.card_image} src="/inkognito.svg" alt="" />
                    <span className={styles.card_text}> Kirill (SAGZZad) Litavrin<br></br> Developer </span>
                    <button className={styles.git_button} onClick={() => window.open('https://github.com/SAGZZad', '_blank')}><Github/></button>
                </div>
            <hr></hr>
            <span className={styles.spanText}>Моё знакомство с программированием началось
с желания создавать и прогрессировать в своих навыках.
 Я начал с изучения HTML, CSS и JavaScript и оно меня
 быстро увлекло. Теперь я стремлюсь к новым знаниям
 и карьерному росту, превращая идеи в реальность.
</span>
       </div>
       </div>
    </div>
        </main>

       <div>
        <h1 className={styles.h1_dev}>Developers</h1>
       </div>
    
    </div>
    )
};

export default Developers;
