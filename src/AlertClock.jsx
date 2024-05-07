import { Button } from "./Button";

export function AlertClock() {
  function handleShowTime() {
    const now = new Date();
    alert(now.toLocaleTimeString());
  }
  return (
    <div>
      <p>Click for watch the current time!</p>
      <Button onClick={handleShowTime} />
    </div>
  );
}
