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


  return <div class='memoContainer'>
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        {memos.map((memo) => {
          return <tbody>
            {/* row 1 */}
            <tr>
              <td>{memo.name}</td>
              <td>{memo.message}</td>
              <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
            </tr>
          </tbody>





          // <div id='memo'>
          //   <p>{memo.name}</p>
          //   <p>{memo.message}</p>
          //   <p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
          //   <p>{memo.from}</p>
          // </div>
        })
        }
      </table>
    </div>
  </div>

}

export default Memos