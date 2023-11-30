import classNames from 'classnames/bind';
import Button from '@/components/Button';
import styles from './projects.module.scss';
import Image from '@/components/Image';

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
                <a href={URL}>NetClick</a>

                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a target="_blank" href={link.url}>
                                {link.name}
                            </a>
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
                    <Image
                        src="/project/netclick.png"
                        alt="NetClick Hero"
                        className={cn('netclick-img')}
                    />
                </div>
            </div>
        </div>
    );
};

export default NetClickPreview;
