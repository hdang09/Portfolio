'use client';

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FormEvent, useState } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { IoEarthOutline } from 'react-icons/io5';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './contact.module.scss';
import { toast } from 'react-hot-toast';

const cn = classNames.bind(styles);

// Type
type Card = {
    title: string;
    icon: React.ReactNode;
    text: string;
    href: string;
};

// Constants
const CARDS: Card[] = [
    {
        title: 'District 9, HCM City',
        icon: <IoEarthOutline />,
        text: 'Official Address',
        href: 'https://maps.google.com/...',
    },
    {
        title: 'contact@hdang09.site',
        icon: <AiOutlineMail />,
        text: 'Official Mail',
        href: 'mailto:contact@hdang09.site',
    },
    { title: '0866 914 464', icon: <AiOutlinePhone />, text: 'Official Phone', href: 'tel:0866914464' },
];

const Contact = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            setLoading(true);

            const formData = new FormData(event.currentTarget);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const newForm = { firstName, lastName, email, subject, message };

            await axios.post('/api/message', newForm);
            toast.success('Send message successfully');
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className={cn('section')}>
            <div className={cn('container')}>
                <h2 className={cn('heading')}>Contact</h2>

                <div className="col-8-2">
                    <div className={cn('card')}>
                        <h2 className={cn('title')}>Get In Touch</h2>

                        <form onSubmit={onSubmit} method="POST">
                            <div className="col-6">
                                <input type="text" name="firstName" className={cn('input')} placeholder="Firstname" />
                                <input type="text" name="lastName" className={cn('input')} placeholder="Lastname" />
                            </div>
                            <input type="email" name="email" className={cn('input')} placeholder="Email" />
                            <input type="text" name="subject" className={cn('input')} placeholder="Subject" />
                            <textarea name="message" className={cn('input')} placeholder="Message"></textarea>

                            <div className={cn('btn-wrapper')}>
                                <button type="submit" disabled={loading} className={`${cn('submit-btn')} button`}>
                                    {loading ? (
                                        <>
                                            <FaSpinner /> <span>Sending</span>
                                        </>
                                    ) : (
                                        <span>Send Message</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        {CARDS.map((card) => (
                            <div className={cn('card')} key={card.title}>
                                <a href={card.href} className={cn('title')}>
                                    {card.title}
                                </a>
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
