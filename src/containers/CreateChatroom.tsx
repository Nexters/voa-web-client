import React from 'react';
import PageOverlay from 'components/PageOverlay';
import { Box, Button, Heading, Grid, Text, TextInput } from 'grommet';

const CreateChatroom: React.FC = () => (
    <PageOverlay title='대화방 만들기' button="만들기">
        <br/>
        <br/>
        <TextInput
            type="text"
            placeholder='대화방의 이름을 작성해주세요'
        />
    </PageOverlay>
);

export default CreateChatroom;
