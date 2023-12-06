import classNames from 'classnames/bind';

import certificate1 from '@/assets/award/certificate-1.jpg';
import certificate2 from '@/assets/award/certificate-2.jpg';
import certificate3 from '@/assets/award/certificate-3.jpg';
import Image from '@/components/Image';

import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

const Award = ({ active }: { active: boolean }) => {
    return (
        <div className={cn('tab', { active })}>
            <div className="col-7-5">
                <Image src={certificate1} alt="Award" className={cn('award-img')} />

                <div>
                    <Image src={certificate2} alt="Award" className={cn('award-img')} />
                    <Image src={certificate3} alt="Award" className={cn('award-img')} />
                </div>
            </div>
        </div>
    );
};

export default Award;
