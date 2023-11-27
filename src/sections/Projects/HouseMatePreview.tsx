import classNames from 'classnames/bind';
import styles from './projects.module.scss';
import Button from '../../components/Button';

const cn = classNames.bind(styles);

const HouseMatePreview = () => {
    const URL = 'https://housemate.site';
    const NAV_LINKS = [
        {
            id: 1,
            name: 'Home',
            url: URL,
        },
        {
            id: 2,
            name: 'Shop',
            url: `${URL}/shop`,
        },
        {
            id: 3,
            name: 'My pu.',
            url: `${URL}/purchased`,
        },
        {
            id: 4,
            name: 'Sche.',
            url: `${URL}/schedule`,
        },
    ];

    return (
        <div className={cn('housemate-preview')}>
            <header className={cn('housemate-header')}>
                <a href={URL}>HouseMate</a>

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
                    LOGIN
                </Button>
            </header>

            <div className={cn('housemate-main')}>
                <h4>
                    <strong>Let's Make</strong> Your Apartment
                </h4>
                <h4>
                    More <strong>Convenient</strong>
                </h4>

                <Button
                    onClick={() => {
                        window.open(`${URL}/shop`);
                    }}
                >
                    Discover now
                </Button>

                <div className={cn('housemate-img')} />
            </div>
        </div>
    );
};

export default HouseMatePreview;
