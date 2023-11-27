import classNames from 'classnames/bind';
import { JSX, PropsWithChildren } from 'preact/compat';

import FadeUp from '@/components/FadeUp';
import Container from '@/components/Container';

import styles from './section.module.scss';

// classnames
const cn = classNames.bind(styles);

interface SectionProps extends PropsWithChildren {
    id: string;
    heading: JSX.Element;
    center?: boolean;
    thin?: boolean;
}

const Section = ({ children, id, heading, center, thin }: SectionProps) => {
    return (
        <section id={id} className={cn('section', thin && 'thin')}>
            <Container>
                <FadeUp>
                    <h2 className={cn('heading', center && 'center')}>{heading}</h2>
                </FadeUp>

                {children}
            </Container>
        </section>
    );
};

export default Section;
