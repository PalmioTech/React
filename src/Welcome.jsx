import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      {name === "John" ? <Age age={28} /> : <p>You are not John</p>}
    </div>
  );
}
