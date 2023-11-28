import classNames from 'classnames/bind';
import { MdOutlineHome, MdOutlineLogout } from 'react-icons/md';
import { IoIosLink, IoIosMoon } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';

import Button from '@/components/Button';

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
                        <a target="_blank" href={URL}>
                            <MdOutlineHome size="12" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={URL}>
                            <IoIosLink size="12" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={URL}>
                            <CiSettings size="14" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={URL}>
                            <IoIosMoon size="12" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={URL}>
                            <MdOutlineLogout size="12" />
                        </a>
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
