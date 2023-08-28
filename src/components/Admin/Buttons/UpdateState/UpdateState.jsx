import React, { useState } from 'react'

// STYLES:
import s from '../UpdateState/UpdateState.module.css'

const UpdateState = ({ altaOBaja, handleAltaOBaja }) => {
  const [altaobaja, setaltaobaja] = useState(false)

  const handleToggle = () => {
    handleAltaOBaja(!altaOBaja);
    setaltaobaja(!altaOBaja)
  };

  return (
    <div className={s.bauble_box}>
      <p className={altaOBaja ? s.alta : s.baja}>{altaOBaja ? 'Baja' : 'Alta'}</p>
      <input
        className={s.bauble_input}
        id="bauble_check"
        name="bauble"
        type="checkbox"
        checked={altaOBaja}
        onChange={handleToggle}
      />
      <label className={s.bauble_label} htmlFor="bauble_check">Cambiar</label>
    </div>
  );
};

export default UpdateState