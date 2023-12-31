import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import netclickHero from '@/assets//project/netclick.png';
import Button from '@/components/button';

import styles from './projects.module.scss';

// classnames
const cn = classNames.bind(styles);

const NetClickPreview = () => {
    const URL = 'https://netclick.hdang09.tech';

    const NAV_LINKS = [
        {
            id: 1,
            name: 'HOME',
            url: URL,
        },
        {
            id: 2,
            name: 'ALL MO.',
            url: `${URL}/shop`,
        },
        {
            id: 3,
            name: 'FAVORIT.',
            url: `${URL}/purchased`,
        },
    ];

    return (
        <div className={cn('netclick-preview')}>
            <header className={cn('netclick-header')}>
                <Link href={URL}>NetClick</Link>

                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <Link target="_blank" href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Button
                    onClick={() => {
                        window.open(`${URL}/login`);
                    }}
                >
                    Sign in
                </Button>
            </header>

            <div className={cn('netclick-main')}>
                <div className={cn('netclick-left')}>
                    <p>NetClick</p>
                    <h3>
                        Explore <span>unlimited movies</span>
                    </h3>
                    <h3>anywhere, anytime</h3>

                    <Button>Sign in</Button>
                </div>

                <div className={cn('netclick-right')}>
                    <Image src={netclickHero} alt="NetClick Hero" className={cn('netclick-img')} />
                </div>
            </div>
        </div>
    );
};

export default NetClickPreview;
