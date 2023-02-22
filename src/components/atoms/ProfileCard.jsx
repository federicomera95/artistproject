const ProfileCard = ({artName, imageProfile}) => {
    return(
        <div className="flex flex-col gap-2">
            <img className="w-[90px] h-[90px] rounded-[50%]" src={imageProfile}/>
            <p className="text-xs">{artName}</p>
        </div>
    );
};

export default ProfileCard;