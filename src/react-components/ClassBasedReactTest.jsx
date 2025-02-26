// src/react-components/ClassBasedReactTest.jsx
import React from "react"

export default class ClassBasedReactTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      theme: "light"
    }
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    }))
  }

  render() {
    const { theme, count } = this.state

    const styles = {
      container: {
        border: "2px solid blue",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#e6f7ff" : "#1a365d",
        color: theme === "light" ? "#333" : "#fff",
        maxWidth: "500px",
        margin: "20px 0"
      },
      button: {
        padding: "8px 16px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "4px",
        margin: "0 8px 8px 0",
        cursor: "pointer"
      }
    }

    return (
      <div style={styles.container}>
        <h3>Class-based React Component</h3>
        <p>Count: {count}</p>
        <p>Theme: {theme}</p>

        <div>
          <button onClick={this.increment} style={styles.button}>
            Increment
          </button>

          <button onClick={this.toggleTheme} style={styles.button}>
            Toggle Theme
          </button>
        </div>

        {count > 5 && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            You've clicked more than 5 times!
          </p>
        )}
      </div>
    )
  }
}
