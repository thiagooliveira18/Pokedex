import React, { useState } from "react";
import './style.css';

import FilterIcon from '../../assets/seta-para-baixo.png';

export default function FilterButton(){

    const [modalOpen, setModalOpen] = useState(false);

    const button = () => {
        if(!modalOpen){
            return(<div className='filter-button'><img src={FilterIcon} alt='' className='filter-icon' /></div>);
        }else{
            return <></>
        }
    }
    
    return(
        <>
            {
                button
            }
        </>
    );
}