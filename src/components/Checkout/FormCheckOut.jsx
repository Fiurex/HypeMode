import React from 'react'

const FormCheckOut = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
     <form onSubmit={handleSubmitForm} className="form-checkout">
        <h2>Checkout</h2>
        <div className="content-input">
        <label htmlFor="">Nombre completo</label>
        <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} />
        </div>
    
        <div className="content-input">
        <label className="label">Telefono:</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Email:</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
      </div>

    <button type="submit" className="button-send-order">Enviar Pedido</button>
</form>
  )
}

export default FormCheckOut;