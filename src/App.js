import "./App.css";
import React, { Component } from "react";
import BookList from "./components/BookList";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <BookList
          tl="Người qua đường"
          description="Một cuốn sách kể về,..."
          price="0.99$"
          image="https://picsum.photos/200"
        />
      </div>
    );
  }
}

export default App;
