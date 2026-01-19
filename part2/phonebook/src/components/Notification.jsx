const Notification = ({ successMessage, errorMessage }) => {
  if (successMessage === null && errorMessage === null) {
    return null
  }

  if (successMessage !== null) {
    return (
    <div className="success">
      {successMessage}
    </div>
  )}
  return (
  <div className="error">
    {errorMessage}
  </div>
  )
}

export default Notification