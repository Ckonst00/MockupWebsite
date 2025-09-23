import { useParams } from "react-router-dom"
import { Container, Segment, Header, Image } from "semantic-ui-react"

const infoDetailPage = ({ infos }) => {

    const { id } = useParams()
    if (!infos || infos.length === 0) return <div className="ui segment">
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
        <p></p>
        </div>
    const info = infos.find(i => i.id === id)
    const date = new Date(info.createdAt)
    const formattedDate = date.toLocaleDateString()
    if (!info) return <p>Not found</p>

    return (
      <Container text style={{ marginTop: "6em" }}>
        <Segment>
          <Header as="h1" textAlign="center">{info.title}</Header>
          <Segment as="p">Published {formattedDate} {info.user.name}</Segment>
          <p style={{ whiteSpace: "pre-line" }}>{info.content}</p>
        </Segment>
      </Container>
    )
  
}








export default infoDetailPage