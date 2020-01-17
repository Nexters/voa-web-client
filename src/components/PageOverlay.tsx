import React, { Children } from 'react';
import { Box, Button, Heading, Grid } from 'grommet';
import { Close, UserAdd, Add, SettingsOption } from 'grommet-icons';
import styled from 'styled-components';

const StandardButton = styled(Button)`
    width: 100%;
    height: 80px;
    border-radius: 0;
    font-weight: 500;
`;

const PaddedBox = styled(Box)`
    padding: 1.5rem;
    padding-top: 3rem;
`

const LightHeading = styled(Heading)`
    font-weight: 400;
`

const IconBox = styled(Box)`
    width: 41px;
    height: 41px;
    margin-left: 15px;
`

interface Props {
    title: string,
    button?: string,
    lightheading?: string,
}

const Page: React.FC<Props> = ({ title, button, lightheading, children }) => (
    <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
        <PaddedBox fill>
            <Grid columns={{ count: 2, size: 'auto' }}>
                <Box>
                    <Close />
                </Box>
            </Grid>
            <br />
            <Heading margin={{ 'top': '0', 'bottom': '0.5rem' }} level="1">{title}</Heading>
            {lightheading? <LightHeading margin="none" level="5">05명 참여중</LightHeading>: ''}

            <br />
            <Box flex>
                {children}
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
