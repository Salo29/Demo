/* eslint-disable no-shadow */
import React, { useState, useMemo } from 'react';
import { Button } from '@mui/material';

function RandomWords() {
  const [count, setCount] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ['My', 'Name', 'is', 'Saloni', 'working', 'in', 'Successive', 'Technologies'];
  const randomWord = words[wordIndex];

  const computeLetterCount = (randomWord) => {
    const i = 0;
    if (i < 200000) { console.log(i); }
    return randomWord.length;
  };

  const letterCount = useMemo(() => computeLetterCount(randomWord), [randomWord]);

  return (
    <div>
      <div style={{ padding: '15px' }}>
        <h2>Number of letters in word</h2>
        <p>
          {randomWord}
          {' '}
          has
          {' '}
          {letterCount}
          {' '}
          letters
        </p>
        <Button
          onClick={() => {
            const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
            setWordIndex(next);
          }}
        >
          Next word
        </Button>

        <h2>Increment a number</h2>
        <p>
          Counter:
          {' '}
          {count}
        </p>
        <Button onClick={() => setCount(count * 100)}>Increment</Button>
      </div>
    </div>
  );
}

export default RandomWords;
