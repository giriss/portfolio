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
      <Card.Group doubling itemsPerRow={4} stackable>
        <PortfolioCard
          image="/hideincloud.jpg"
          header="Hide in Cloud"
          description="Need to hide files on your phone and keep them securely backed up on the cloud? Hide in Cloud is all you need! Made with **flutter**."
          link="https://play.google.com/store/apps/details?id=me.gopaul.safe_in_cloud"
          action="View on Play Store"
          actionIcon="google play"
        />
        <PortfolioCard
          image="/codetoimage.jpg"
          header="Wanna share code?"
          description="Have a code snippet you need to share? This app allows you to share code in style! Built in **python**'s **flask**."
          link="https://github.com/giriss/code-image"
          action="View on Github"
          actionIcon="github"
        />
        <PortfolioCard
          image="/employees.png"
          header="Employee database"
          description="I made this one over a weekend using **React** in the front-end and **Elixir** in the back-end. CRUD app with authentication. Simply register quickly to try out the app."
          link="https://employees-front.vercel.app/"
          action="View app"
          actionIcon="globe"
        />
        <PortfolioCard
          image="/image_search.jpg"
          header="Image Search Mobile"
          description="Made a simple yet beautiful Image Search app in **Flutter** over the weekend!"
          link="https://www.youtube.com/shorts/Yl7W7kN4jaM?feature=share"
          action="View short video"
          actionIcon="youtube"
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
