import {
    Container,
    Segment,
    Button,
    Grid,
    Header,
    Image,
    Statistic,
    Divider,
    List,
    Icon,
    Card
} from "semantic-ui-react"


const Homepage = () => {
    const contacts = [
    {
        name: "Firstname Lastname",
        role: "role1",
        phone: "297-444-487",
    },
    {
        name: "Firstname Lastname",
        role: "role2",
        phone: "297-444-296",
    },
    ]


    return (
        <>

            {/* Masthead Content */}
            <Segment
                inverted
                vertical
                textAlign="center"
                style={{
                    minHeight: 800,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingTop: "10em", // space for fixed menu
                    backgroundImage: "url(/pictures/cropped-tempforrest.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "1000px",
                }}
            >
                <Container text>
                    <div>
                        
                    </div>
                    <Header as="h1" inverted>
                        Mockup Website
                    </Header>
                    <Header as="h2" inverted>
                        Do whatever you want when you want to.
                    </Header>
                </Container>
            </Segment>

            {/* Vertical Stripe Segment */}
            <Segment vertical style={{ padding: "8em 0em" }}>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">What the hell is mockup?</Header>
                            <p>
                                This is a mockup website that I plan to develop a bit further with more content that makes sense</p>
                                Not just empty words and aaannddd wooooorrrdds.
                            <p>Even bananas can be bioengineered.</p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <Image
                                bordered
                                rounded
                                size="large"
                                src="assets/images/wireframe/white-image.png"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button size="huge">Check Them Out</Button>
                    </Grid.Row>
                </Grid>
                <Divider style={{ padding: "10px 0" }}/>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">Mockup – Together more</Header>
                            <p>
                                Mockup website was founded in 1992 and has a lot of things...
                                </p>
                            <p>
                                More text
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <Segment textAlign="center">
                                <Statistic>
                                <Statistic.Value>945</Statistic.Value>
                                <Statistic.Label>Hectares</Statistic.Label>
                                </Statistic>
                                <Divider />
                                <Statistic>
                                <Statistic.Value>39</Statistic.Value>
                                <Statistic.Label>Partners</Statistic.Label>
                                </Statistic>
                                <Divider />
                                <Statistic>
                                <Statistic.Value>1992</Statistic.Value>
                                <Statistic.Label>Founded</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider style={{ padding: "20px 0" }}/>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">How to join mockup</Header>
                            <p>Joining mockup website is easy</p>
                                
                            <List as="ol">
                                <List.Item as="li">Contact someone I guess</List.Item>
                                <List.Item as="li">This is a step 2</List.Item>
                                <List.Item as="li">Hmmm... what else...</List.Item>
                                <List.Item as="li">Hihihih</List.Item>
                                <List.Item as="li">Final step! (finally)</List.Item>
                            </List>
                            <Header as="h3">Achtung!</Header>
                            <p>If something were to happen then I migt lose it.</p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                                <Segment padded="very" vertical>
                                <Header as="h2" icon textAlign="center">
                                    <Icon name="address book" circular />
                                    <Header.Content>Contact</Header.Content>
                                </Header>

                                <Card.Group itemsPerRow={1} stackable>
                                    {contacts.map((contact, index) => (
                                    <Card key={index} fluid>
                                        <Card.Content>
                                        <Card.Header>{contact.name}</Card.Header>
                                        <Card.Meta>{contact.role}</Card.Meta>
                                        <Card.Description>
                                            <p><Icon name="phone" /> {contact.phone}</p>
                                        </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    ))}
                                </Card.Group>
                                </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Quote Segment */}
            <Segment vertical>
                <Grid celled="internally" columns="equal" stackable>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <Header as="h3">"What a Company"</Header>
                            <p>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h3">
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p>
                                <Image avatar src="assets/images/avatar/nan.jpg" /> <b>Nan</b>{" "}
                                Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* Footer */}
        </>
    )
}

export default Homepage