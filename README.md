# Starfield Simulation 

This project is a dynamic simulation of a starfield implemented in JavaScript. Leveraging the principles of Object-Oriented Programming (OOP), it provides a visual representation of stars moving in a 2D space, creating an illusion of depth and motion as if you're traversing through the stars in space.

## Core Features

- **Object-Oriented Programming (OOP)**: The simulation is designed around the core principles of OOP. Each star in the simulation is an instance of the `Star` class, which contains properties like `x`, `y`, and `z` (for depth), as well as methods for updating its state (`update()`) and displaying itself on the canvas (`show()`).

- **Different Sizes of Stars**: The `Star` class also takes into account the size of the stars, providing a more immersive and realistic experience.

- **Dynamic Animation**: The update method of the `Star` class is used to incrementally change the state of each star, simulating motion. 

- **Center-focused Movement**: Stars move away from the center to give the illusion of travelling through space. This is implemented using methods in the `Star` class and mathematical computations for each star's position.
