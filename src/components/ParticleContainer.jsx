import React, {Component} from 'react';
import Particles from 'react-particles-js';


class ParticlesContainer extends Component {
render() {
    return ( 
        <Particles 
        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}
            style = {{
                position: "absolute",
                top:0,
                right: 0 ,
                bottom :0,
                left:0,
                'z-index' : -8888
            }}
            />
    )
}
}

export default ParticlesContainer;