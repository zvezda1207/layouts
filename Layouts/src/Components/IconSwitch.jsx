import React from 'react'; 

const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div className="icon-switch" onClick={onSwitch}>
            <i className="material-icons">{icon}</i> {/* Иконка */}
        </div>
    );
};

export default IconSwitch;