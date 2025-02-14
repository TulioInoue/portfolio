import Project from "./components/project/Project";

import styles from "./Work.module.css";

export default function Work() {
    return <section>
        <h3 id="work" className={styles.work}>
            My Work
        </h3>
        <div id={styles.works}>
            <Project
                image="aircondition.png"
                title="ETL - Air pollution"
                link="https://github.com/TulioInoue/ELT_stream_lit"
                list={["APIs", "StreamLit", "Google Cloud BigQuery", "Google Cloud Sheduler", "Google Cloud Functions"]}
            >
                <div>
                    <p>The main objective is to raise awareness of <span className="text-green">air pollution's impact on human health</span> by monitoring toxic gas concentrations (O3, SO2, NO2, CO).</p>
                </div>
            </Project>
            <Project
                image="pneumonia.png"
                title="Pneumonia Recognition"
                link="https://github.com/TulioInoue/pneumonia_recognition/blob/main/pneumonia_recognition.ipynb"
                list={["Matplotlib", "TensorFlow", "Scikit learn", "Joblib"]}
            >
                <div>
                    <p>The main objective is to create a Convolutional Neural Network (CNN) model that can predict if a patient has or not <span className="text-green">pneumonia based on X-ray images</span>.</p>
                </div>
            </Project>
            <Project
                image="lifeExpectancy.png"
                title="Life expectancy regression"
                link="https://github.com/TulioInoue/life_expectancy_regression/blob/main/life_expectancy_regression.ipynb"
                list={["Matplotlib", "Pandas", "Scikit learn", "Joblib"]}
            >
                <div>
                    <p>This project is a data analytics plus a brifiley <span className="text-green">regression model</span> implementation about life expenctancy around the globe.</p>
                </div>
            </Project>
            <Project
                image="brainstroke.png"
                title="Brain stroke classification"
                link="https://github.com/TulioInoue/brain_stroke_classification/blob/main/brain_stroke_classification.ipynb"
                list={["Matplotlib", "Imblearn", "Pandas", "Scikit learn", "Joblib"]}
            >
                <div>
                    <p>Data science project to find brain strokes cases on <span className="text-green">imbalanced datasets</span></p>
                </div>
            </Project>
            {/* https://github.com/TulioInoue/ELT_stream_lit */}
        </div>
    </section>
}