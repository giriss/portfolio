import { Button, Card, Header, Icon } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";

function PortfolioCard({ image, header, description, link, action, actionIcon }) {
  return (
    <Card
      raised
      image={image}
      header={header}
      description={<ReactMarkdown>{description}</ReactMarkdown>}
      extra={
        <Button
          basic
          secondary
          as="a"
          target="_blank"
          href={link}
        >
          <Icon name={actionIcon} /> {action}
        </Button>
      }
    />
  );
}

function Portfolio() {
  return (
    <>
      <Header as="h2">Stuffs I do for fun...</Header>
      <Card.Group doubling itemsPerRow={3} stackable>
        <PortfolioCard
          image="/hideincloud.jpg"
          header="Hide in Cloud"
          description="Need to hide files on your phone and keep them securely backed up on the cloud? Hide in Cloud is all you need!"
          link="https://m.apkpure.com/hide-in-cloud-hide-photo-video-music-doc-etc/me.gopaul.safe_in_cloud"
          action="View on Play Store"
          actionIcon="google play"
        />
        <PortfolioCard
          image="/codetoimage.jpg"
          header="Wanna share code?"
          description="Have a code snippet you need to share? This app allows you to share code in style!"
          link="https://github.com/giriss/code-image"
          action="View on Github"
          actionIcon="github"
        />
        <PortfolioCard
          image="/todo.png"
          header="todo-react"
          description="I did the same todo app in **React, Angular, Vue** and **Svelte** just for fun. Try it out! ✌️"
          link="https://todo-react-silk-chi.vercel.app/"
          action="View app"
          actionIcon="globe"
        />
        <PortfolioCard
          image="/todo.png"
          header="todo-angular"
          description="I did the same todo app in **React, Angular, Vue** and **Svelte** just for fun. Try it out! ✌️"
          link="https://todo-angular.vercel.app/"
          action="View app"
          actionIcon="globe"
        />
        <PortfolioCard
          image="/todo.png"
          header="todo-vue"
          description="I did the same todo app in **React, Angular, Vue** and **Svelte** just for fun. Try it out! ✌️"
          link="https://todo-vue-iota-three.vercel.app/"
          action="View app"
          actionIcon="globe"
        />
        <PortfolioCard
          image="/todo.png"
          header="todo-svelte"
          description="I did the same todo app in **React, Angular, Vue** and **Svelte** just for fun. Try it out! ✌️"
          link="https://todo-svelte.vercel.app/"
          action="View app"
          actionIcon="globe"
        />
      </Card.Group>
    </>
  );
}

export default Portfolio;
