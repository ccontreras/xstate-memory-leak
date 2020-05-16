import { Machine, spawn, assign } from "xstate";
import { useMachine } from "@xstate/react";

const actorMachine = Machine({
  id: "actor",
  initial: "idle",
  states: {
    idle: {},
  },
});

const toggleMachine = Machine({
  id: "toggle",
  initial: "setup",
  states: {
    setup: {
      on: {
        "": {
          target: "inactive",
          actions: assign({ actor: () => spawn(actorMachine) }),
        },
      },
    },
    inactive: {
      on: {
        TOGGLE: "active",
      },
    },
    active: {
      on: {
        TOGGLE: "inactive",
      },
    },
  },
});

export default function Home() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <div className="container">
      <button onClick={() => send("TOGGLE")}>toggle</button>
      {state.value}
    </div>
  );
}
