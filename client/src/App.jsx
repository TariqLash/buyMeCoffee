import { useState, useEffect } from 'react'
import abi from "./contractJson/Coffee.json"
import { ethers } from "ethers";
import './App.css'
import Memos from './components/Memos';
import Buy from './components/Buy';
import Navbar from './components/Navbar';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    const template = async () => {

      const contractAddress = "0xFFAeB633C4CcCB23F78961f3CD852728F61D5Eda";
      const contractABI = abi.abi;

      try {

        const { ethereum } = window;
        
        // changes account instantly instead of needing a reload
        window.ethereum.on("accountsChanged", () => {
          window.location.reload()
        })
        
        // read the Blockchain
        const provider = new ethers.providers.Web3Provider(ethereum);
        
        //write the blockchain
        const signer = provider.getSigner();

        // set account to current user, address 0
        let accounts = await provider.send("eth_requestAccounts", []);
        let account = accounts[0];
        setAccount(account);

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        
        setState({ provider, signer, contract });

      } catch (error) {
        console.log(error)
      }



    }
    template();
  }, [])

  return (
    <html data-theme="" className='App'>
      <Navbar state={state} />
      Connected account: {account}

      <Buy state={state} />
      <Memos state={state} />
    </html>
  )
}

export default App
