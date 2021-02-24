import React, { useState } from "react";

export function NameForm(props) {
  const [dndValue, setDndValue] = useState({
    name: "",
    player: "",
    role: "",
    race: "",
  });

  const {setData,data}=props
  const inputValue = (evt) => {
    //  setDndValue(evt.target.value)
    console.log(evt.target.value);
    console.log(evt.target.name);

    setDndValue({ ...dndValue, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newPlayer = {
        name: dndValue.name,
        player:dndValue.player,
        role:dndValue.role,
        race:dndValue.race
    }
    setData([...data, newPlayer]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={dndValue.name}
          onChange={inputValue}
        />
      </label>
      <label>
        Player:
        <input
          type="text"
          name="player"
          value={dndValue.player}
          onChange={inputValue}
        />
      </label>

      <label>
        Role:
        <input
          type="text"
          name="role"
          value={dndValue.role}
          onChange={inputValue}
        />
      </label>

      <label>
        Race:
        <input
          type="text"
          name="race"
          value={dndValue.race}
          onChange={inputValue}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
