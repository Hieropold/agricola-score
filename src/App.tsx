import React, { useState } from "react";
import {
  Box,
  Fieldset,
  Input,
  ThemeProvider,
} from "reactro-ui-lib";
import "./App.css";
import { Score, calcScore } from "./score-calc";
import styled from "styled-components";

const initialScore: Score = {
  fields: 0,
  pastures: 0,
  grain: 0,
  vegetables: 0,
  sheep: 0,
  pigs: 0,
  cows: 0,
  freeSpots: 0,
  sheds: 0,
  clayRooms: 0,
  stoneRooms: 0,
  workers: 0,
  improvements: 0,
  bonus: 0,
};

type ScoreStateSetter = (prev: Score) => Score;
const getScoreUpdater = (ev: any, prop: string): ScoreStateSetter => {
  return (prev: Score) => {
    return {
      ...prev,
      [prop]: ev.target.value ? parseInt(ev.target.value, 10) : 0,
    };
  };
};

const App = () => {
  const [scoreA, setScoreA] = useState(initialScore);
  const [scoreB, setScoreB] = useState(initialScore);
  const [scoreC, setScoreC] = useState(initialScore);

  return (
    <ThemeProvider theme="lavender">
      <h1>Агрикола</h1>

      <Fieldset legend="✨ Очки">
        <InputsGrid>
          <Box variant="base" width="90%">
            {calcScore(scoreA)}
          </Box>
          <Box variant="base" width="90%">
            {calcScore(scoreB)}
          </Box>
          <Box variant="base" width="90%">
            {calcScore(scoreC)}
          </Box>
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🌾 Зерно">
        <InputsGrid>
          <SmallInput
            placeholder="Зерно"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "grain"));
            }}
          />
          <SmallInput
            placeholder="Зерно"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "grain"));
            }}
          />
          <SmallInput
            placeholder="Зерно"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "grain"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🥕 Овощи">
        <InputsGrid>
          <SmallInput
            placeholder="Овощи"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "vegetables"));
            }}
          />
          <SmallInput
            placeholder="Овощи"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "vegetables"));
            }}
          />
          <SmallInput
            placeholder="Овощи"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "vegetables"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🟫 Поля">
        <InputsGrid>
          <SmallInput
            placeholder="Поля"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "fields"));
            }}
          />
          <SmallInput
            placeholder="Поля"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "fields"));
            }}
          />
          <SmallInput
            placeholder="Поля"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "fields"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="♯ Выпасы">
        <InputsGrid>
          <SmallInput
            placeholder="Выпасы"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "pastures"));
            }}
          />
          <SmallInput
            placeholder="Выпасы"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "pastures"));
            }}
          />
          <SmallInput
            placeholder="Выпасы"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "pastures"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🐑 Овцы">
        <InputsGrid>
          <SmallInput
            placeholder="Овцы"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "sheep"));
            }}
          />
          <SmallInput
            placeholder="Овцы"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "sheep"));
            }}
          />
          <SmallInput
            placeholder="Овцы"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "sheep"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🐷 Свиньи">
        <InputsGrid>
          <SmallInput
            placeholder="Свиньи"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "pigs"));
            }}
          />
          <SmallInput
            placeholder="Свиньи"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "pigs"));
            }}
          />
          <SmallInput
            placeholder="Свиньи"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "pigs"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🐮 Коровы">
        <InputsGrid>
          <SmallInput
            placeholder="Коровы"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "cows"));
            }}
          />
          <SmallInput
            placeholder="Коровы"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "cows"));
            }}
          />
          <SmallInput
            placeholder="Коровы"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "cows"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🟩 Свободные ячейки">
        <InputsGrid>
          <SmallInput
            placeholder="Свободные ячейки"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "freeSpots"));
            }}
          />
          <SmallInput
            placeholder="Свободные ячейки"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "freeSpots"));
            }}
          />
          <SmallInput
            placeholder="Свободные ячейки"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "freeSpots"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🛖 Хлева">
        <InputsGrid>
          <SmallInput
            placeholder="Хлева"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "sheds"));
            }}
          />
          <SmallInput
            placeholder="Хлева"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "sheds"));
            }}
          />
          <SmallInput
            placeholder="Хлева"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "sheds"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🏠 Комнаты в мазанке">
        <InputsGrid>
          <SmallInput
            placeholder="Комнаты в мазанке"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "clayRooms"));
            }}
          />
          <SmallInput
            placeholder="Комнаты в мазанке"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "clayRooms"));
            }}
          />
          <SmallInput
            placeholder="Комнаты в мазанке"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "clayRooms"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🏰 Комнаты в доме">
        <InputsGrid>
          <SmallInput
            placeholder="Комнаты в доме"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "stoneRooms"));
            }}
          />
          <SmallInput
            placeholder="Комнаты в доме"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "stoneRooms"));
            }}
          />
          <SmallInput
            placeholder="Комнаты в доме"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "stoneRooms"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🧑‍🌾 Родичи">
        <InputsGrid>
          <SmallInput
            placeholder="Родичи"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "workers"));
            }}
          />
          <SmallInput
            placeholder="Родичи"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "workers"));
            }}
          />
          <SmallInput
            placeholder="Родичи"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "workers"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="⬆️ Улучшения">
        <InputsGrid>
          <SmallInput
            placeholder="Улучшения"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "improvements"));
            }}
          />
          <SmallInput
            placeholder="Улучшения"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "improvements"));
            }}
          />
          <SmallInput
            placeholder="Улучшения"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "improvements"));
            }}
          />
        </InputsGrid>
      </Fieldset>

      <Fieldset legend="🪙 Бонусы">
        <InputsGrid>
          <SmallInput
            placeholder="Бонусы"
            type="tel"
            onChange={(ev) => {
              setScoreA(getScoreUpdater(ev, "bonus"));
            }}
          />
          <SmallInput
            placeholder="Бонусы"
            type="tel"
            onChange={(ev) => {
              setScoreB(getScoreUpdater(ev, "bonus"));
            }}
          />
          <SmallInput
            placeholder="Бонусы"
            type="tel"
            onChange={(ev) => {
              setScoreC(getScoreUpdater(ev, "bonus"));
            }}
          />
        </InputsGrid>
      </Fieldset>
    </ThemeProvider>
  );
};

const SmallInput = styled(Input)`
  width: 80%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(10, auto); /* 10 rows */
  gap: 10px; /* Space between grid items */
`;

const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export default App;
