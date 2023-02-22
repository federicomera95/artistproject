const AudioCard = ({title, artName, audio}) => {
    return(
        <div className="flex flex-col">
            <img className="w-[90px] h-[90px]" src={audio}/>
            <p className="text-xs">{title}</p>
            <p className="text-[8px]">{artName}</p>
        </div>
    );
};

export default AudioCard;