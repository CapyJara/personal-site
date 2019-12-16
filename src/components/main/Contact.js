import React from 'react';
import styles from './contact.css';
import github from '../../../assets/github-white.png';
import email from '../../../assets/mail-white.png';
import linkedin from '../../../assets/white-linkedin.png';
import resume from '../../../assets/resume.png';
import me from '../../../assets/me.jpg';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <section className={styles.Icons}>
        <a href="https://github.com/UncleJerry23" target="blank" rel="noopener noreferrer">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jaredmyhrberg/" target="blank" rel="noopener noreferrer">
          <img src={linkedin} />
        </a>
        <a href="mailto:jared.myhrberg@gmail.com" target="blank" rel="noopener noreferrer">
          <img src={email} />
        </a>
        <a href="https://drive.google.com/open?id=1mfSk1e2lTASVQ1rfr59qsNAjkAOIB2lA" target="blank" rel="noopener noreferrer">
          <img src={resume} />
        </a>
      </section>

      <section className={styles.Details}>
        <div>
          <img src={me}/>
          <p>
          If you&rsquo;d like to hire me for a software position, commission a rad woodworking project or for any other reason please feel free to email me or message me on LinkedIn by using the links to the left.
          </p>
          <p>
          Thanks for stopping by!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
