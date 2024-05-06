export function Age({ age }) {
  return (
    <div>
      {age > 18 && age < 65 ? (
        <p>your age is: {age}</p>
      ) : (
        <p>you are too young or too old</p>
      )}
    </div>
  );
}
