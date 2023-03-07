import Button from "../components/atoms/Button";


const Success = ({text}) => {
    return(
        <div className="flex flex-col gap-[48px] justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <img src="/success.svg" className="w-[100px] h-[100px]"></img>
                <p className="text-2xl font-semibold">{text}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Button text="Carica un'altra foto" style="primary" size="medium"></Button>
                <Button text="Torna al profilo" style="secondary"></Button>
            </div>
        </div>
    );
};

export default Success;