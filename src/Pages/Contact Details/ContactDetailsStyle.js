import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;
padding-right: 1rem;
position: relative;

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
        /* align-self: flex-start; */
        font-size: 35px;
        color: #3c2166;
    }
    img {
        border-radius: 50%
    }
    p{
        font-size: 22px;
        text-align: center;
        color: #3c2166;
    }
    
    button {
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding: 9px 40px;
        border-radius: 12px;
        border: none;
        font-weight: 900;
        background-color: #3c2166;
        color: #f3f3f3;
        cursor: pointer;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
           text-align: center;
        }

        p {
            font-size: 21px;
        }
}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;
        h1{
            font-size: 22px;  
        }
        p{
            font-size: 18px;
            margin-top: 1rem;
        }

        button {
            padding: 6px 20px ;
            margin-top: 1rem;
        }

        img {
        width: 200px;
    } 
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

    h1 {
        font-size: 35px;
        
    }

    textarea {
        width: 320px;
        height: 200px;
        background: rgba(255, 255, 255, .20);
        border: 2px solid #f3f3f330;
        backdrop-filter: blur(15px);
        padding: 15px;
        resize: none;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

        textarea {
            width: 250px;
        }

}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       textarea {
        width: 220px;
       }
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 { 
           font-size: 22px;
           
        }

        textarea {
        width: 190px;
        }
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

    h1 {
        font-size: 35px;
    }

    input {
        margin: 8px;
        padding: 12px;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       h1 {
        font-size: 26px;
       }
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 {
            font-size: 22px;  
        }
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

    h1 {
        font-size: 35px;
    }

    input {
        margin: 8px;
        padding: 12px;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       h1 {
        font-size: 26px;
       }
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 {
            font-size: 22px;  
        }
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

    h1 {
        font-size: 35px;
    }

    p {
        font-size: 18px;
    }

    input {
        margin: 8px;
        padding: 12px;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       h1 {
        font-size: 26px;
       }
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 {
            font-size: 22px;  
        }

        p {
            font-size: 16px;
        }
}
}

.mod {
    display: flex;
    justify-content: center;
    align-items: center;
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
        width: 345px;
        padding: 12px;
    }

    h1 {
        font-size: 34px;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

        input {
            width: 290px;
        }

}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       h1 {
        font-size: 26px;
       }

       input {
        width: 250px;
       }
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 {
            font-size: 22px;
          
        }

        input {
        width: 220px;
       }
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
        margin-top: 1rem;
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

    h1 {
        font-size: 35px;
    }

    p {
        font-size: 18px;
    }

    .icons {
        margin-right: 4px;
    }
    
    .icons:hover {
        background-color: transparent;
    }

    @media (max-width: 550px) {
        width: 20rem;
        padding-left: 2rem;

        h1 { 
           font-size: 28px;
        }

        button {
            width: 70%;
            font-size: 15px;
            height: 50px;
        }
}
    @media (max-width: 470px) {
        width: 18rem;
       margin-left: 0.8;

       h1 {
        font-size: 27px;
       }

       button {
            width: 70%;
            font-size: 14px;
            height: 50px;
        }
     
}
    @media (max-width: 402px) {
        width: 16rem;
        margin-left: 1rem;

        h1 {
            font-size: 22px;
           
        }

        p {
            font-size: 16px;
        }

        button {
            width: 80%;
            font-size: 14px;
            height: 50px;
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
    padding: 1px 50px;
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
    padding: 1px 50px;
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
            padding: 1px 35px;  
        }
        .voltar {
            padding: 1px 35px;
        }     
}
    @media (max-width: 470px) {
        .proximo {
            padding: 1px 28px;  
        }
        .voltar {
            padding: 1px 28px;
        }   
}
    @media (max-width: 402px) {
        margin-left: 0.9rem;

        .proximo {
            padding: 1px 20px;  
        }
        .voltar {
            padding: 1px 20px;
        }
}
}
`