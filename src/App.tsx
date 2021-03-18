import React, { useState } from 'react'

interface user {
  name: string
  age: number
}
export default function App() {
  const [user, setUser] = useState<user>()
  return (
    <div>
      Hello {user}
    </div>
  )
}
