
function Feedback({ message }) {
  return (
    <>
      {message && <p className="game__feedback">{message}</p>}
    </>
  );
}

export default Feedback;
