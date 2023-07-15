import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.logo {
    @media (max-width: 1000px) {
        width: 800px;
    }
    @media (max-width: 800px) {
        width: 600px;
    }
    @media (max-width: 600px) {
        width: 400px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }

}

input {
    background: #dfdfdf;
    border-radius: 30px;
    width: 365px;
    height: 55px;
    margin-top: 1vh;
   
}

button {
    background: orange;
    border-radius: 30px;
    width: 365px;
    height: 55px;
    margin-top: 1vh;

}

`