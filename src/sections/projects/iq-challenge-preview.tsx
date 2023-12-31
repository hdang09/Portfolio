import classNames from 'classnames/bind';
import Button from '@/components/button';
import styles from './projects.module.scss';

// classnames
const cn = classNames.bind(styles);

const IQChallengePreview = () => {
    const URL = 'https://iq.hdang09.tech';

    const navigatePage = () => {
        window.open(URL);
    };

    const spans = Array.from({ length: 5 }, (_, index) => (
        <span key={index} onClick={navigatePage} />
    ));

    return (
        <div className={cn('iq-preview')}>
            <div className={cn('iq-sidebar')}>
                <h3 className={cn('iq-logo')} onClick={navigatePage}>
                    F-Code
                </h3>

                <div className={cn('iq-time')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 142 142"
                        fill="none"
                    >
                        <path
                            d="M142 71C142 85.0425 137.836 98.7696 130.034 110.445C122.233 122.121 111.144 131.222 98.1705 136.595C85.197 141.969 70.9212 143.375 57.1486 140.636C43.3759 137.896 30.7249 131.134 20.7954 121.205C10.8659 111.275 4.1038 98.6241 1.36424 84.8514C-1.37531 71.0788 0.0307314 56.803 5.40455 43.8295C10.7784 30.8559 19.8786 19.7672 31.5545 11.9657C43.2304 4.16408 56.9575 -1.67455e-07 71 0V5.983C58.1409 5.983 45.5705 9.79618 34.8785 16.9403C24.1865 24.0845 15.8531 34.2388 10.9321 46.1191C6.01114 57.9994 4.72359 71.0721 7.23229 83.6842C9.74098 96.2962 15.9332 107.881 25.026 116.974C34.1188 126.067 45.7038 132.259 58.3158 134.768C70.9279 137.276 84.0006 135.989 95.8809 131.068C107.761 126.147 117.915 117.813 125.06 107.122C132.204 96.4295 136.017 83.8591 136.017 71H142Z"
                            fill="url(#paint0_linear_77_745)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_77_745"
                                x1="71"
                                y1="0"
                                x2="71"
                                y2="142"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#e2e8ff8c" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div>
                    <div className={cn('iq-question-container')}>{spans}</div>
                    <div className={cn('iq-question-container')}>{spans}</div>
                    <div className={cn('iq-question-container')}>{spans}</div>
                </div>

                <div className={cn('iq-submit-btn')}>
                    <Button onClick={navigatePage}>Submit</Button>
                </div>
            </div>

            <div className={cn('iq-main')}>
                <div className={cn('iq-quetion-item')}>
                    <div className={cn('iq-question')}>
                        <h4>Question 1</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores
                            dolor reprehenderit tenetur corporis ex? Et molestias deserunt
                            temporibus non veniam aut a impedit placeat nihil.
                        </p>
                    </div>

                    <div>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>A. Answer number 1</Button>
                        </div>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>B. Answer number 2</Button>
                        </div>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>C. Answer number 3</Button>
                        </div>
                    </div>
                </div>

                <div className={cn('iq-quetion-item')}>
                    <div className={cn('iq-question')}>
                        <h4>Question 2</h4>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores
                            dolor reprehenderit tenetur corporis ex? Et molestias deserunt
                            temporibus non veniam aut a impedit placeat nihil.
                        </p>
                    </div>

                    <div className={cn('iq-answer')}>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>A. Answer number 1</Button>
                        </div>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>B. Answer number 2</Button>
                        </div>
                        <div className={cn('iq-answer-item')}>
                            <Button onClick={navigatePage}>C. Answer number 3</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IQChallengePreview;
