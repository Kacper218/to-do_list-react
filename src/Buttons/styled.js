import styled, {css} from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    @media (max-width: 767px) {
        display: block;
    }
`;

export const ButtonsHeader = styled.h2`
    font-size: x-large;
    padding: 15px;
    align-self: center;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    margin-top: 0;

@media (max-width: 767px) {
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    color: teal;
    background-color: white;
    border: none;
    border-bottom: 1px solid #ccc;
    max-height: 58px;
    font-size: larger;
    transition: 1s;

    @media (max-width: 767px) {
        border-bottom: none;
        padding: 10px;
        display: block;
        margin: 0 auto;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: gray;
    }
`;