import React from 'react';
import { Box, Button, Heading, Grid, Text } from 'grommet';
import { Close, UserAdd, Add, SettingsOption } from 'grommet-icons';
import hideYOverflow from 'HOC/hideYOverflow';
import styled from 'styled-components';

const StandardButton = styled(Button)`
    width: 100%;
    height: 80px;
    border-radius: 0;
    font-weight: 500;
`;

export const PaddedBox = styled(Box)`
    padding-right: 30px;
    padding-left: 30px;
`

const LightText = styled(Text)`
    font-weight: 400;
    color: grey;
`

const IconBox = styled(Box)`
    width: 41px;
    height: 41px;
    margin-left: 15px;
`

interface Props {
    title: string,
    button?: string,
}

const Page: React.FC<Props> = ({ title, button }) => (
    <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
        <br />
        <br />
        <PaddedBox fill>
            <Grid columns={{ count: 2, size: 'auto' }}>
                <Box>
                    <Heading margin={{ 'top': '0', 'bottom': '0.5rem' }} level="1">{title}</Heading>
                </Box>
                <Box direction='row-reverse'>
                    <IconBox round="full" background="#e3e3e3" overflow="hidden">
                        <Button icon={<Add size='18px' />} hoverIndicator onClick={() => {}} />
                    </IconBox>
                    <IconBox round="full" background="#e3e3e3" overflow="hidden">
                        <Button icon={<SettingsOption size='18px' />} hoverIndicator onClick={() => {}} />
                    </IconBox>
                </Box>
            </Grid>
            <br />
            <Box flex justify="center" align="center">
                <LightText textAlign="center">아직 대화방이 <br />없습니다.
                </LightText>
            </Box>
        </PaddedBox>
        {button? <StandardButton 
            label={button}
            onClick={() => {}}
            type="button"
            alignSelf="center"
            color="#E3E3E3"
            focusIndicator
            primary
        />:''}
    </Box>
);

export default Page;
