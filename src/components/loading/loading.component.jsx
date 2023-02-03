const Loading = ({ itemsPerRow }) => {
    let imgWidth = 100 / itemsPerRow;

    const arr = [...Array(itemsPerRow)].map((_,i) => (
        <div 
        key={i}
        style={{ maxWidth: `${imgWidth}%` }}
        className="bg-zinc-700 animate-pulse"
        >
        </div>
    ));
    
    return (
           {arr}
        )
}

export default Loading;