import { Button } from 'grommet';
import styled from 'styled-components';

interface Props {
    status?: string
}

const RoundedButtonXS = styled(Button)<Props>`
    width: 103px;
    height: 45px;
    border-radius: 26px;
    font-weight: 600;
    ${props => props.status === 'default' ? 'color: rgb(255, 177, 94);':''}
    box-shadow: 4px 4px 3px 0 rgb(29, 31, 44), -4px -4px 3px 0 rgb(47, 49, 67);
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
`;

export default RoundedButtonXS;
