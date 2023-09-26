import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;
position: relative;

.sobre {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 0.2rem;
    background: rgba(255, 255, 255, .30);
    border: 2px solid #ffffff30;
    color: #3c2166;
    backdrop-filter: blur(15px);
    width: 30rem;
    min-height: 10rem;
    margin-top: 1rem;
    border-radius: 25px;
    padding: 20px;

    h1 {
        font-size: 28px;
    }
    h2 {
        font-size: 19px;
    }
    p {
        font-size: 18px;
    }
    input {
        width: 420px;
        margin: 8px;
        padding: 12px;
    }
    button {
            background: #f3f3f3;
            border-radius: 15px;
            border: 2px solid white;
            width: 50%;
            height: 45px;
            font-size: 16px;
            font-weight: 900;
            color: #3c2166;
            cursor: pointer;
            margin-top: 12px;
            margin-bottom: 30px;
    }

    @media (max-width: 550px) {
        width: 26rem;
        h1 { 
           font-size: 25px;
           text-align: center;
        }
        h2 {
            font-size: 17px;
        }
        p {
            font-size: 17px;
        }
        strong {
            font-size: 16px;
        }
        button {
            width: 60%;
        }
        input {
            width: 350px;
        }
}
    @media (max-width: 470px) {
        width: 24rem;
       h1 { 
           font-size: 25px;
           text-align: center;
        }
    input {
        width: 320px;
    }
    p {
        font-size: 15px;
    }
    strong {
        font-size: 15px;
    }
    button {
        width: 60%;
        font-size: 15px;
    }
}
    @media (max-width: 402px) {
        width: 20rem;
        h1{
            font-size: 22px;  
        }
        h2 {
            font-size: 16px;
        }
        input {
            width: 280px;
        }
        p{
            font-size: 15px;
        }
        strong {
        font-size: 14px;
        }
        button {
            width: 70%;
            font-size: 14px;
        }  
}
}
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 12px;
.voltar {
    margin: 0 8px;
    padding: 1px 65px;
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
    padding: 1px 65px;
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
@media (max-width: 550px) {
        .proximo {
            padding: 1px 49px;  
        }
        .voltar {
            padding: 1px 49px;
        }     
}
    @media (max-width: 470px) {
        .proximo {
            padding: 1px 44px;  
            font-size: 18px;
        }
        .voltar {
            padding: 1px 44px;
            font-size: 18px;
        }   
}
    @media (max-width: 402px) {

        .proximo {
            padding: 1px 34px;
            font-size: 16px;
        }
        .voltar {
            padding: 1px 34px;
            font-size: 16px;
        }
}
}
`