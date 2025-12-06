import './AppCard.css'

const BASE_URL = import.meta.env.BASE_URL

function AppCard({ name, description, thumbnail, url }) {
  const thumbnailSrc = thumbnail ? `${BASE_URL}${thumbnail}` : null

  return (
    <a href={url} className="app-card" target="_blank" rel="noopener noreferrer">
      <div className="app-card-thumbnail">
        {thumbnailSrc ? (
          <img src={thumbnailSrc} alt={`${name} thumbnail`} />
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
