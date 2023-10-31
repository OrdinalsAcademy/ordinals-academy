---
title: "What is Ordinal Theory?"
description: "Ordinal Theory is the scheme for serializing individual satoshis, the smallest denomination of Bitcoin (0.00000001 Bitcoin). This process assigns ‘ordinal numbers’ giving us the ability to track and trace individual satoshis from their time of creation."
readTimeInMin: "5"
datePublished: '2023-10-31'
difficulty: "Beginner"
author: "Franken"
tldr:
    - "Ordinal Theory serializes individual satoshis, the smallest Bitcoin unit, allowing tracking from creation."
    - "Bitcoin Transactions: Transactions are recorded in blocks on an immutable ledger (blockchain). Bitcoin uses the UTXO model, not account balances."
    - "Ordinal Numbers: Created to store digital assets (NFTs) on Bitcoin. They provide a reference for on-chain data, aiding ownership tracking and transfers."
    - "Rarity Levels: Ordinal Theory introduced rarity levels for satoshis, such as Uncommon, Rare, Epic, Legendary, and Mythic. There are also 'Exotics' for unique patterns."
    - "Satoshi Names: Derived from ordinal numbers using Base26. Names are assigned in reverse creation order."
    - "Specification: The process of assigning and tracking ordinal numbers is divided into five code sections: Bitcoin Subsidy, First Ordinal, Assigning Ordinals in Blocks, Tracking Transactions, and Handling the Coinbase Transaction."
---

Ordinal Theory is the scheme for serializing individual satoshis, the smallest denomination of Bitcoin (0.00000001 Bitcoin). This process assigns ‘ordinal numbers’ giving us the ability to track and trace individual satoshis from their time of creation. 

Before we go into the weeds of Ordinal Theory, it’s important to know two things about bitcoin.

1. Every successful transaction is recorded in blocks and written to an immutable ledger called the blockchain. Typically this chain of records is updated every 10m with new transactions.
2. There are no account balances on Bitcoin, instead it uses unspent transaction output (UTXO) model for keeping track of funds. In short, bitcoin doesn’t keep track of your ‘account’ balance, but instead you have UTXOs that are ‘permission slips’ to spend the bitcoin sent to you.

### **Understanding Ordinal Numbers:**

The primary purpose of ordinal numbers stems from the creator's goal of storing digital assets (NFTs) on Bitcoin. While Bitcoin inherently treats all bitcoins as identical, fungible assets without serialization, the creation of Ordinal Theory introduced a method to track and trace satoshis using a first-in, first-out model based on transaction history. ordinal numbers offer a reference point to what is stored on-chain, streamlining the tracking of ownership and facilitating transfers.

Whenever a Bitcoin transaction occurs, it comprises a set of inputs and outputs. Ownership of an Ordinal Number is tracked from the inputs to the outputs of the transaction. The Ord client, software that underpins the Ordinal Protocol, indexes these transactions and monitors network activity. Your inscriptions (the data stored on-chain), remains stationary at their original creation point; only their creation reference point (the ordinal number) is tracked from input to output. For example, if you create an Inscription stored on-chain on Jan 1, 2023, that Inscription's data will always reside in the transaction from that date.

Drawing an analogy, it's akin to owning land (your inscription). Title papers (Ordinal Number) validate ownership, and with your consent, the title can be transferred (outputs), granting someone else ownership of the land. Yet, the land remains stationary.

