import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import fcodeHero from '@/assets/project/f-code.png';
import Button from '@/components/button';

import styles from './projects.module.scss';

// classnames
const cn = classNames.bind(styles);

const FCodeLandingPagePreview = () => {
    const URL = 'https://f-code.tech';

    const NAV_LINKS = [
        {
            id: 1,
            name: 'Home',
            url: URL,
        },
        {
            id: 2,
            name: 'Activities',
            url: `${URL}/activities`,
        },
        {
            id: 3,
            name: 'Timeline',
            url: `${URL}/timeline`,
        },
        {
            id: 4,
            name: 'FAQ',
            url: `${URL}/faq`,
        },
    ];

    return (
        <div className={cn('netclick-preview')}>
            <header className={cn('netclick-header')}>
                <Link href={URL}>F-Code</Link>

                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <Link target="_blank" href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>

            <div className={cn('netclick-main')}>
                <div className={cn('fcode-left')}>
                    <h3>Code the</h3>
                    <h3>future</h3>
                    <h3>
                        with <span>F-Code</span>
                    </h3>

                    <Button>Sign Up Now</Button>
                </div>

                <div className={cn('netclick-right')}>
                    <Image src={fcodeHero} alt="F-Code Hero" className={cn('netclick-img')} />
                </div>
            </div>
        </div>
    );
};

export default FCodeLandingPagePreview;
