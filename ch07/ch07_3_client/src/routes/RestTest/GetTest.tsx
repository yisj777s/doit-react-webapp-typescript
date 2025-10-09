import {useState, useEffect} from 'react'

export default function GetTest() {
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:5173/test')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }, [])

  return (
    <div>
      <p className="text-2xl text-center text-bold">GetTest</p>
      <div className="mt-4"></div>
    </div>
  )
}
