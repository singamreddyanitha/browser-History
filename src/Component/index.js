import './index.css'

const EachList = props => {
  const {details, deleteText} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteText(id)
  }

  return (
    <li className="history-item">
      <div className="history-time-site-details">
        <p className="time">{timeAccessed}</p>
        <div className="site-details">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachList
