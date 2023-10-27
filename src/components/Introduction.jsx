import ReactMarkdown from "react-markdown";
import { Button, Header, Icon, Image, List, Segment } from "semantic-ui-react";

function Introduction() {
  return (
    <>
      <Header as="h1" textAlign="center">
        <Image circular src="/avatar.jpg" /> Hello! I'm Girish Gopaul.
      </Header>
      <Segment.Group raised stacked>
        <Segment size="large">
          <List>
            <List.Item icon="mail" content={
              <a href="mailto:girish@gopaul.me" rel="noreferrer">
                girish@gopaul.me
              </a>
            } />
            <List.Item icon="phone" content={
              <a href="tel:+23059010577" rel="noreferrer">
                +230 59010577
              </a>
            } />
            <List.Item icon="location arrow" content={
              <a target="_blank" href="https://maps.app.goo.gl/hYnwZv9UFSj5QZGo7" rel="noreferrer">
                Mahébourg, Mauritius
              </a>
            } />
            <List.Item
              icon="blogger b"
              content={
                <a target="_blank" href="https://blog.gopaul.me" rel="noreferrer">
                  https://blog.gopaul.me
                </a>
              }
            />
            <List.Item
              icon="linkedin"
              content={
                <a target="_blank" href="https://linkedin.com/in/girish-gopaul" rel="noreferrer">
                  https://linkedin.com/in/girish-gopaul
                </a>
              }
            />
            <List.Item
              icon="github"
              content={
                <a target="_blank" href="https://github.com/giriss" rel="noreferrer">
                  https://github.com/giriss
                </a>
              }
            />
          </List>
          <Button animated="vertical" as="a" href="/Girish_Gopaul-Senior_Developer.pdf" download="Girish_Gopaul_CV.pdf">
            <Button.Content visible>Download CV</Button.Content>
            <Button.Content hidden>
              <Icon name="download" />
            </Button.Content>
          </Button>
        </Segment>
        <Segment size="large">
          <ReactMarkdown>
            Introduced to computer programming at the age of 14 by my father, I instantly fell in
            love with software development. I grew into becoming an extremely passionate and
            versatile developer with code quality as a core value. I am always excited to learn new
            frameworks and programming languages. Challenging tasks gets me pumped all the
            time. I have now been working professionally for 5+ years and my two favorite go-to
            framework are **Ruby on Rails** and **React**.
          </ReactMarkdown>
        </Segment>
      </Segment.Group>
    </>
  );
}

export default Introduction;
