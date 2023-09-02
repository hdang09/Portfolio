import classNames from 'classnames/bind';
import styles from './contact.module.scss';

const cn = classNames.bind(styles);

const Contact = () => {
    return (
        <section id="contact" className={cn('sec')}>
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias eligendi quidem consequatur laborum
                eaque autem id beatae animi assumenda. Unde culpa repellendus est dolore totam id minima ut beatae!
            </p>
        </section>
    );
};

Contact.propTypes = {};

export default Contact;
