import { sample } from 'lodash';
import { useState } from 'react';
import Typist from 'react-typist';

const Words = [
  'Tuan',
  'Tony',
  'Excited to work with you!',
];

const CommandLineBox = () => {
  const [content, setContent] = useState('');
  const [previousContent, setPreviousContent] = useState('');

  const shuffleContent = () => {
    setPreviousContent(content);
    let newContent = sample(Words);
    while (newContent === previousContent) {
      newContent = sample(Words);
    }
    setContent(newContent);
  };

  const InfiniteTyping = () => (
    <Typist
      cursor={{ element: '_' }}
      avgTypingDelay={40}
      stdTypingDelay={10}
      onTypingDone={() => {
        shuffleContent();
      }}
    >
      {content}
      <Typist.Backspace count={content.length} delay={600} />
      <Typist.Delay ms={200} />
    </Typist>
  );

  return (
      <InfiniteTyping />
  );
};

export default CommandLineBox;

