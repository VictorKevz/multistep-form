export const stepVariants = (direction) => ({
    hidden:{
        opacity:0,
        x: direction === "right" ? 50:-50,
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            type:"tween",
            ease:"easeInOut",
            duration:0.6
        }
    },
    exit:{
     x:direction === "left" ? -50:50,
     opacity:0,
     transition:{
        duration:0.3
     }   
    }
    })
   
    export const cardsVariants = {
        hidden:{
            opacity:0,
            x:-50,
            transition: { duration: 0.4 },
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                ease:"easeInOut",
                duration:0.6,
            }
        },
    }

    