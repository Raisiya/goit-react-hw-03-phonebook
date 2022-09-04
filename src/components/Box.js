import styled from 'styled-components';
import {
    color,
    layout,
    space,
    grid,
    flexbox,
    border,
    background,
    position,
} from 'styled-system';

export const Box = styled('div')(
    space,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    color,
);