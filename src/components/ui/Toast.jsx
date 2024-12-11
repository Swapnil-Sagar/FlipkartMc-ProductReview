/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import './Toast.css' // For styling

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return <div className={`toast toast-${type}`}>{message}</div>
}

export default Toast
