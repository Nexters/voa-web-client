import { Button} from 'grommet';
import styled from 'styled-components';

const RoundedButton = styled(Button)`
    width: 100%;
    height: 55px;
    border-radius: 30.5px;
    font-weight: 600;
    color: #fff;
    box-shadow: 4px 4px 5px 0 rgb(15, 16, 21), -4px -4px 5px 0 rgb(48, 49, 68);
`;

export default RoundedButton;
