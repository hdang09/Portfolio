import classNames from 'classnames/bind';
import Link from 'next/link';
import { MdOutlineHome, MdOutlineLogout } from 'react-icons/md';
import { IoIosLink, IoIosMoon } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';

import Button from '@/components/button';

import styles from './projects.module.scss';

// classnames
const cn = classNames.bind(styles);

const ShortenURLPreview = () => {
    const URL = 'https://shorten.hdang09.tech';

    const navigatePage = () => {
        window.open(URL);
    };

    return (
        <div className={cn('shorten-preview')}>
            <div className={cn('shorten-nav')}>
                <ul>
                    <li>
                        <Link target="_blank" href={URL} aria-label="Home">
                            <MdOutlineHome size="12" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={URL} aria-label="LInks">
                            <IoIosLink size="12" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={URL} aria-label="Settings">
                            <CiSettings size="14" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={URL} aria-label="Theme">
                            <IoIosMoon size="12" />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" href={URL} aria-label="Logout">
                            <MdOutlineLogout size="12" />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={cn('shorten-main')}>
                <div className={cn('shorten-card')}>
                    <h4>URL Shortener</h4>

                    <div className={cn('shorten-inputs')}>
                        <input type="text" className={cn('shorten-input')} placeholder="Long URL" />
                        <input
                            type="text"
                            className={cn('shorten-input')}
                            placeholder="Short URL"
                        />
                    </div>

                    <div className={cn('shorten-btn')}>
                        <Button onClick={navigatePage}>Shorten</Button>
                    </div>
                </div>

                <div className={cn('shorten-card')}>
                    <h4>Recent URL</h4>

                    <Button onClick={navigatePage}>
                        <div className={cn('shorten-item')}>
                            <span>
                                <IoIosLink size="12" />
                            </span>

                            <div className={cn('shorten-info')}>
                                <h5>Shorten URL</h5>
                                <p>hdang09.tech/ShortenURL-FE</p>
                            </div>

                            <div className={cn('shorten-btns')}>
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShortenURLPreview;
