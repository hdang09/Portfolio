import classNames from 'classnames/bind';
import Image from 'next/image';

import certificate1 from '@/assets/award/certificate-1.jpg';
import certificate2 from '@/assets/award/certificate-2.jpg';
import certificate3 from '@/assets/award/certificate-3.jpg';

import styles from './about-me.module.scss';

// classnames
const cn = classNames.bind(styles);

const Award = () => {
    return (
        <div className={cn('tab')}>
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
