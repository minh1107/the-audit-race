import React from 'react'

const CountDown = ({time, exprire}) => {
  return (
    <div>
        {exprire === true ? 0 : time > 9 ? time : `0${time}`} 
    </div>
  )
}

export default CountDown