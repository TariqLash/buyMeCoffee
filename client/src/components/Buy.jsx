import React from 'react'
import {ethers} from 'ethers'

const Buy = ({ state }) => {

  const buyCoffee = async (event) => {
    event.preventDefault();
    const {contract} = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    // static method for now but will create dynamic way in the future
    const amount = {value:ethers.utils.parseEther("0.001")};

    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
    alert("Transaction was successful");
    console.log(name + " has sent " + amount + "ether!");
    console.log(name, message, amount);
  }

  return (
    <>

      <form onSubmit={buyCoffee}>
        <input type="text" placeholder='name' id='name'/>
        <input type="text" placeholder='messge' id='message'/>
        <button type='submit'>pay</button>
      </form>

    </>
  )
}

export default Buy