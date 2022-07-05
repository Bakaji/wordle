import { Attempt } from "../store/slices/wordSlice";

type AttemptRowArgs = {
  attempt: Attempt;
};
const AttemptsRow = ({ attempt }: AttemptRowArgs) => {
  const getClassName = (correction: number): string => {
    switch (correction) {
      case 0:
        return "wrong-cell";
      case 1:
        return "missed-cell";
      case 2:
        return "correct-cell";
      default:
        return "";
    }
  };
  return (
    <div className="attempt-row">
      <label className="attempt-label">
        {attempt.attempt.split("").map((_, index: number) => {
          return (
            <span
              key={index}
              className={`attempt-cell ${getClassName(attempt.correction[index])}`}
            >
              {attempt.attempt.charAt(index)}
            </span>
          );
        })}
      </label>
    </div>
  );
};

export default AttemptsRow;
