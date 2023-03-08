import ProfileCard from '../components/atoms/ProfileCard';
import '../styles/hide-scrollbar.css';

const Home = () => {
    return (
        <div className='flex flex-col pt-9 gap-9'>
            <h1 className='mx-auto font-bold text-4xl text-dark-grey-base'>
                Artist<span className='text-primary-base'>All</span>
            </h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Profili</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                    </div>
                </div>
                {/* Copia la div sopra a questo commento e completa le altre sezioni */}
            </div>
        </div>
    );
};

export default Home;
