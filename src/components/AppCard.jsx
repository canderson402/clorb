import './AppCard.css'

function AppCard({ name, description, thumbnail, url }) {
  return (
    <a href={url} className="app-card" target="_blank" rel="noopener noreferrer">
      <div className="app-card-thumbnail">
        {thumbnail ? (
          <img src={thumbnail} alt={`${name} thumbnail`} />
        ) : (
          <div className="app-card-placeholder">
            <span>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="app-card-content">
        <h3 className="app-card-name">{name}</h3>
        <p className="app-card-description">{description}</p>
      </div>
    </a>
  )
}

export default AppCard
