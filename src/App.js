import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.css";

function getQ(id) {
  return JSON.parse(localStorage.getItem(id));
}

function App() {
  const [ids, setIds] = useState(JSON.parse(localStorage.getItem("ids")) || []);

  return (
    <div className="app-body">
      <AppBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="questions">
              {ids.map(id => (
                <QPreview key={Math.random()} id={id} {...getQ(id)} />
              ))}
            </div>
          )}
        />
        <Route
          path="/q/:id"
          render={props => {
            let { id } = props.match.params;
            if (!Number.isInteger((id = parseInt(id)))) {
              return <Redirect to="/" />;
            }

            return <QView id={id} {...getQ(id)} />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

function AppBar() {
  return (
    <header>
      <Link to="/">
        <h2 className="app-title">My FAQ</h2>
      </Link>
      <button className="add-button">+</button>
    </header>
  );
}

function QPreview({ id, question, answer, ...props }) {
  return (
    <div className="q-preview" {...props}>
      <Link to={`/q/${id}`}>
        <h3>{question}</h3>
      </Link>
      <span>{answer}</span>
    </div>
  );
}

function QView({ id, ...props }) {
  const [question, setQuestion] = useState(props.question);
  const [answer, setAnswer] = useState(props.question);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify({ question, answer }));
  }, [question, answer]);

  return (
    <div className="q-view">
      <input
        className="q-question"
        type="text"
        value={question}
        onChange={e => {
          setQuestion(e.target.value);
        }}
      />
      <textarea
        className="q-answer"
        value={answer}
        onChange={e => {
          setAnswer(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
