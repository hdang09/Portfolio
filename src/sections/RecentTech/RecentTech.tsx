import classNames from 'classnames/bind';
import styles from './recent-tech.module.scss';
import { RECENT_TECH } from '@/config/constants';
import FadeUp from '@/components/FadeUp';

// classnames
const cn = classNames.bind(styles);

const RecentTech = () => {
    return (
        <section className={cn('recent-tech')}>
            <FadeUp>
                <h2 className={cn('label')}>Some of the technologies that I recently used</h2>
            </FadeUp>

            <div className={cn('list')}>
                {RECENT_TECH.map((tech) => (
                    <a href={tech.url} target="_blank">
                        <img
                            src={`/recent-tech/${tech.image}`}
                            alt={tech.name}
                            className={cn('img')}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default RecentTech;
