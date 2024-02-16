import React from 'react';
import { Container, IconImage, Title } from './styles';
import IconEdit from '../../public/assets/checkbox-edit.svg';

interface ComponentWithIconProps {
    title: string;
}

const ComponentWithIcon: React.FC<ComponentWithIconProps> = ({ title }) => {
    return (
        <Container>
            <IconImage src={IconEdit.src} alt="Ícone" />
            <Title>{title}</Title>
        </Container>
    );
};

export default ComponentWithIcon;

