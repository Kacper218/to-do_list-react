import styled from "styled-components";

export const MainForm = styled.form`
    padding: 15px;
`;

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    color: white;
    background-color: teal;
    margin: 5px;
    padding: 10px;
    border: none;
    font-size: larger;
    transition: 1s;

    @media (max-width: 767px) {
        padding: 10px;
    }

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);  
    }

`;

export const Input = styled.input`
    margin: 5px;
    font-size: larger;

     @media (max-width: 767px) {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;