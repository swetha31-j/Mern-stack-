import styles from "../styles/About.module.css";

function About() {

  return (
    <section className={styles.about}>

      <h2>About Me</h2>

      <h3>Education</h3>

      <p>B.E Computer Science Engineering</p>

      <h3>Skills</h3>

      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

    </section>
  );
}

export default About;