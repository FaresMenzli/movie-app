 import React from 'react'

const Ratingtab = (props) => {
    let tab =[]
    for (let i=0; i<5 ;i++){
        console.log(props.a)
        if (i<props.a ) {
            

            tab.push("★")
        }
        else tab.push ("☆")
    }
    return (
         <>
            {tab}
            </>
      
    )
}

export default Ratingtab
 