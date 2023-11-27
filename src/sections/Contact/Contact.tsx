import classNames from 'classnames/bind';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { useState } from 'preact/hooks';

import Button from '@/components/Button';
import Card from '@/components/Card';
import HeadlessCard from '@/components/Card/HeadlessCard';
import Strong from '@/components/Strong';
import Section from '@/components/Section';

import styles from './contact.module.scss';

// classnames
const cn = classNames.bind(styles);

// Type
type Card = {
    title: string;
    icon: React.ReactNode;
    text: string;
    href: string;
    onClick?: () => void;
};

// Constants
const CARDS: Card[] = [
    {
        title: 'District 9, HCM City',
        icon: <IoEarthOutline />,
        text: 'Official Address',
        href: 'https://maps.app.goo.gl/bXYFLQx1KdD4ycQMA',
    },
    {
        title: 'contact@hdang09.tech',
        icon: <AiOutlineMail />,
        text: 'Official Mail',
        href: 'mailto:contact@hdang09.tech',
    },
    {
        title: '0866 914 464',
        icon: <AiOutlinePhone />,
        text: 'Official Phone',
        href: 'tel:0866914464',
    },
];

const Contact = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const validate = () => {
        if (form.firstName.trim().length < 2) {
            toast.error('Your first name is in valid');
            return;
        }

        if (form.lastName.trim().length < 2) {
            toast.error('Your last name is in valid');
            return;
        }

        if (form.email.trim().length < 2) {
            toast.error('Your email is in valid');
            return;
        }

        const regex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!form.email.match(regex)) {
            toast.error('Your email is not correct format');
            return;
        }

        if (form.subject.trim().length < 2) {
            toast.error('Your subject is in valid');
            return;
        }

        if (form.message.trim().length < 2) {
            toast.error('Your message is in valid');
            return;
        }

        toast.success('Created! You will be redirect to Mail', { duration: 5000 });
        setTimeout(() => {
            window.location.href = `mailto:contact@hdang09.tech?cc=dangtranhai628@gmail.com&subject=${form.subject}&body=${form.message}`;
        }, 5000);
    };

    return (
        <Section
            id="contact"
            heading={
                <>
                    Con<Strong>tact</Strong>
                </>
            }
            thin
            center
        >
            <div className="col-8-2">
                <HeadlessCard>
                    <h2 className={cn('title')}>Get In Touch</h2>

                    <form method="POST">
                        <div className="col-6">
                            <input
                                type="text"
                                name="firstName"
                                className={cn('input')}
                                placeholder="Firstname"
                                value={form.firstName}
                                onChange={(e: any) =>
                                    setForm({ ...form, firstName: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                name="lastName"
                                className={cn('input')}
                                placeholder="Lastname"
                                value={form.lastName}
                                onChange={(e: any) =>
                                    setForm({ ...form, lastName: e.target.value })
                                }
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            className={cn('input')}
                            placeholder="Email"
                            value={form.email}
                            onChange={(e: any) => setForm({ ...form, email: e.target.value })}
                        />
                        <input
                            type="text"
                            name="subject"
                            className={cn('input')}
                            placeholder="Subject"
                            value={form.subject}
                            onChange={(e: any) => setForm({ ...form, subject: e.target.value })}
                        />
                        <textarea
                            name="message"
                            className={cn('input')}
                            placeholder="Message"
                            value={form.message}
                            onChange={(e: any) => setForm({ ...form, message: e.target.value })}
                        ></textarea>

                        <div className={cn('btn-wrapper')}>
                            <Button large responsive onClick={validate}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </HeadlessCard>

                <div className={cn('cards')}>
                    {CARDS.map((card) => (
                        <HeadlessCard key={card.title}>
                            <a href={card.href} className={cn('title')} onClick={card.onClick}>
                                {card.title}
                            </a>

                            <div className={cn('info')}>
                                <div className={cn('icon')}>{card.icon}</div>
                                <span className={cn('text')}>{card.text}</span>
                            </div>
                        </HeadlessCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

Contact.propTypes = {};

export default Contact;
