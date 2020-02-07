import { Text } from 'grommet';
import styled from 'styled-components';

export const PrimaryBold = styled(Text)`
    font-size: 16px;
    font-size: ${props => props.size};
    color: rgb(255,255,255);
    color: ${props => props.color};
    letter-spacing: -0.38px;
    font-weight: 600;
`;

export const PrimaryRegular = styled(Text)`
    font-size: 16px;
    font-size: ${props => props.size};
    color: rgb(255,255,255);
    letter-spacing: -0.38px;
    font-weight: 500;
`;

export const SecondaryBold = styled(Text)`
    font-size: 16px;
    font-size: ${props => props.size};
    color: rgb(155,159,188);
    letter-spacing: -0.38px;
    font-weight: 600;
`

export const SecondaryRegular = styled(Text)`
    font-size: 16px;
    font-size: ${props => props.size};
    color: rgb(155,159,188);
    letter-spacing: -0.38px;
    font-weight: 400;
`

export const HighlightedBold = styled(Text)`
    font-size: 16px;
    font-size: ${props => props.size};
    color: rgb(255,158,70);
    letter-spacing: -0.38px;
    font-weight: 600;
`
