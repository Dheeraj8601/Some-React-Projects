import { useState } from 'react';
import Button from './button';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const handleClearClick = () => {
    setDisplay('');
  };

  const handleEqualClick = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="cal-box">
      <input
        type="text"
        id="display"
        placeholder="0"
        value={display}
        readOnly
      />
      <br />
      <Button value="7" onClick={handleButtonClick} />
      <Button value="8" onClick={handleButtonClick} />
      <Button value="9" onClick={handleButtonClick} />
      <Button value="+" onClick={handleButtonClick} className="mathbutton" />
      <br />
      <Button value="4" onClick={handleButtonClick} />
      <Button value="5" onClick={handleButtonClick} />
      <Button value="6" onClick={handleButtonClick} />
      <Button value="-" onClick={handleButtonClick} className="mathbutton" />
      <br />
      <Button value="1" onClick={handleButtonClick} />
      <Button value="2" onClick={handleButtonClick} />
      <Button value="3" onClick={handleButtonClick} />
      <Button value="*" onClick={handleButtonClick} className="mathbutton" />
      <br />
      <Button value="C" onClick={handleClearClick} className="clearButton" />
      <Button value="0" onClick={handleButtonClick} />
      <Button value="=" onClick={handleEqualClick} className="mathbutton" />
      <Button value="/" onClick={handleButtonClick} className="mathbutton" />
    </div>
  );
}

export default Calculator;
