import logo from './logo.svg';
import './App.css';
import Editor from "rich-markdown-editor";
import React from 'react'


class YoutubeEmbed extends React.Component {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];
    alert(JSON.stringify(attrs));
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
      />
    );
  }
}
function App() {
  return (
    <Editor
    defaultValue="Hello world!"
    embeds={[
        {
          title: "YouTube",
          keywords: "youtube video tube google",
          icon: () => (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
              width={24}
              height={24}
            />
          ),
          matcher: href => {
            return href.match(
              /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
            );
          },
          component: YoutubeEmbed
        }
      ]}
  />
  );
}

export default App;
