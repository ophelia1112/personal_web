import styles from '../../styles/Founderpage/Researchproject.module.css'

export default function Researchproject() {
    return (
        <div className={styles.research_project}>
            <div className={styles.research_project_title}>
                <span>Research & Projects</span>
            </div>

            <div id="projects" className={styles.projects}>
                <div className={styles.projects_content}>
                    <div className={styles.projects_title}>
                        <p>Projects</p>
                    </div>

                    <div className={styles.projects_list}>
                        <div className={styles.img_project_info}>
                            <div className={styles.project_img}>
                                <img src="/Founderpage_imgs_videos/project1.png" alt=""/>
                            </div>
                            <div className={styles.img_project_content}>
                                <p>M1 System Framework.</p>
                                <p>The M1 system aims to assess financial market sentiment
                                    in real-time, deliver timely market information,
                                    and integrate decentralized exchange (DEX) blockchain
                                    trading interfaces (e.g.,HyperLiquid) for one-stop trading.
                                    <br></br>
                                    <br></br>
                                    The core model is built on the BERT (Transformer) architecture,
                                    using natural language processing to analyze sentiment and push market information data.
                                </p>
                            </div>
                        </div>

                        <div className={styles.img2_project_info} >
                            <div className={styles.img2_projects} >
                                <div className={styles.img2_projects_content}>
                                    <p>Development of an Open Trading World(Metaverse).
                                    </p>
                                    <p>This project aims to build a decentralized metaverse economic system,
                                        utilizing blockchain technology to create cross-chain transaction spaces and models,
                                        ensuring asset flow and value exchange across multiple blockchain networks.
                                        <br></br>
                                        <br></br>
                                        The core logic of the system is to leverage a decentralized finance (DeFi) architecture
                                        to enhance the transparency of on-chain data,
                                        reduce the opaque risks of "black-box" operations,
                                        and ensure the fairness and traceability of the transaction process.
                                        <br></br>
                                        <br></br>
                                        Additionally, we integrate user data and behavior models,
                                        using artificial intelligence (AI) technology to create
                                        personalized user profiles.
                                        <br></br>
                                        <br></br>
                                        Machine learning and data mining techniques are employed
                                        to deeply analyze user preferences, behavioral patterns,
                                        and risk characteristics, enabling personalized service
                                        recommendations and intelligent trading decision support.

                                    </p>
                                </div>

                            </div>
                            <div className={styles.project_img2} id="project_video">
                                <img src="/Founderpage_imgs_videos/project2.png" alt="/"></img>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


            <div id="research" className={styles.research}>
                <div className={styles.research_title}>
                    <p>Research</p>
                </div>

                <div className={styles.all_research_img_info} >

                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>
                                FinBERt-M1o1 leverages the pre-trained BERT (Transformer) model
                                for aggregating and delivering real-time financial market information,
                                utilizing sentiment analysis and natural language processing techniques to analyze market dynamics.
                            </p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research1.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Research on financial modeling and feature engineering
                                based on machine learning methods,
                                utilizing supervised learning, unsupervised learning,
                                and deep learning techniques to optimize financial market forecasting
                                and risk assessment.</p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research2.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Application of artificial intelligence in blockchain—Optimizing
                                decentralized financial risk control mechanisms based on
                                machine learning and deep reinforcement learning.</p>
                        </div>

                    </div>
                    <div className={styles.research_img_info}>
                        <div className={styles.research_img}>
                            <img src="/Founderpage_imgs_videos/research3.png" alt=""/>
                        </div>
                        <div className={styles.research_info}>
                            <p>Research on blockchain asset trading mechanisms based
                                on machine learning and artificial intelligence,
                                applying deep neural networks (DNN) and reinforcement learning (RL)
                                to optimize asset pricing and trading strategies.</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}