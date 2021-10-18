# Reverse Array

Includes a function that takes in some array, and returns that an array with all the elements in reverse order.

## Inputs / Outputs

Input: `[1, 2, 3, 4, 5, 6]`\
Output: `[6, 5, 4, 3, 2, 1]`

## Algorithm

If we can grab the ends of the array, we can just swap their values.

* Use a for loop to look at all the elements in the array.(iterating through the array).
* At each item, I swap with the inverse array index.
* Only go half way (give of take 1) and stop.
  * If we don't stop halfway we will re-swap.

## Pseudocode

```plaintext

function Reverse-Array takes in `arr`:

  declare start <- 0;
  declare end <- length of arr minus 1;

  while start <= end:
    declare temp <- arr[start]
    arr[start] <- arr[end]
    arr[end] <- temp
    start = start + 1
    end  = end - 1

```

## Actual Code

(This would be a file that lives here)

## Visual

![Array reversal](./reverse-array.png)
