import React from "react";
import Button from "./Button";
import nums from "../nums";
function App() {
  return (
    <div>
      <h1>Buttons</h1>

      <Button backgroundColor="green" num={nums[0].num} />
      <Button backgroundColor="skyblue" num={nums[1].num} />
      <Button backgroundColor="pink" num={nums[2].num} />
      <Button backgroundColor="violet" num={nums[3].num} />
      <Button backgroundColor="grey" num={nums[4].num} />
      <Button backgroundColor="purple" num={nums[5].num} />
      <Button backgroundColor="seagreen" num={nums[6].num} />
      <Button backgroundColor="blue" num={nums[7].num} />
      <Button backgroundColor="yellow" num={nums[8].num} />
      <Button backgroundColor="orange" num={nums[9].num} />
    </div>
  );
}
export default App;
