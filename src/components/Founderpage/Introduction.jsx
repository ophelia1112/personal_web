import styles from '../../styles/Founderpage/Introduction.module.css'
export default function Introduction() {
    return (
        <section id="introduction_title" className={styles.introduction_title}>
            <p>About —— Wenmeng Liu(Ophelia).</p>

            <p>
                My name is Wenmeng Liu(Ophelia), and I am from Nanyang Technological University (NTU).
                <br></br>
                <br></br>
                I am currently focused on the research of interpretability in artificial intelligence
                within the financial sector.
                My research covers areas such as AI-driven digital trading,
                investment and risk management, data analysis and protection,
                blockchain technology, Web3.0, and metaverse development in finance.
                <br></br>
                <br></br>
                In the future, I plan to optimize and deepen my research in areas like
                user credit assessment, user profiling,
                advanced algorithmic trading, and the white-box transformation
                of financial simulation models.
                <br></br>
                <br></br>
                Currently, my development work is primarily focused on
                leveraging the BERT-based model, specifically finBERT,
                to build intelligent financial market information recommendation models,
                including market sentiment evaluation and information aggregation push.
            </p>

            <p>Find More <span className="iconfont icon-below-arrow"></span></p>
        </section>
    )
}