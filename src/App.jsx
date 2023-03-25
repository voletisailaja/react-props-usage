import React from "react";
import Button from "./Button";
import nums from "./nums";

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button num={nums[0].num} />
      <Button num={nums[1].num} />
      <Button num={nums[2].num} />
      <Button num={nums[3].num} />
      <Button num={nums[4].num} />
      <Button num={nums[5].num} />
      <Button num={nums[6].num} />
      <Button num={nums[7].num} />
      <Button num={nums[8].num} />
      <Button num={nums[9].num} />
    </div>
  );
}
export default App;
