import React, { useState } from 'react'
import s from '../UpdateState/UpdateState.module.css'


const UpdateState = ({ altaOBaja, handleAltaOBaja }) => {
  const [altaobaja, setaltaobaja] = useState(false)
  const handleToggle = () => {
    handleAltaOBaja(!altaOBaja); // Toggle between alta and baja
    setaltaobaja(!altaOBaja)
    console.log(altaOBaja)

  };

  return (
    <div className={s.bauble_box}>
      <p className={altaOBaja ? s.alta : s.baja}>{altaOBaja ? 'Baja' : 'Alta'}</p>
      <input
        className={s.bauble_input}
        id="bauble_check"
        name="bauble"
        type="checkbox"
        checked={altaOBaja} // Bind the checked value to the state
        onChange={handleToggle} // Handle checkbox change
      />
      <label className={s.bauble_label} htmlFor="bauble_check">
        Toggle
      </label>
    </div>
  );
};

export default UpdateState