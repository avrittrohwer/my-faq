import React, { useEffect, useState, useReducer, useContext, createContext } from "react";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import * as api from "./Api";
import "./App.css";

const actions = {
  GET: id => ({ type: "GET", id }),
  UPDATE: (id, details) => ({ type: "UPDATE", id, details }),
  CREATE: details => ({ type: "CREATE", details }),
  DELETE: id => ({ type: "DELETE", id }),
};

const initState = {};
function reducer(state, { type, id, details }) {
  switch (type) {
    case "GET":
      // get Q from localStorage
      return { ...state, [id]: api.getQ(id) };
    case "UPDATE":
      // update an existing Q
      api.updateQ(id, details);
      return { ...state, [id]: details };
    case "CREATE":
      // create a new Q
      const newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

      api.updateQ(newId, details);
      api.addId(newId);
      return { ...state, [newId]: details };
    case "DELETE":
      // delete a Q
      api.deleteQ(id);
      return { ...state, [id]: undefined };
    default:
      return initState;
  }
}

const DispatchCtx = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  // populate local storage at mount time
  useEffect(() => {
    api.getQIds().forEach(id => {
      dispatch(actions.GET(id));
    });
  }, []);

  return (
    <div className="app-body">
      <AppBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="questions">
              {Object.entries(state).map(([id, details]) => (
                <QPreview key={id} details={{ id, ...details }} />
              ))}
            </div>
          )}
        />
        <Route
          path="/q/:id"
          render={props => {
            let { id } = props.match.params;
            if (!Number.isInteger((id = parseInt(id))) || state[id] === undefined) {
              return <Redirect to="/" />;
            }

            return (
              <DispatchCtx.Provider value={dispatch}>
                <QView details={{ id, ...state[id] }} />
              </DispatchCtx.Provider>
            );
          }}
        />
        <Route
          path="/new"
          render={() => {
            const RedirectableQCreate = withRouter(QCreate);
            return (
              <DispatchCtx.Provider value={dispatch}>
                <RedirectableQCreate />
              </DispatchCtx.Provider>
            );
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
      <Link to="/new">
        <button className="add-button">+</button>
      </Link>
    </header>
  );
}

function QPreview({ details }) {
  return (
    <div className="q-preview">
      <Link to={`/q/${details.id}`}>
        <h3>{details.question}</h3>
      </Link>
      <span>{details.answer}</span>
    </div>
  );
}

function QView({ details, history }) {
  const dispatch = useContext(DispatchCtx);
  const [question, setQuestion] = useState(details.question || "");
  const [answer, setAnswer] = useState(details.answer || "");
  const isNew = !details.id;
  const someChanges = details.question !== question || details.answer !== answer;

  return (
    <div className="q-view">
      <textarea
        className="q-question"
        placeholder="question..."
        value={question}
        onChange={e => {
          setQuestion(e.target.value);
        }}
      />
      <textarea
        className="q-answer"
        placeholder="answer..."
        value={answer}
        onChange={e => {
          setAnswer(e.target.value);
        }}
      />
      {someChanges ? (
        <button
          className="q-save"
          onClick={() => {
            if (isNew) {
              dispatch(actions.CREATE({ question, answer }));
              history.push("/");
            } else {
              dispatch(actions.UPDATE(details.id, { question, answer }));
            }
          }}
        >
          {isNew ? "Add" : "Save"}
        </button>
      ) : (
        undefined
      )}
    </div>
  );
}

function QCreate(props) {
  return <QView details={{}} {...props} />;
}

export default App;
