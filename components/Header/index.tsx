import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <h2 className={cn('logo')}>hdang</h2>

            <nav className={cn('navigation')}>
                <a href="#">Home</a>
                <a href="#about-me">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

Header.propTypes = {};

export default Header;
