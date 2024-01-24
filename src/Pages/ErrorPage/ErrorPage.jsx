import error from './../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <img className='w-full h-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;