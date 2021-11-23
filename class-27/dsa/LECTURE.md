# DSA Lecture - Hash Tables

## Overview

Hash Tables / Hash Maps have the same behaviors as our JS object literals: key value pairs.  The only benefit we get form hash table rather than just a POJO, is the ability to hash.

All data is store in buckets!  When we create our Hash Table, we assign a certain of buckets.  and create our map, this will be an array.  Each key and value that we want to store, we can hash our key to produce an array index value.

## Terminology

* Hash: a deterministic (always has the same result) way to take in input and produce a changed output.
  * 'jacob' => 1543654.ygdfuyagsdf;ajshhfguy.
  * key => address / index in a structure.
* Bucket: a storage container, contains key value pairs.
* Collisions: when a key maps to the same position.
  * A "perfect" hash map will have no collisions.
  * A good hash map will have a way to handle collisions gracefully.

## Implementation

Everything comes down to hashing:

Takes in a 'string' for now and returns and index value:

* We need the size of our hashtable, we need a key.

4 Steps to creating our hash

1) Convert the string to the sum of it's ASCII
'Jacob' = 74 + 97 + 99 + 11 + 98 = 479

2) Take the sum and multiply by some largish prime number (599).
479 * 599 = 286921

3) Use modulo to get the remainder from the division by map size.
286921 % 1024 = 201

4) We shuold be left with an index value, insert value at hashed index.
map[201] = value
