import { useState, useEffect } from 'react'
import abi from "./contractJson/Coffee.json"
import {ethers} from "ethers";
import './App.css'


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState( "Not Connected");

  useEffect(() => {
    const template = async () => {

      const contractAddress = "0x6b227B11a7939d3bf05f72eb18e887FC29e83574";
      const contractABI = abi.abi;

      try {
        // Metamask
        const { ethereum } = window;

        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })

        setAccount(account);
        
        const provider = new ethers.providers.Web3Provider(ethereum); // for reading the blockchain

        const signer = provider.getSigner(); // for changing the state of the blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        console.log(contract);
        setState(provider, signer, contract);
      } catch(err){
        alert(err);
      }

      

    }
    template();
  }, [])

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
