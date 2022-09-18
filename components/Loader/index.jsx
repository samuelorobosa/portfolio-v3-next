import { useNProgress } from '@tanem/react-nprogress'

const Loader = ({isRouteChanging}) => {
    const { animationDuration, isFinished, progress } = useNProgress({isAnimating: isRouteChanging,})

    return (
        <>
            <style jsx>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointer-events: none;
          transition: opacity ${animationDuration}ms linear;
        }
        .bar {
          background: #2667FF;
          height: 5px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }
      `}</style>
            <div className="container">
                <div className="bar"></div>
            </div>
        </>
    )
}

export default Loader