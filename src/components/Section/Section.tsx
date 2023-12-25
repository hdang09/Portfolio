import classNames from 'classnames/bind';
import { CSSProperties, JSX, PropsWithChildren } from 'preact/compat';

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
    style?: string | CSSProperties | undefined;
}

const Section = ({ children, id, heading, center, thin, style }: SectionProps) => {
    return (
        <section id={id} className={cn('section', { thin })} style={style}>
            <Container>
                <FadeUp>
                    <h2 className={cn('heading', { center })}>{heading}</h2>
                </FadeUp>

                {children}
            </Container>
        </section>
    );
};

export default Section;
