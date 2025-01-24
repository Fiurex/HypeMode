import React from 'react'
import { useState, useContext } from 'react'
import FormCheckOut from './FormCheckOut'
import { CartContext } from '../../Context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../DB/db.js'
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    })

    const [orderId, setOrderId] = useState(null)
    const { cart, totalPrice } = useContext(CartContext)

    const handleChangeInput = (event)=>{

        setDataForm( {...dataForm, [event.target.name] : event.target.value } )
    
    }

    const handleSubmitForm =async(event) =>{
        event.preventDefault()
        const order={ 
            comprador: {...dataForm},
            products: {...cart},
            total: totalPrice(),
            date: Timestamp.fromDate( new Date())
           
            
        }
        await   uploadOrder(order)

    }

    const uploadOrder = async(newOrder) =>{
        try{
            const ordersRef = collection(db, "orders")
            const response= await addDoc(ordersRef,newOrder )
            setOrderId(response.id)
        }catch(error){
            console.log(error)
        }

    }

  return (
    <div className="checkout">
        {
            orderId ? (
                <div>
                <h2>Orden subida correctamente! Guarde su numero de seguimiento</h2>    
                <h3>{orderId}</h3>
                </div>
            ): (

       <FormCheckOut
       dataForm={dataForm}
       handleChangeInput={handleChangeInput}
       handleSubmitForm={handleSubmitForm}
       />
    )
}
    </div>
  )
} 



export default Checkout