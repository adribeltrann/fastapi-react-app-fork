import { useEffect, useRef } from 'react'
import axiosInstance from '../../services/axios'

export function Users() {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) return
    const initialize = async () => {
      const response = await axiosInstance.get('/users/me')
    }
    initialize()
  })

  return <h4>Users</h4>
}
