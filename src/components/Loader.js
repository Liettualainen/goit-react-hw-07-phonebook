import { Bars } from 'react-loader-spinner';
export const Loader = ({ isVisible}) => {
        return (
        <>
                <Bars 
           
                height="50"
                width="50"
                color="green"
                ariaLabel="bars-loading"
                    wrapperStyle={{
                            margin: '0 100px' }}
                wrapperClass=""
                visible={isVisible}
            />
        </>
        );
    }
// }

export default Loader;