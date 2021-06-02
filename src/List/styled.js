import styled, { css } from "styled-components"

export const TasksList = styled.ul`
    padding: 0;
    list-style-type: none;

    @media (max-width: 767px) {
        margin-top: 10px;
        padding: 10px;
    }
`;

export const ListItem = styled.span`
    font-size: large;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    justify-items: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-left: 15px;
    margin-right: 15px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media (max-width: 767px) {
        padding: 15px;
    }
`;

export const Content = styled.span`
    max-width: 400px;
    word-wrap: break-word;
    font-size: larger;
    text-align: center;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width: 767px) {
        max-width: 100px;
    }
`;

export const Button = styled.button`
    color: white;
    padding: 0;
    border: none;
    height: 35px;
    width: 40px;

    ${({ toggleTaskDone }) => toggleTaskDone && css`
        background-color: rgb(2, 161, 2);
        font-size: xx-large;
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(255, 102, 102);
        font-size: x-large;
    `}
`;