const CardsTemp = () => {
    return ( 
    <div className={styles.card__main}>

      <div className={styles.card}>
        <div className={styles.card__white__content}>
          <p className={styles.text}>Search engine</p>
          <p className={styles.p}>optimization</p>
          <div className={styles.target}>
            <img className={styles.white_target} src='/whitetarget.png' width={60}></img>
            <span className={styles.span__white}> Learn more</span>
          </div>
        </div>
        <img className={styles.white__image} src='/first.svg' width={200}></img>
      </div>

      <div className={styles.card__green}>
        <div className={styles.card__green__content}>
          <p className={styles.text__green}>Pay-per-click</p>
          <p className={styles.p__green}>advertising</p>
          <div className={styles.target}>
            <img className={styles.green_target} src='/greentarget.png' width={60}></img>
            <span className={styles.span__green}> Learn more</span>
          </div>
        </div>
        <img className={styles.green__image} src='/second.svg' width={200}></img>
      </div>

      <div className={styles.card__black}>
        <div className={styles.card__black__content}>
          <p className={styles.text__black}>Social Media</p>
          <p className={styles.p__black}>Marketing</p>
          <div className={styles.target}>
            <img className={styles.black_target} src='/target.png' width={60}></img>
            <span className={styles.span__black}> Learn more</span>
          </div>
        </div>
        <img className={styles.black__image} src='/third.svg' width={200}></img>
      </div>

      <div className={styles.card}>
        <div className={styles.card__white__content}>
          <p className={styles.text}>Search engine</p>
          <p className={styles.p}>optimization</p>
          <div className={styles.target}>
            <img className={styles.white_target} src='/whitetarget.png' width={60}></img>
            <span className={styles.span__white}> Learn more</span>
          </div>
        </div>
        <img className={styles.white__image} src='/first.svg' width={200}></img>
      </div>

      <div className={styles.card__green1}>
        <div className={styles.card__green__content}>
          <p className={styles.text__green}>Pay-per-click</p>
          <p className={styles.p__green}>advertising</p>
          <div className={styles.target}>
            <img className={styles.green_target} src='/greentarget.png' width={60}></img>
            <span className={styles.span__green}> Learn more</span>
          </div>
        </div>
        <img className={styles.green__image} src='/second.svg' width={200}></img>
      </div>

      <div className={styles.card__black}>
        <div className={styles.card__black__content}>
          <p className={styles.text__black}>Social Media</p>
          <p className={styles.p__black}>Marketing</p>
          <div className={styles.target}>
            <img className={styles.black_target} src='/target.png' width={60}></img>
            <span className={styles.span__black}> Learn more</span>
          </div>
        </div>
        <img className={styles.black__image} src='/third.svg' width={200}></img>
      </div>
    </div>

 

    )
}

export default CardsTemp;