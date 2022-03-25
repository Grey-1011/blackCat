const string = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::after, *::before {
    box-sizing: border-box;
}

.skin {
    background: #161616;
    position: relative;
    min-height:50vh;
}

.ear {
    border: 3px solid #fff;
    background: #fff;
    width: 48px;
    height: 102px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -24px;
}

.ear::before, .ear::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 23px;
    height: 12px;
    width: 2px;
    border-radius: 50%;
    background: #161616;

}

.ear::after {
    transform-origin: 50% 100%;
}

.ear.left {
    transform: rotate(-15deg) translateX(-80px);
    border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
}

.ear.left::after, .ear.left::before {
    right: 10%;
}

.ear::after {
    transform: rotate(-45deg);
}

.ear.right {
    transform: rotate(15deg) translateX(80px);
    border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
}

.ear.right::after, .ear.right::before {
    left: 10%;
}

.ear.right::after {
    transform: rotate(45deg);
}

.face {
    position: absolute;
    background: #161616;
    width: 176px;
    height: 156px;
    left: 50%;
    top: 174px;
    margin-left: -88px;
    border-radius: 50%;
}

.face>.eye {
    background: #fff;
    width: 60px;
    height: 52px;
    position: absolute;
    left: 50%;
    margin-left: -26px;
    bottom: 50px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.face>.eye.left {
    transform: translateX(-59px);
}

.face>.eye.right {
    transform: translateX(51px);
}

.eye::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 0;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background: #161616;
    animation: blink 4s infinite ease-in;
}

@keyframes blink {
    0% {
        height: 0;
    }

    90% {
        height: 0;
    }

    92.5% {
        height: 100%;
    }

    95% {
        height: 0;
    }

    97.5% {
        height: 100%;
    }

    100% {
        height: 0;
    }
}

.eye.left::before, .eye.right::before {
    content: '';
    position: absolute;
    top: 60%;
    height: 10%;
    width: 15%;
    background: #fff;
    border-radius: 50%;
}

.eye.left::before {
    right: -5%;
}

.eye.right::before {
    left: -5%;
}

.pupil {
    width: 20%;
    height: 50%;
    position: absolute;
    top: 25%;
    border-radius: 50%;
    background: #161616;
    animation: look-around 4s infinite;
}

.pupil.left {
    right: 16px;
}

.pupil.right {
    left: 16px;
}

@keyframes look-around {
    0% {
        transform: translate(0);
    }

    5% {
        transform: translate(50%, 25%);
    }

    10% {
        transform: translate(50%, -25%);
    }

    15% {
        transform: translate(-100%, -25%);
    }

    20% {
        transform: translate(-100%, -25%);
    }

    25% {
        transform: translate(0);
    }

    100% {
        transform: translate(0);
    }
}

.pupil::after {
    content: '';
    position: absolute;
    top: 30%;
    width: 35%;
    height: 20%;
    background: #fff;
    border-radius: 50%;
}


.nose {
    position: absolute;
    top: 270px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 10px;
    background: #fff;
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
}`

export default string