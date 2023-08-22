import styled from "styled-components"

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.scene{
    position: relative;
    width: 100%;
    height: 100vh;
    background: #3c2166;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scene i{
    position: absolute;
    top: -250px;
    background: rgba(255,255,255, 0.5);
    animation: animateStars linear infinite;
}
@keyframes animateStars {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(200vh);
    }
}

.scene .rocket{
    position: relative;
    animation: animate 0.2s ease infinite;
}
@keyframes animate {
        0%,100%{
            transform: translateY(-2px);
        }
        50%{
            transform: translateY(2px);
        }

}
.scene .rocket::before{
    content: '';
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 200px;
    background: linear-gradient(#00d0ff,transparent);
}

.scene .rocket::after{
    content: '';
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 200px;
    background: linear-gradient(#00d0ff,transparent);
    filter: blur(20px);
}

`