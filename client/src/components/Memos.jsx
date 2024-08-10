import React, { useEffect, useState } from 'react'

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  // set contract instance
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
      // console.log(memos)
    }
    // contract instance ready then call memoMessage function
    contract && memosMessage();
  }, [contract])

  return <>
    {memos.map((memo) => {
      return <div>
        <p>{memo.name}</p>
        <p>{memo.message}</p>
        <p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
        <p>{memo.from}</p>
      </div>
    })}
  </>

}

export default Memos