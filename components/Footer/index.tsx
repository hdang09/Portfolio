import './footer.scss';

import classNames from 'classnames/bind';

// const cn = classNames.bind(styles);

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-info">
                <div className="grid wide flexible">
                    {/* <img className="footer-info__logo" src="./img/wrapper/header/follio-logo.png" alt="Follio Logo" /> */}
                    <div className="footer-info__nav-bar">
                        <ul className="footer-info__nav-bar--list">
                            <li className="footer-info__nav-bar--item">
                                <a className="footer-info__nav-bar--link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="footer-info__nav-bar--item">
                                <a className="footer-info__nav-bar--link" href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li className="footer-info__nav-bar--item">
                                <a className="footer-info__nav-bar--link" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="footer-info__nav-bar--item">
                                <a className="footer-info__nav-bar--link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-info__social">
                        <ul className="footer-info__social-list">
                            <li className="social-list__item">
                                <a href="" className="social-list__item-link">
                                    <i className="social-list__item-link-icon fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="" className="social-list__item-link">
                                    <i className="social-list__item-link-icon fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="social-list__item">
                                <a href="" className="social-list__item-link">
                                    <i className="social-list__item-link-icon fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="footer-copyright__text">© 2020 Follio. All rights reserved</p>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
