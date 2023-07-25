import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: gray;
    width: 24rem;
    min-height: 10rem;
    margin-top: 4rem;
    border-radius: 30px;
    border: 1px solid #E0E0E0;

    h1{
        text-align: start;
    }

    p{
        font-size: 30px;
        text-align: center;
    }

    button {
        margin-bottom: 1rem;
        padding: 5px;
        font-weight: 900;
        background-color: #3c2166;
        color: #f3f3f3;
    }
}

.sobre {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    input {
        width: 300px;
        height: 200px;
    }
}

`