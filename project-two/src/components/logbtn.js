import React from 'react' ;
import { useNavigate } from 'react-router-dom';

export default function RedirectBtn() {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate ('/registerFrom');
    }

    return(
        <div>
            <button onClick={handleClick} className='px-4 py-2 font-semibold text-white bg-[#42b883] rounded-md hover:bg-[#42b883d3] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>Реєстрація</button>
        </div>
    )
}