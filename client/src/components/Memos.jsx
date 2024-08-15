import React, { useEffect, useState } from 'react'
import coffeeIcon from '../assets/coffeeIcon.png'

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  // set contract instance
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      console.log(memos);

      var newestFirstMemos = [];

      var numMemos = memos.length - 1;
      var count = 0;

      while (numMemos >= 0) {
        newestFirstMemos[count] = memos[numMemos];
        count++;
        numMemos--;
      }

      console.log(newestFirstMemos);
      setMemos(newestFirstMemos);
    }
    // contract instance ready then call memoMessage function
    contract && memosMessage();
  }, [contract])


  return <div class='flex flex-col items-center'>
    {memos.map((memo) => {
      return <div className="card memo bg-primary-content m-3 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{memo.name}</h2>
            <p>{memo.message}</p>
            <div className="card-actions justify-end">
              
              <div className="">{new Date(memo.timestamp * 1000).toLocaleString()}</div>
            </div>
          </div>
        </div>
    })
    }
  </div>

}

export default Memos