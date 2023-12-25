import classNames from 'classnames/bind';
import styles from './projects.module.scss';

// classnames
const cn = classNames.bind(styles);

const HotelReservationPreview = () => {
    const URL = 'https://hotel.hdang09.tech';

    const navigatePage = () => {
        window.open(URL);
    };

    const NAV_LINKS = [
        {
            id: 1,
            name: 'Home',
            url: URL,
        },
        {
            id: 2,
            name: 'Reservation',
            url: `${URL}/reservation`,
        },
        {
            id: 3,
            name: 'Rooms',
            url: `${URL}/rooms`,
        },
        {
            id: 4,
            name: 'Settings',
            url: `${URL}/settings`,
        },
        {
            id: 5,
            name: 'Log out',
            url: `${URL}/login`,
        },
    ];

    return (
        <div className={cn('hotel-preview')}>
            <div className={cn('hotel-sidebar')}>
                <h3 className={cn('hotel-logo')} onClick={navigatePage}>
                    Mint Hotel
                </h3>

                <ul className={cn('hotel-nav')}>
                    {NAV_LINKS.map((item) => (
                        <li key={item.id} onClick={() => window.open(item.url)}>
                            <a href={item.name}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={cn('hotel-main')}>
                <div className={cn('hotel-header')}>
                    <h4>Good morning</h4>
                    <p>Welcome back and explore</p>
                </div>

                <div className={cn('hotel-content')}>
                    <h4>Dashboard</h4>
                    <div className={cn('hotel-dashboard')}>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <h4>Today Availability</h4>
                    <div className={cn('hotel-availability')}>
                        <table />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelReservationPreview;
