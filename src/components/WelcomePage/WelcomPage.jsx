import React from "react";
import Particles from "react-particles-js";
import { useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import { AppstateType } from "../../redux/store";
import TypeIt from "typeit-react";
import "./welcome.sass";
const WelcomePage = () => {
  const isOpen = useSelector((state) => state.app.showInfoPage);

  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.molasses,
  });
  return (
    <div
      className="check"
      style={{ pointerEvents: isOpen ? "all" : "none", overflow: "hidden" }}
    >
      <animated.div
        style={{
          transform: x.interpolate((x) => `translate3d(${x * -1}%,0,0)`),
        }}
        className="checkout_left"
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 130,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: true,
                  speed: 8,
                  size_min: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: true,
                out_mode: "bounce",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 110,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <TypeIt
          className="typeit"
          options={{
            speed: 100,
            waitUntilVisible: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("Hi, my name is Alxe")
              .pause(750)
              .delete(2)
              .pause(400)
              .type("ex!")
              .pause(400)
              .type(" I am frontend developer")
              .pause(550)
              .type(" and i am looking for a job");
            // Remember to return it!
            return instance;
          }}
        />
      </animated.div>
      <animated.div
        style={{ transform: x.interpolate((x) => `translate3d(${x}%,0,0)`) }}
        className="checkout_right"
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 130,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: true,
                  speed: 8,
                  size_min: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: true,
                out_mode: "bounce",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 110,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </animated.div>
    </div>
  );
};
export default WelcomePage;
