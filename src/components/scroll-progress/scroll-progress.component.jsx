const ScrollProgress = ({ items, position}) => {

    let bars = [];
    for (let i = 0; i < items; i++) {
        bars.push('');
    }

    const pBar = bars.map((_, i) => {
        return position === i ? (
                <div
                key={i} 
                className="flex-[0_0_12px] h-px bg-white/90"             
                >
                </div>
            ) : (
                <div
                key={i} 
                className="flex-[0_0_12px] h-px bg-white/50"             
                >
                </div>
            )
        
    });

    return (
        <div
            className="flex gap-0.5 max-[480px]:pr-[40%] pr-[20%] sm:pr-[15%] md:pr-[10%]">
            {pBar}
        </div>
    )
}

export default ScrollProgress;

