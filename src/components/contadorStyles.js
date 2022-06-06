import styled from 'styled-components';

export const Container = styled.div `
    font-size: 200px;
    display: relative;
`

export const Button = styled.button `
    background-color: rgba(0, 0, 0);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 45%;
    width: 150px;
    height: 150px;
    font-size: 100px;
    margin: 0 200px;

    &:hover {
        cursor: pointer;
        transition: 0.2s;
        background-color: #2C2E2D;
    }
`

export const ContainerButton = styled.div`
    position: absolute;
    top: 1.8em;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Count = styled.div `
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 1.22em;
    border-radius: 45%;
    width: 170px;
    height: 170px;
    line-height: 200px;
    margin: 6px auto;
`

