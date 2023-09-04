import classNames from 'classnames/bind';
import styles from './projects.module.scss';

const cn = classNames.bind(styles);

const Projects = () => {
    return (
        <section id="projects" className={cn('section')}>
            <div className={cn('container')}>
                <h2 className={cn('heading')}>Projects</h2>
                <p className={cn('description')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur
                    laborum eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut
                    beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem
                    consequatur laborum eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam
                    id minima ut beatae!
                </p>
            </div>
        </section>
    );
};

Projects.propTypes = {};

export default Projects;