Ordinal numbers are searchable on [Ordinals.com](http://ordinals.com/) and presented in five formats: Integer notation based on mining order (ordinal number), Decimal notation displaying block height (referring to the position or the number of a specific block within a blockchain) and satoshi offset, Degree notation representing an ordinal numbers rarity at a glance, Percentile notation indicating a satoshi's position relative to Bitcoin's supply, and Name, encoded using characters a-z. The introduction of numbering and naming establishes rarity, as each number and name is unique.

![Sat Number Example](/images/what-is-ordinal-theory/satnumnbers.png)

### **Rarity:**

With the creation of Ordinal Theory, Casey Rodarmor not only conceptualized numbering but also suggested a collector's guide in sync with Bitcoin's periodic events.

These events, and their corresponding rarity levels, are:

**New Block (Uncommon):** Though a new block is mined roughly every 10 minutes, the first satoshi of each block is deemed ‘Uncommon’. Total supply: 6,929,999

**Difficulty Adjustments (Rare):** Approximately every two weeks, or after 2016 blocks, the Bitcoin network modifies its difficulty target. The first satoshi of each adjustment period is labeled ‘Rare’. Total supply: 3437

**Halvings (Epic):** Roughly every four years, or after 210,000 blocks, the quantity of new sats in each block is halved. The first satoshi of each halving is labeled ‘Epic’. Total supply: 32

**Cycles and Conjunctions (Legendary):** Every six halvings, a conjunction event synchronizes the halving with the difficulty adjustment. The first satoshi of each conjunction event is labeled ‘Legendary’. Total supply: 5

**Genesis Block (Mythic):** The pinnacle of rarity is the genesis block's first satoshi, classified as Mythic. The term ‘Mythic’ is symbolic, as it remains unattainable. Satoshi Nakamoto's original Bitcoin code design renders the 50 BTC from the genesis block unspendable due to the absence of a preceding transaction to reference. This unique trait ensures the reward is eternally locked. Total supply: 1

Outside these events, all other satoshis are labeled ‘**Common.**’ Total supply: 2.1 quadrillion.

While this widely accepted rarity scheme appeals to collectors, there's also the introduction of "Exotics." These are satoshis with subjective rarity beyond Rodarmor's original classification, such as unique numbering or naming patterns.

Exotic satoshi examples include:
**Block 9:** Sats from Bitcoin's inaugural transaction
**Pizza Transaction:** Sats from the notorious 10,000 BTC pizza transaction.
**Palindrome:** Numbers identical when read forwards and backward.

*Note: Rarity is subjective, and alternative rarity forms can emerge.

### **Satoshi Names**

Satoshi names are derived from Ordinal Numbers through a Base26 (alphabet) conversion. While Base10, our standard numbering system, uses digits (0-9), Base26 employs letters, where A=1, B=2, ... Z=26. It's crucial to understand that sat names, unlike Ordinal Numbers, are assigned in reverse creation order. This reverse naming was chosen because sequential naming would have limited names from 'a' to 'pdulurh' to the unspendable genesis block, making shorter names unattainable.

Sat number 0 (first) = 'nvtdijuwxlp'
Sat number 2099999997689999 (last) = 'a'

The name 'a' is projected as the final creation, anticipated for 2140-02-09 21:02:48 UTC, coinciding with the last bitcoin's issuance.

### The Specification:

To understand how the process of assigning and tracking ordinal numbers is completed we can divide the specification code for Ordinal Theory into five sections, each representing a step in the process required for this scheme to work. This spec can be found in the [Bitcoin Improvement Proposal (BIP)](https://github.com/ordinals/ord/blob/master/bip.mediawiki) as written by the creator Casey Rodarmor.

! [Ordinal number assignment representation](images/what-is-ordinal-theory/Ordinal-number-assignment-light.png)

Visual representation of Ordinal Number assignment specification.

1. **Bitcoin Subsidy**

Bitcoin miners receive rewards known as "subsidies" for validating transactions and securing the network. The **`subsidy`** function calculates this reward, which decreases over time (approximately every four years) in an event known as "halving." This function determines the current reward based on the total number of blocks already on the blockchain (the block height).

```jsx
def subsidy(height):
return 50 * 100_000_000 >> height // 210_000
```

1. **First Ordinal**

The **`first_ordinal`** function calculates the ordinal number for the first satoshi in a new block's subsidy. It adds up all subsidies from previous blocks to determine where the numbering should start for the newly mined satoshis. Essentially, it's saying, "Given all the Bitcoins mined so far, the numbering for the new satoshis in this block starts at X."

```jsx
def first_ordinal(height):
  start = 0
  for height in range(height):
    start += subsidy(height)
  return start
```

1. **Assigning Ordinal Numbers In Each Block**

With the starting ordinal number known, the **`assign_ordinals`** function begins numbering the new satoshis in the block's subsidy. These ordinal numbers are specific to the block's "coinbase" transaction, which is the transaction containing the miner's reward.

```jsx
def assign_ordinals(block):
  first = first_ordinal(block.height)
  last = first + subsidy(block.height)
  coinbase_ordinals = list(range(first, last))
```

1. **Tracking Transactions**

Blocks contain many transactions. These transactions represent the transfer of Bitcoin between parties. The code assigns ordinal numbers to the satoshis in each transaction, ensuring each unit of Bitcoin can be uniquely identified and tracked. It's like giving each dollar bill a unique serial number.

```jsx
for transaction in block.transactions[1:]:
    ordinals = []
    for input in transaction.inputs:
      ordinals.extend(input.ordinals)

    for output in transaction.outputs:
      output.ordinals = ordinals[:output.value]
      del ordinals[:output.value]
```

1. **Handling the Coinbase Transaction**

Finally, the code ensures that every satoshi in the coinbase transaction is accounted for. It assigns the remaining ordinal numbers to these satoshis. This process is crucial for maintaining the complete accountability and traceability of every single satoshi generated.

```jsx
coinbase_ordinals.extend(ordinals)

  for output in block.transaction[0].outputs:
    output.ordinals = coinbase_ordinals[:output.value]
    del coinbase_ordinals[:output.value]
```

### Summary:

The essence of Ordinal Theory is to bring a new dimension to Bitcoin, allowing for the serialization of its smallest unit, a satoshi. This serialization not only enhances the traceability of transactions but also introduces a unique aspect of rarity and collectibility to the Bitcoin ecosystem - are you holding any ‘rare’ sats in your wallet? What was once fungible has now been imbued with a non-fungible characteristic.
