import classNames from 'classnames/bind';
import Image from '@/components/Image';
import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

const Award = ({ active }: { active: boolean }) => {
    return (
        <div className={cn('tab', { active })}>
            <div className="col-7-5">
                <img src="/award/certificate-1.jpg" alt="Award" className={cn('award-img')} />

                <div>
                    <Image src="/award/certificate-2.jpg" alt="Award" className={cn('award-img')} />
                    <Image src="/award/certificate-3.jpg" alt="Award" className={cn('award-img')} />
                </div>
            </div>
        </div>
    );
};

export default Award;
