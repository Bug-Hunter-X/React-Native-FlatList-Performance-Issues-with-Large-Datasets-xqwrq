# React Native FlatList Performance Bug

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets and complex item rendering. The bug manifests as janky scrolling, dropped frames, and potential crashes due to inefficient key extraction and expensive operations within the `renderItem` function.

The `bug.js` file contains the buggy implementation, showcasing inefficient `keyExtractor` and costly operations inside `renderItem`.  The `bugSolution.js` file provides an optimized solution by addressing these performance bottlenecks.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run the app on a device or emulator.
4. Observe the performance issues when scrolling the list (especially noticeable on lower-end devices).

## Solution

The optimized solution in `bugSolution.js` improves performance by:

* Using a more efficient `keyExtractor` function.
* Optimizing the rendering logic within `renderItem` to minimize expensive operations.
* Memoizing components where appropriate to reduce unnecessary re-renders.

This example highlights the importance of careful optimization when working with `FlatList` and large datasets in React Native.