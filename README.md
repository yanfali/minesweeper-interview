# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## What

Thinking through a minesweeper implementation - this was a live coding exercise for an interview for an autonomus driving company - honestly a bit too complex for live coding imo but everyone think's they are goog now... I never really played minesweeper as a kid as I didn't have access to windows until well into my 20s.

## The rules

https://info.lite.games/en/support/solutions/articles/60000688724-minesweeper-world-rules

```
How to Play
Tap on any unrevealed square to start the game. The timer starts once the first square has been revealed.

Numbers on the squares indicate the number of surrounding mines (this includes all 8 squares surrounding it in a 3×3 grid). Based on these numbers and how their 3×3 grids overlap, you can identify or suspect under which squares mines are hidden.

Place a flag by touching the square longer (Standard Mode) to mark it as dangerous. Reveal all safe squares without mines to win the game.
```

### Problems to solve

 1. generate an in memory board with a random number of mines on it.
   1. does it matter how random the mines are? Maybe initially not because it can be fixed later
   1. dimensions of the board can be decided at generation time
   1. is there a minimum size of board we should support? looking at online, the size of the board decides the difficulty. So smallest board of 7x7 is for beginners
   1. clicking on a square randomly removes all the empty squares and assigns a score to the unrevealed squares
   1. right clicking on a square you can mark it as a mine
   1. The adjancy includes the corners, so all 8 directions must be evaluated for the score
   1. clicking on a mine reveals the location of all the mines

   It's actually a lot more complicated than I thought.

   So one more thought. Since the adjancy values will never change once the board is generated we should store them in the board too, that way we don't have to calculate them dynmically. So thinking

    1. generate the board, you can use a simple array for this, you just need to decide at the beginning what the height and width
    1. generate random mine locations
    1. sweep every location and give it a score based on mine location
       1. empty 0
       1. sum all the adjacent squares for mines and that's the score
       1. you want a comparison algorithm than can calculate all 8 locations around any location and then returns the sum
    1. mark which squares on board have been revealed

When someone clicks on a square, how does the scanning algorithm work?