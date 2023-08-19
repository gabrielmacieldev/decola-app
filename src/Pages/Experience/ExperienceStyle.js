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
        margin-right: 31px;
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