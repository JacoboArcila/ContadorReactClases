import styled from 'styled-components';

export const Container = styled.div `
    font-size: 200px;
    display: relative;
    height: 100%;
`

export const Button = styled.button `
    border: 1px solid black;
    padding: 10px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    font-size: 100px;
    display: absolute;
    top: 1.6em;
    left: 0;
    right: 0;
    margin: 0 auto;

    &:hover {
        cursor: pointer;
        transition: 0.2s;
        background-color: green;
    }
`

export const ContainerButton = styled.div`
    position: absolute;
    top: 1.6em;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Count = styled.div `
    border: 1px solid red;
    padding: 1.22em;
    background-color: none;
    border-radius: 50%;
    width: 200px;
    height: 180px;
    margin-left: 27%;
`

