import React from 'react'
import { ethers } from 'ethers'
import coffeeIcon from '../assets/coffeeIcon.png'

const Buy = ({ state }) => {

  const buyCoffee = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    // static method for now but will create dynamic way in the future
    const amount = { value: ethers.utils.parseEther("0.001") };

    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
    alert("Transaction was successful");
    console.log(name + " has sent " + amount + "ether!");
    console.log(name, message, amount);
  }

  return (
    <div className='flex justify-center'>
      <form onSubmit={buyCoffee} className='flex flex-col justify-around items-center p-5 m-5 rounded-lg bg-primary-content buyCoffeeForm'>
        <img src={coffeeIcon} alt="" className='w-44'/>
        <input type="text" placeholder="Name" id='name' className="input input-bordered w-full h-16 mb-2 max-w-xs" />
        <input type="text" placeholder="Message" id='message' className="input input-bordered w-full h-16 mb-2 max-w-xs" />
        <button type='submit' className="btn w-full h-12 max-w-x submitButton">Button</button>
      </form>
    </div>
  )
}

export default Buy