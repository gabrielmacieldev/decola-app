import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: lightgrey;
min-height: 120vh;

.experiencia {
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

.btn-experiencia {
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

.cl-toggle-switch {
    position: relative;
}

.cl-switch {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
/* Input */
.cl-switch > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    right: 6px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgb(0, 0, 0, 0.38);
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
}
/* Track */
.cl-switch > span::before {
    content: "";
    float: right;
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 7px;
    width: 36px;
    height: 14px;
    background-color: rgb(0, 0, 0, 0.38);
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
}
/* Thumb */
.cl-switch > span::after {
    content: "";
    position: absolute;
    top: 2px;
    right: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #fff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: background-color 0.2s, transform 0.2s;
}
/* Checked */
.cl-switch > input:checked {
    right: -10px;
    background-color: #c8badc;
}

.cl-switch > input:checked + span::before {
    background-color: #c8badc;
}

.cl-switch > input:checked + span::after {
    background-color: #5c3c98;
    transform: translateX(16px);
}
/* Hover, Focus */
.cl-switch:hover > input {
    opacity: 0.04;
}

.cl-switch > input:focus {
    opacity: 0.12;
}

.cl-switch:hover > input:focus {
    opacity: 0.16;
}
/* Active */
.cl-switch > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
}

.cl-switch > input:active + span::before {
    background-color: #8f8f8f;
}

.cl-switch > input:checked:active + span::before {
    background-color: #85b8b7;
}
/* Disabled */
.cl-switch > input:disabled {
    opacity: 0;
}

.cl-switch > input:disabled + span::before {
    background-color: #ddd;
}

.cl-switch > input:checked:disabled + span::before {
    background-color: #bfdbda;
}

.cl-switch > input:checked:disabled + span::after {
    background-color: #61b5b4;
}

.cl-toggle-switch {
    margin: 8px;
    label {
        width: 320px;
        font-size: 19px;
        margin-left: 28px;
        margin-right: 45px;
    }
}

textarea {
    width: 338px;
    height: 200px;
    background: rgba(255, 255, 255, .20);
    border: 2px solid #f3f3f330;
    backdrop-filter: blur(15px);
    padding: 15px;
    resize: none;
    margin: 8px;
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

        .cl-toggle-switch {
    margin: 8px;
    label {
        text-align: start;
        width: 300px;
        font-size: 18px;
        margin-left: 15px;
        margin-right: 30px;
    }
}
}
    @media (max-width: 470px) {
        width: 22rem;
       h1 { 
           font-size: 25px;
           text-align: center;
        }

    textarea {
        width: 250px;
    }
    input {
        width: 250px;
    }
    button {
        width: 50%;
        font-size: 15px;
        margin-left: 6rem;
    }
    .btn-experiencia {
        font-size: 15px;
        width: 80%;
    }

    .cl-toggle-switch {
    margin: 8px;
    label {
        text-align: start;
        width: 240px;
        font-size: 17px;
        margin-left: 15px;
        margin-right: 30px;
    }
}
}
@media (max-width: 402px) {
    width: 20rem;
    h1{
        font-size: 22px;  
    }
    p{
        font-size: 18px;
        margin-top: 1rem;
    }
    button {
        width: 50%;
        font-size: 14px;
        margin-left: 6rem;
    }
    .btn-experiencia {
        font-size: 14px;
        width: 90%;
    }

    .cl-toggle-switch {
    margin: 8px;
    label {
        text-align: start;
        width: 240px;
        font-size: 15px;
        margin-left: 15px;
        margin-right: 30px;
    }
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
        padding: 1px 75px;
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
    padding: 1px 75px;
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
            font-size: 18px;
        }
        .voltar {
            padding: 1px 35px;
            font-size: 18px;
        }   
    }
    @media (max-width: 402px) {
        
        .proximo {
            padding: 1px 30px;  
            font-size: 17px;
        }
        .voltar {
            padding: 1px 30px;
            font-size: 17px;
        }
}
}
`