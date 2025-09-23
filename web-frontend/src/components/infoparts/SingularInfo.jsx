import { Link, useParams } from "react-router-dom"


const SingularInfo = ({ infos, user, handleDelete }) => {
  const { id } = useParams()
  const newsStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  if (id) {
    // Detail view
    const info = infos.find(i => i.id === id)
    const date = new Date(info.createdAt)
    const formattedDate = date.toLocaleDateString()
    if (!info) return <p>Not found</p>
    return (
      <div>
        <h2>{info.title}</h2>
        <p>{info.content}</p>
        <p>Created by: {info.user.name}</p>
        <p>Published: {formattedDate}</p>
      </div>
    )
  }

  // List view
  return (
    <div style={newsStyle}>
      {infos.map(info => (
        <div key={info.id}>
          <h2>
            <Link to={`/articles/${info.id}`}> 
              {info.title}
            </Link>
            {user && (
              <button onClick={() => handleDelete(info.id, info.title, info.content)}>
                delete
              </button>
            )}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default SingularInfo