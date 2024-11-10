import { css, keyframes } from 'styled-components';

const excited = keyframes`
    50% {
        transform: scale(1.03) rotate(.5deg);
    }
`;

export const excitedAnimation = css`
    &:hover {
        animation: ${excited} .3s 1;
        background-color: ${props => props.theme.mayaBlueDark};
    }
`;