import { Button} from 'grommet';
import styled from 'styled-components';

const HighlightedRoundedButton = styled(Button)`
    width: 100%;
    height: 55px;
    border-radius: 30.5px;
    font-weight: 600;
    color: #fff;
    boxShadow: 4px 4px 4px 0 rgb(20, 21, 29), -4px -4px 4px 0 rgb(80, 85, 117);
`;

export default HighlightedRoundedButton;
