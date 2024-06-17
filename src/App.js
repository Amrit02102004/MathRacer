import React, { useState, useEffect } from 'react';

const MathRacer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Generate 15 random math questions
    const generateQuestions = () => {
      const ops = ['+', '-', '*'];
      let qs = [];
      for (let i = 0; i < 15; i++) {
        let a = Math.floor(Math.random() * 20);
        let b = Math.floor(Math.random() * 20);
        let op = ops[Math.floor(Math.random() * ops.length)];
        qs.push({ question: `${a} ${op} ${b}`, answer: eval(`${a}${op}${b}`) });
      }
      setQuestions(qs);
    };

    generateQuestions();
  }, []);

  useEffect(() => {
    let interval;
    if (isStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted]);

  const handleStart = () => {
    setIsStarted(true);
    setTimer(0);
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswer('');
  };

  const handleSubmit = () => {
    if (parseInt(userAnswer) === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setUserAnswer('');
    if (currentQuestion < 14) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsStarted(false);
      // Send data to backend
      submitResults();
    }
  };

  const submitResults = async () => {
    const response = await fetch('/api/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: score,
        time: timer,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Math Racer</h1>
      {isStarted ? (
        <div>
          <div>Time: {timer}s</div>
          <div>
            <p>{questions[currentQuestion].question}</p>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </div>
  );
};

export default MathRacer;
