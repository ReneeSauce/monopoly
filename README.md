# Monopoly


## Elements in the game and state and file structure:

### Players:

Players have a state they either
active and able to move
active and not able to progress ie jail
or inactive

```
PlayerState = {
  id: string,
  name: string
  active: boolean,
  inJail: boolean,
  balance: non negative integer (up to the second decimal position),
  ownedPropertys: <propertyId's>[]
  position: propertyId
  consecutiveDoubleCount: int 0-2
  ownedCards: <string/cardType>[]
}
```

### Game:


```
GameState = {
  players: <list of player id's in order of turn>[]
  properties: <ordered list of all squares>[Go<>, ...]
  turnCount: number
  chestCards: CardState
  communityCards: CardState
}

CardState = {
  <nameOfCard>: {
    description: string
    count: number (how many of these cards are left)
  },
  ...
}

```


