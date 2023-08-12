import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;
min-height: 120vh;

.formacao {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 30rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    h1 {
        margin-bottom: 30px;
        font-size: 30px;
        text-align: start;
    }

    input {
        width: 340px;
        margin: 8px;
        padding: 12px;
        
    }
    
    @media screen and (max-width: 1075px) {
        h1 {
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 767px) {
        width: 25rem;
        padding-left: 2rem;

        .btn-btn {
            margin-left: -6px;
        }

        .btn {
            margin-right: 13rem;
            width: 105%;
        }

    }
    @media screen and (max-width: 551px) {
        width: 23rem;
        margin-left: 0.8;

        h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .btn-btn {
            margin-left: -15px;
        }

        .btn {
            margin-right: 212px;
            width: 115%;
        }
    }
@media screen and (max-width: 547px) {
    h1 {
        font-size: 30px;
    }
    }
    @media screen and (max-width: 400px) {
        width: 15rem;
        margin-left: 1rem;

        input {
            width: 218px;
        }

        h1 {
            font-size: 23px;
            margin-right: 118px;
            text-align: center;
        }
        .btn-btn {
            margin-left: 80px;
            width: 50%;
            font-size: 12px;
        }
        .btn {
            width: 130%;
            font-size: 16px;
        }
    }
}

button {
        margin-right: 214px;
        background: #f3f3f3;
        border-radius: 15px;
        border: 2px solid white;
        width: 36%;
        height: 45px;
        font-size: 16px;
        font-weight: 900;
        color: #3c2166;
        cursor: pointer;
        margin-top: 12px;
        margin-bottom: 30px;
        margin-left: 18px;
}

.btn {
        margin-left: 209px;
        background: #3c2166;
        border-radius: 15px;
        border: 2px solid white;
        width: 83%;
        height: 55px;
        font-size: 20px;
        font-weight: 900;
        color: #f3f3f3;
        cursor: pointer;
        margin-top: 8px;
        margin-bottom: 8px;
}

.idioma {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 30rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;

    h1 {
        margin-bottom: 30px;
        font-size: 30px;
        text-align: start;
    }

    input {
        width: 340px;
        margin: 8px;
        padding: 12px;
        
    }
    
    @media screen and (max-width: 1075px) {
        h1 {
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 767px) {
        width: 25rem;
        padding-left: 2rem;

        .btn-btn {
            margin-left: -6px;
        }

        .btn {
            margin-right: 13rem;
            width: 105%;
        }

    }
    @media screen and (max-width: 551px) {
        width: 23rem;
        margin-left: 0.8;

        h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .btn-btn {
            margin-left: -15px;
        }

        .btn {
            margin-right: 212px;
            width: 115%;
        }
    }
@media screen and (max-width: 547px) {
    h1 {
        font-size: 30px;
    }
    }
    @media screen and (max-width: 400px) {
        width: 15rem;
        margin-left: 1rem;

        input {
            width: 218px;
        }

        h1 {
            font-size: 23px;
            margin-right: 118px;
            text-align: center;
        }
        .btn-btn {
            margin-left: 80px;
            width: 50%;
            font-size: 12px;
        }
        .btn {
            width: 130%;
            font-size: 16px;
        }
    }
}

.ferramentas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 30rem;
    min-height: 10rem;
    margin-top: 2rem;
    border-radius: 25px;
    padding: 30px;
    margin-bottom: 30px;

    h1 {
        margin-bottom: 30px;
        font-size: 30px;
        text-align: start;
    }

    input {
        width: 340px;
        margin: 8px;
        padding: 12px;
        
    }
    
    @media screen and (max-width: 1075px) {
        h1 {
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 767px) {
        width: 25rem;
        padding-left: 2rem;

        .btn-btn {
            margin-left: -6px;
        }

        .btn {
            margin-right: 13rem;
            width: 105%;
        }

    }
    @media screen and (max-width: 551px) {
        width: 23rem;
        margin-left: 0.8;

        h1 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .btn-btn {
            margin-left: -15px;
        }

        .btn {
            margin-right: 212px;
            width: 115%;
        }
    }
@media screen and (max-width: 547px) {
    h1 {
        font-size: 30px;
    }
    }
    @media screen and (max-width: 400px) {
        width: 15rem;
        margin-left: 1rem;

        input {
            width: 218px;
        }

        h1 {
            font-size: 23px;
            margin-right: 118px;
            text-align: center;
        }
        .btn-btn {
            margin-left: 80px;
            width: 50%;
            font-size: 12px;
        }
        .btn {
            width: 130%;
            font-size: 16px;
        }
    }
}

.bt {
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
    margin-right: 73px;
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