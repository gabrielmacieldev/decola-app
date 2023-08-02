import styled from "styled-components"

export const Image = styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 0;
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    h1{
        text-align: start;
        margin-right: 190px;
        color: #3c2166;
    }

    img {
        border-radius: 50%
    }

    p{
        font-size: 25px;
        text-align: center;
        color: #3c2166;
    }

    button {
        margin-bottom: 1rem;
        padding: 9px 40px;
        border-radius: 12px;
        border: none;
        font-weight: 900;
        background-color: #3c2166;
        color: #f3f3f3;
        cursor: pointer;
    }
}

.sobre {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    textarea {
        width: 340px;
        height: 200px;
        background: rgba(255, 255, 255, .20);
        border: 2px solid #f3f3f330;
        backdrop-filter: blur(15px);
        padding: 15px;
        resize: none;
    }
}

.contato {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    input {
        margin: 8px;
        padding: 12px;
    }
}

.social {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    input {
        margin: 8px;
        padding: 12px;
    }
}

.dispo {
    display: block;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    input {
        margin: 8px;
        padding: 12px;
    }
}

.mod {
    display: block;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    input {
        width: 340px;
        margin: 8px;
        padding: 12px;
    }
}

.anexo {
    display: block;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 24rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;
    margin-bottom: 2rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3c2166;
        border-radius: 15px;
        border: 2px solid white;
        width: 70%;
        height: 55px;
        font-size: 20px;
        font-weight: 900;
        color: #f3f3f3;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #f3f3f3;
        color: #3c2166;
    }

    .icons {
        margin-right: 8px;
    }
    
    .icons:hover {
        background-color: transparent;
    }
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 12px;
}

.voltar {
    margin: 0 8px;
    padding: 12px 65px;
    height: 55px;
    font-size: 20px;
    border-radius: 15px;
    border: 2px solid transparent;
    background-color: #f3f3f3;
    color: #3c2166;
    font-weight: 900;
    cursor: pointer;
}

.proximo {
    margin: 0 8px;
    padding: 12px 65px;
    height: 55px;
    font-size: 20px;
    border-radius: 15px;
    border: 2px solid transparent;
    background-color: #3c2166;
    color: #f3f3f3;
    font-weight: 900;
    cursor: pointer;
}

.proximo:hover {
    background-color: #f3f3f3;
    color: #3c2166;
}

`