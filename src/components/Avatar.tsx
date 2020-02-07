import React from 'react';
import { Box, Image } from 'grommet';

interface Props {
    size: string,
    imageURL: string,
}

const Avatar: React.FC<Props> = ({ size, imageURL }) => (
    <React.Fragment>
        <Box height={size} width={size} round="large">
        <Image
            fit="cover"
            src={imageURL}
            style={{ borderRadius: '50%' }}
        />
        </Box>
    </React.Fragment>
);

export default Avatar