import styled from "styled-components";

export const SectionContainer = styled.section`
        background-color: white;
        margin-bottom: 10px;
        padding-bottom: 15px;

    @media (max-width: 767px) {
        border-bottom: none;
        display: block;
        margin: 0 auto;
    }
`;

export const SectionHeader = styled.h2`
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