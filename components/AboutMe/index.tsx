import classNames from 'classnames/bind';
import styles from './about-me.module.scss';

const cn = classNames.bind(styles);

const AboutMe = () => {
    return (
        <section id="about-me" className={cn('sec')}>
            <h2>About me</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
            </p>
        </section>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
