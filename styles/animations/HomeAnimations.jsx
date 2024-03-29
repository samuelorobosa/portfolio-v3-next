export const container = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            delayChildren: 0.1,
            staggerChildren: 0.04
        }
    }
}

export const textItem = {
    hidden: {
        height: '1px',
        overflowY: 'hidden'
    },
    visible: {
        height: 'auto',
        transition: { type: "tween", duration: 0.2 }
    }
}