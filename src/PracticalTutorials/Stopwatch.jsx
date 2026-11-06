import React, { useState, useEffect, useRef } from "react";

// Question: Create stopwatch using start, stop, reset, pause / resume buttons

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("ideal");
  const counter = useRef(0);

  useEffect(() => {
    let myIntervalId = null;
    if (status === "start") {
      myIntervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 0);
    }
    return () => {
      if (myIntervalId) clearInterval(myIntervalId);
    };
  }, [status]);

  const formateTime = (newSeconds) => {
    const hours = String(Math.floor(newSeconds / 3600)).padStart(2, 0);
    const minutes = String(Math.floor((newSeconds % 3600) / 60)).padStart(2, 0);
    const seconds = String(newSeconds % 60).padStart(2, 0);
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleReset = () => {
    setStatus("ideal");
    setTime(0);
  };
  const handleTogglePauseResume = () => {
    counter.current += 1;
    if (counter.current <= 2) {
      status === "paused" ? setStatus("start") : setStatus("paused");
    } else {
      alert("You reached the limit!!!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>React Stopwatch</h2>

        <div style={styles.timerDisplay}>{formateTime(time)}</div>

        <div style={styles.statusText}>Status: {status.toUpperCase()}</div>

        <div style={styles.buttonGroup}>
          <button
            style={styles.button}
            onClick={() => setStatus("start")}
            disabled={status === "start"}
          >
            Start
          </button>

          <button
            style={styles.button}
            onClick={handleTogglePauseResume}
            disabled={status === "idle"}
          >
            {status === "paused" ? "Resume" : "Pause"}
          </button>

          <button
            style={styles.button}
            onClick={() => setStatus("ideal")}
            disabled={status === "ideal"}
          >
            Stop
          </button>

          <button
            style={styles.button}
            onClick={handleReset}
            disabled={time === 0 && status === "idle"}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f1f5f9",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    minWidth: "340px",
  },
  title: {
    margin: "0 0 15px 0",
    color: "#1e293b",
  },
  timerDisplay: {
    fontSize: "44px",
    fontWeight: "bold",
    fontFamily: "Courier New, monospace",
    color: "#0f172a",
    letterSpacing: "2px",
    margin: "10px 0",
  },
  statusText: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  button: {
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#334155",
    cursor: "pointer",
    transition: "all 0.2s",
  },
};

export default Stopwatch;
