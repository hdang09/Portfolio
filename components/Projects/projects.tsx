import classNames from 'classnames/bind';
import styles from './projects.module.scss';

const cn = classNames.bind(styles);

const Projects = () => {
    return (
        <section id="projects" className={cn('sec')}>
            <h2>Projects</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
            </p>
        </section>
    );
};

Projects.propTypes = {};

export default Projects;
