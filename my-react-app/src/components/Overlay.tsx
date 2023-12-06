import React from "react";

interface OverlayProps {
    isOpen: () =>  void;
    isClose: () => void;
  
}

const Overlay : React.FC<OverlayProps> = () => {

    return (
        <div className="overlay">

        </div>
    )
    
}

export default Overlay
