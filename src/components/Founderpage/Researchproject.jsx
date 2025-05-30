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
                                    <p>Metaverse Development.
                                    </p>
                                    <p>The core focus is building a native on-chain mixing protocol on the trading chain Hyperliquid.
                                        By introducing transaction obfuscation mechanisms, zero-knowledge proofs, and address shuffling strategies,
                                        the protocol enhances the verifiable anonymity of on-chain transaction data and ensures privacy-preserving and untraceable fund flows.
                                        <br></br>
                                        <br></br>
                                        In parallel, the project advances the development of on-chain wallet infrastructure tailored for multi-chain asset management.
                                        Centered around a Layer 2 asset mapping architecture, it enables account abstraction and unified asset management across chains
                                        and asset types, facilitating the construction of decentralized wallets that improve user control, privacy, and cross-chain interoperability.
                                        <br></br>
                                        <br></br>
                                        To further augment the system’s intelligence, an AI plugin-based architecture is integrated to perform on-chain user behavior recognition and risk profiling.

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