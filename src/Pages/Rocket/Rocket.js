import React, { useEffect } from 'react'
import { Container } from './RocketStyle'
import rocket from '../../assets/rocket.png'

const Rocket = () => {

    function stars() {
        let count = 150;
        let scene = document.querySelector('.scene');
        let i = 0;
        while (i < count) {
            let star = document.createElement('i');
            let x = Math.floor(Math.random() * window.innerWidth);
            let duration = Math.random() * 1;
            let h = Math.random() * 100;

            star.style.left = x + 'px';
            star.style.width = 1 + 'px';
            star.style.height = 60 + 'px';
            star.style.animationDuration = duration + 's';

            scene.appendChild(star);
            i++;
        }
    }

    useEffect(() => {
        stars();
    }, [])

    return (

        <Container>
            <div class="scene">
                <div class="rocket">
                    <img src={rocket} alt="rocket"></img>
                </div>
            </div>

        </Container>
    )
}

export default Rocket