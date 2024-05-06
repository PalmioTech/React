import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <HelloWorld />
      <Message />
      <Welcome name={"John"} />

      <HelloWorld />
    </div>
  );
}
