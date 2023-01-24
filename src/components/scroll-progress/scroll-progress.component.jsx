const ScrollProgress = ({ items, position}) => {

    let bars = [];
    for (let i = 0; i < items; i++) {
        bars.push('');
    }

    const pBar = bars.map((_, i) => {
        return position === i ? (
                <div
                key={i} 
                className="flex-[0_0_2rem] h-0.5 bg-white/90"             
                >
                </div>
            ) : (
                <div
                key={i} 
                className="flex-[0_0_2rem] h-0.5 bg-white/50"             
                >
                </div>
            )
        
    });

    return (
        <div className="flex gap-1">
            {pBar}
        </div>
    )
}

export default ScrollProgress;

