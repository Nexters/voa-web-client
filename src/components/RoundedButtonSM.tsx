import { Button } from 'grommet';
import styled from 'styled-components';

interface Props {
    status?: string
}

const RoundedButtonSM = styled(Button)<Props>`
    width: 110px;
    height: 45px;
    border-radius: 26px;
    font-weight: 600;
    ${props => props.status === 'default' ? 'color: rgb(255, 177, 94);':''}
    box-shadow: 4px 4px 5px 0 rgb(15, 16, 21), -4px -4px 5px 0 rgb(38, 40, 54);
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
`;

export default RoundedButtonSM;
