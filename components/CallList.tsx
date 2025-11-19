import React from 'react'

interface CallListProps {
  type: 'upcoming' | 'previous' | 'recordings'
}

const CallList = ({ type }: CallListProps) => {
  return (
    <div>CallList - {type}</div>
  )
}

export default CallList