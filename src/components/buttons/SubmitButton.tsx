export const SubmitButton = ({ buttonLabel, onSubmit }) => (
  <>
    <div>
      <button className="submit-btn" onClick={onSubmit}>
        {buttonLabel}
      </button>
    </div>
  </>
);
