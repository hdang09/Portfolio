import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import { IoEarthOutline } from 'react-icons/io5';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';

const cn = classNames.bind(styles);

// Type
type Card = {
    title: string;
    icon: React.ReactNode;
    text: string;
};

// Constants
const CARDS: Card[] = [
    { title: 'District 9, HCM City', icon: <IoEarthOutline />, text: 'Official Address' },
    { title: 'contact@hdang09.site', icon: <AiOutlineMail />, text: 'Official Mail' },
    { title: '0866 914 464', icon: <AiOutlinePhone />, text: 'Official Phone' },
];

const Contact = () => {
    return (
        <section id="contact" className={cn('section')}>
            <div className={cn('container')}>
                <h2 className={cn('heading')}>Contact</h2>

                <div className="col-8-2">
                    <div className={cn('card')}>
                        <h2 className={cn('title')}>Get In Touch</h2>
                        <div className="col-6">
                            <input type="text" name="text" className={cn('input')} placeholder="Name" />
                            <input type="text" name="text" className={cn('input')} placeholder="Lastname" />
                        </div>
                        <input type="email" name="email" className={cn('input')} placeholder="Email" />
                        <input type="text" name="text" className={cn('input')} placeholder="Subject" />
                        <textarea name="message" className={cn('input')} placeholder="Message"></textarea>

                        <div className={cn('btn-wrapper')}>
                            <button type="submit" className="button">
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div>
                        {CARDS.map((card) => (
                            <div className={cn('card')} key={card.title}>
                                <h2 className={cn('title')}>{card.title}</h2>
                                <div className={cn('info')}>
                                    <div className={cn('icon')}>{card.icon}</div>
                                    <span className={cn('text')}>{card.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Contact.propTypes = {};

export default Contact;
