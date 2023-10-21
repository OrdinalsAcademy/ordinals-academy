import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import FrankenImage from 'public/professor_franken.jpg';

export default function Glossary() {
	const [isAtTop, setIsAtTop] = useState(false);

	const sentinelRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsAtTop(!entry.isIntersecting);
			},
			{
				threshold: [0],
			}
		);

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current);
		}

		return () => {
			if (sentinelRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(sentinelRef.current);
			}
		};
	}, []);

	const data = [
		{
			id: 1,
			title: 'Bitcoin Node',
			description:
				"A system that runs the Bitcoin Core software, validating transactions and blocks on the blockchain while ensuring adherence to the network's consensus rules.",
			slug: 'bitcoin-node',
		},
		{
			id: 2,
			title: 'Bitcoin Protocol',
			description:
				'The decentralized system that governs the creation, transmission, and verification of Bitcoin transactions.',
			slug: 'bitcoin-protocol',
		},
		{
			id: 3,
			title: 'BRC-20',
			description:
				'An experimental fungible token standard on Bitcoin making a non-fungible token (Ordinals), fungible.',
			slug: 'brc-20',
		},
		{
			id: 4,
			title: 'Cursed Inscription',
			description:
				'When an inscription does not abide by the current Ordinal protocol standards that inscription is deemed as “cursed”.',
			slug: 'cursed-inscription',
		},
		{
			id: 5,
			title: 'Digital Artifact',
			description:
				'Any digital asset that possesses characteristics of ownership, completeness, permissionlessness, uncensorability, and immutability.',
			slug: 'digital-artifact',
		},
		{
			id: 6,
			title: 'Envelopes',
			description:
				"Inscription data is 'enveloped' in the Pay-to-Taproot tapscript of a Bitcoin transaction.",
			slug: 'envelopes',
		},
		{
			id: 7,
			title: 'Exotic Rarity',
			description:
				'Subjective rarity attributes of sats based on unique characteristics like specific numbering patterns, naming or historical significance.',
			slug: 'exotic-rarity',
		},
		{
			id: 8,
			title: 'Inscription',
			description:
				'Arbitrary content stored in a Bitcoin transaction during the creation of a digital artifact (akin to NFTs on Bitcoin).',
			slug: 'inscription',
		},
		{
			id: 9,
			title: 'Inscription ID',
			description:
				'An inscription identifier includes the transaction ID of the reveal transaction (during creation of the inscription) and the index of the new inscription within that transaction.',
			slug: 'inscription-id',
		},
		{
			id: 10,
			title: 'Indexer',
			description:
				'Indexers monitor ordinal numbers and their inscription data.',
			slug: 'indexer',
		},
		{
			id: 11,
			title: 'Inscription Number',
			description:
				'The number assigned to an inscription based on its order of creation on the network.',
			slug: 'inscription-number',
		},
		{
			id: 12,
			title: 'Operation Code (OpCode)',
			description:
				'An "Operation Code (OpCode)" in Bitcoin serves as a command or instruction within the Bitcoin scripting language known as Script. OpCodes are used within UTXOs for transaction validation and control of spending conditions.',
			slug: 'operation-code-opcode',
		},
		{
			id: 13,
			title: 'Ord Client',
			description:
				'The open-source software that enables users to participate in the Ordinals protocol. Ord provides an ordinal indexing service, a block explorer, an inscription service, and a command-line wallet.',
			slug: 'ord-client',
		},
		{
			id: 14,
			title: 'Ordinal Handbook',
			description:
				'Found at https://docs.ordinals.com, the Ordinals Handbook stands as a guide to Ordinal Theory.',
			slug: 'ordinal-handbook',
		},
		{
			id: 15,
			title: 'Ordinals Protocol',
			description:
				'The Ordinals protocol is a system for storing and tracking digital assets (NFTs) on Bitcoin.',
			slug: 'ordinals-protocol',
		},
		{
			id: 16,
			title: 'Ordinal Theory',
			description:
				'A scheme that serializes and tracks individual satoshis using ordinal numbers based on their order of creation.',
			slug: 'ordinal-theory',
		},
		{
			id: 17,
			title: 'Provenance (Parent/Child)',
			description:
				'Provenance enables the holder of an inscription to demonstrate ownership and to create child entities that establish provenance on-chain.',
			slug: 'provenance-parent-child',
		},
		{
			id: 18,
			title: 'Partially Signed Bitcoin Transaction (PSBT)',
			description:
				'Often used in ordinal marketplaces, PSBTs allow for the partial signing of a transaction. They wait for the second party (or multiple parties) to complete the transaction by agreeing to the conditions of the PSBT and broadcasting the transaction.',
			slug: 'partially-signed-bitcoin-transaction-psbt',
		},
		{
			id: 19,
			title: 'Pay-to-Taproot (P2TR)',
			description:
				'Pay-to-Taproot is a type of Bitcoin transaction output introduced with the Taproot update in November 2021.',
			slug: 'pay-to-taproot-p2tr',
		},
		{
			id: 20,
			title: 'Recursion',
			description:
				'A method allowing inscriptions to reference the content of other inscriptions, minimizing data size while preserving content access.',
			slug: 'recursion',
		},
		{
			id: 21,
			title: 'Satoshi Numbers (also known as Ordinal Numbers)',
			description:
				'The serialization of satoshis, assigned in the order in which they are created; these numbers are preserved across transactions.',
			slug: 'satoshi-numbers',
		},
		{
			id: 22,
			title: 'Reinscription',
			description:
				'Attaching additional inscription data to an already inscribed satoshi.',
			slug: 'reinscription',
		},
		{
			id: 23,
			title: 'Rodamor Rarity',
			description:
				"A classification system for sat rarity based on Bitcoin's periodic events, as defined by Casey Rodarmor.",
			slug: 'rodamor-rarity',
		},
		{
			id: 24,
			title: 'Satoshi',
			description:
				'The smallest unit of Bitcoin, equivalent to 0.00000001 BTC.',
			slug: 'satoshi',
		},
		{
			id: 25,
			title: 'Sat Hunting',
			description:
				'The practice of searching for and identifying rare sats based on their historical or ordinal significance.',
			slug: 'sat-hunting',
		},
		{
			id: 26,
			title: 'Sat Name',
			description:
				'A unique identifier for each satoshi derived from its satoshi number using Base26 (alphabetical) conversion.',
			slug: 'sat-name',
		},
		{
			id: 27,
			title: 'Segwit',
			description:
				"Launched in August 2017, designed to reduce transaction data size by separating certain data from the transaction signature. It is in this segregated area that arbitrary messages can be stored. This feature is available with any SegWit address, which starts with '3' or 'bc1q'.",
			slug: 'segwit',
		},
		{
			id: 28,
			title: 'Teleburn',
			description:
				'The process of burning an NFT on its original chain of creation, followed by inscribing the same content onto the Bitcoin blockchain.',
			slug: 'teleburn',
		},
		{
			id: 29,
			title: 'Taproot',
			description:
				"Launched in November 2021 with the aim of improving security, efficiency, and scalability. Taproot scripts offer the advantage of having very few restrictions on their content. Additionally, they benefit from the witness discount, making the storage of inscription content relatively economical. Addresses related to Taproot start with 'bc1p'.",
			slug: 'taproot',
		},
		{
			id: 30,
			title: 'Unspent Transaction Output (UTXO)',
			description:
				'Instead of account balances, Bitcoin uses UTXOs to track the location of coins on the network. To spend a UTXO, you must provide a signature to prove you own the private key corresponding to that address.',
			slug: 'unspent-transaction-output-utxo',
		},
	];

	const organizedData: { [key: string]: any[] } = {};

	data.forEach((term: any) => {
		let key = term.title[0].toUpperCase();

		// If the key is a number, group under '#'
		if (!isNaN(parseInt(key))) {
			key = '#';
		}

		if (!organizedData[key]) {
			organizedData[key] = [];
		}
		organizedData[key].push(term);
	});

	const renderCategory = (key: string, terms: any[], index: number) => (
		<div
			key={key}
			id={key}
			className={`flex flex-col md:flex-row items-start ${
				index === 0 ? 'pt-0' : 'pt-20'
			} pb-10 border-b border-solid border-[rgb(43,48,53)]`}
		>
			<div className="flex-shrink-0 w-full md:w-[100px] mb-4 md:mb-0 md:mr-8 p-5 pb-0 md:p-0">
				<div
					className="text-5xl font-semibold leading-[80px]"
					style={{
						WebkitTextFillColor: 'rgb(20, 21, 26)',
						WebkitTextStroke: '1px rgb(230, 232, 234)',
					}}
				>
					{key}
				</div>
			</div>
			<div>
				{terms.map((term: any) => (
					<div
						key={term.id}
						className="p-5 mb-2 hover:bg-white hover:dark:bg-customDarker hover:cursor-pointer rounded-[10px]"
					>
						{/* todo <Link href={`/glossary/${term.slug}`}> */}
						<h2 className="mb-3 font-semibold text-2xl leading-10">
							{term.title}
						</h2>
						<div>{term.description}</div>
						{/* </Link> */}
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen flex flex-col pb-20 justify-center items-center bg-center bg-no-repeat bg-cover bg-customWhite text-black dark:bg-customDark dark:text-white">
			<div className="py-20 px-6 md:px-20 w-full mx-auto bg-white dark:bg-customDarker items-center justify-center">
				<div className="flex items-center grid grid-cols-1 md:grid-cols-2 gap-8 grid-rows-auto">
					<div className="md:ml-20 px-6 md:px-20">
						<h1 className="text-3xl md:text-4xl leading-18 mb-4 font-semibold">
							Bitcoin Ordinals Terminology
						</h1>
						<p className="text-xl font-normal leading-[1.45] text-base">
							Your one-stop guide to understand the language in
							Ordinals
						</p>
					</div>
					<div className="relative overflow-hidden text-center max-w-[500px] rounded-lg mt-6 md:mt-0">
						<Image
							src={FrankenImage.src}
							alt="Bitcoin Ordinals Terminology"
							width={200}
							height={200}
							layout="responsive"
						/>
					</div>
				</div>
			</div>

			<div
				ref={sentinelRef}
				style={{ height: '40px', width: '100%' }}
			></div>
			<div
				className={`p-4 mx-auto sticky top-0 z-10 w-full items-center justify-center flex transition-all ${
					isAtTop ? 'bg-customGray text-white' : ''
				}`}
			>
				<div className="max-w-[1136px] items-center grid grid-cols-1 grid-rows-auto">
					<div className="flex flex-wrap gap-2">
						{Object.keys(organizedData)
							.sort()
							.map((key) => (
								<Link
									href={`#${key}`}
									key={key}
									className="p-2 hover:font-bold rounded"
								>
									{key}
								</Link>
							))}
					</div>
				</div>
			</div>
			<div className="max-w-[1136px] pt-0 p-4">
				{Object.keys(organizedData)
					.sort()
					.map((key, index) =>
						renderCategory(key, organizedData[key], index)
					)}
			</div>
		</div>
	);
}
