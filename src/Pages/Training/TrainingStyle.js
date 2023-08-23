import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;
position: relative;

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
    .btn-formacao {
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

    @media (max-width: 550px) {
        width: 26rem;
        h1 { 
           font-size: 28px;
           text-align: center;
        }

        p {
            font-size: 21px;
        }
}
    @media (max-width: 470px) {
        width: 20rem;
       h1 { 
           font-size: 25px;
           text-align: center;
        }
    input {
        width: 250px;
    }
    button {
        width: 50%;
        font-size: 15px;
        margin-left: 6rem;
    }
    .btn-formacao {
        font-size: 15px;
        width: 80%;
    }
}
    @media (max-width: 402px) {
        width: 18rem;
        h1{
            font-size: 22px;  
        }
        p{
            font-size: 18px;
            margin-top: 1rem;
        }
        button {
            width: 50%;
            font-size: 15px;
            margin-left: 6rem;
        }
        img {
        width: 200px;
    } 
}
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
    .btn-idioma {
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

    @media (max-width: 550px) {
        width: 26rem;
        h1 { 
           font-size: 28px;
           text-align: center;
        }
        p {
            font-size: 21px;
        }
}
    @media (max-width: 470px) {
        width: 20rem;
    h1 { 
           font-size: 25px;
           text-align: center;
        }
    input {
        width: 250px;
    }
    button {
        width: 50%;
        font-size: 15px;
        margin-left: 6rem;
    }
    .btn-idioma {
        font-size: 15px;
        width: 80%;
    }
}
    @media (max-width: 402px) {
        width: 18rem;
        h1{
            font-size: 22px;  
        }
        p{
            font-size: 18px;
            margin-top: 1rem;
        }
        button {
            width: 50%;
            font-size: 15px;
            margin-left: 6rem;
        }
        img {
        width: 200px;
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
    .btn-ferramentas {
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

    @media (max-width: 550px) {
        width: 26rem;
        h1 { 
           font-size: 28px;
           text-align: center;
        }
        p {
            font-size: 21px;
        }
}
    @media (max-width: 470px) {
        width: 20rem;
       h1 { 
           font-size: 25px;
           text-align: center;
        }
    input {
        width: 250px;
    }
    button {
        width: 50%;
        font-size: 15px;
        margin-left: 6rem;
    }
    .btn-ferramentas {
        font-size: 15px;
        width: 80%;
    }
}
    @media (max-width: 402px) {
        width: 18rem;
        h1{
            font-size: 22px;  
        }
        p{
            font-size: 18px;
            margin-top: 1rem;
        }
        button {
            width: 50%;
            font-size: 15px;
            margin-left: 6rem;
        }
        .btn-ferramentas {
        font-size: 15px;
        width: 90%;
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
    padding: 1px 70px;
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
    padding: 1px 70px;
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
            padding: 1px 55px;  
        }
        .voltar {
            padding: 1px 55px;
        }     
}
    @media (max-width: 470px) {
        .proximo {
            padding: 1px 35px;  
        }
        .voltar {
            padding: 1px 35px;
        }   
}
    @media (max-width: 402px) {

        .proximo {
            padding: 1px 25px;  
        }
        .voltar {
            padding: 1px 25px;
        }
}
}
`