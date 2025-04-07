import React from 'react'
const relativeList = ["Uncle", "Aunt", "Cousin", "Grandparents"];

const Main = () => {
  return (
    <div>
    <ol key="relativelist">
        {relativeList.map((name,index)=>(
            <li key={`relativeList,${index+1}`}>{name}</li>
        ))}
        </ol>
    </div>
  )
}

export default Main