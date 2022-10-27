import React, { useState } from "react";
import { observer } from "mobx-react";
import Athlete from "./Athlete";

type Props = {
  athlete: Athlete;
};

function TradeForm({ athlete }: Props) {
  const [teamName, setTeamName] = useState<string>(" ");
  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        onChange={(e) => setTeamName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            athlete.tradePlayer(teamName);
          }
        }}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
}

export default observer(TradeForm);
