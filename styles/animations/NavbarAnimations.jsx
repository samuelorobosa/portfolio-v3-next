export const listContainer = {
    hidden: {
        opacity: 0,
        y: '-10vh'
    },
    visible: {
        opacity: 1,
        y : 0,
        transition: {
            delay: 0.3,
            type: "spring",
            duration: 0.3,
            staggerChildren: 0.2,
            stiffness: 300,

        }
    },
}

export const listItem = {
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y : 0,
    }
}

export const logoItem = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
            stiffness: 300,
        }
    }
}