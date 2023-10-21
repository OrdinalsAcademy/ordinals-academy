import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import FrankenImage from 'public/professor_franken.jpg';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
	// Add custom props here
};

export default function Glossary(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const { t } = useTranslation('common');
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
			title: t('bitcoinNode.title'),
			description: t('bitcoinNode.description'),
			slug: 'bitcoin-node',
		},
		{
			id: 2,
			title: t('bitcoinProtocol.title'),
			description: t('bitcoinProtocol.description'),
			slug: 'bitcoin-protocol',
		},
		{
			id: 3,
			title: t('brc20.title'),
			description: t('brc20.description'),
			slug: 'brc-20',
		},
		{
			id: 4,
			title: t('cursedInscription.title'),
			description: t('cursedInscription.description'),
			slug: 'cursed-inscription',
		},
		{
			id: 5,
			title: t('digitalArtifact.title'),
			description: t('digitalArtifact.description'),
			slug: 'digital-artifact',
		},
		{
			id: 6,
			title: t('envelopes.title'),
			description: t('envelopes.description'),
			slug: 'envelopes',
		},
		{
			id: 7,
			title: t('exoticRarity.title'),
			description: t('exoticRarity.description'),
			slug: 'exotic-rarity',
		},
		{
			id: 8,
			title: t('inscription.title'),
			description: t('inscription.description'),
			slug: 'inscription',
		},
		{
			id: 9,
			title: t('inscriptionID.title'),
			description: t('inscriptionID.description'),
			slug: 'inscription-id',
		},
		{
			id: 10,
			title: t('indexer.title'),
			description: t('indexer.description'),
			slug: 'indexer',
		},
		{
			id: 11,
			title: t('inscriptionNumber.title'),
			description: t('inscriptionNumber.description'),
			slug: 'inscription-number',
		},
		{
			id: 12,
			title: t('operationCodeOpCode.title'),
			description: t('operationCodeOpCode.description'),
			slug: 'operation-code-opcode',
		},
		{
			id: 13,
			title: t('ordClient.title'),
			description: t('ordClient.description'),
			slug: 'ord-client',
		},
		{
			id: 14,
			title: t('ordinalHandbook.title'),
			description: t('ordinalHandbook.description'),
			slug: 'ordinal-handbook',
		},
		{
			id: 15,
			title: t('ordinalsProtocol.title'),
			description: t('ordinalsProtocol.description'),
			slug: 'ordinals-protocol',
		},
		{
			id: 16,
			title: t('ordinalTheory.title'),
			description: t('ordinalTheory.description'),
			slug: 'ordinal-theory',
		},
		{
			id: 17,
			title: t('provenanceParentChild.title'),
			description: t('provenanceParentChild.description'),
			slug: 'provenance-parent-child',
		},
		{
			id: 18,
			title: t('partiallySignedBitcoinTransactionPSBT.title'),
			description: t('partiallySignedBitcoinTransactionPSBT.description'),
			slug: 'partially-signed-bitcoin-transaction-psbt',
		},
		{
			id: 19,
			title: t('payToTaprootP2TR.title'),
			description: t('payToTaprootP2TR.description'),
			slug: 'pay-to-taproot-p2tr',
		},
		{
			id: 20,
			title: t('recursion.title'),
			description: t('recursion.description'),
			slug: 'recursion',
		},
		{
			id: 21,
			title: t('satoshiNumbers.title'),
			description: t('satoshiNumbers.description'),
			slug: 'satoshi-numbers',
		},
		{
			id: 22,
			title: t('reinscription.title'),
			description: t('reinscription.description'),
			slug: 'reinscription',
		},
		{
			id: 23,
			title: t('rodamorRarity.title'),
			description: t('rodamorRarity.description'),
			slug: 'rodamor-rarity',
		},
		{
			id: 24,
			title: t('satoshi.title'),
			description: t('satoshi.description'),
			slug: 'satoshi',
		},
		{
			id: 25,
			title: t('satHunting.title'),
			description: t('satHunting.description'),
			slug: 'sat-hunting',
		},
		{
			id: 26,
			title: t('satName.title'),
			description: t('satName.description'),
			slug: 'sat-name',
		},
		{
			id: 27,
			title: t('segwit.title'),
			description: t('segwit.description'),
			slug: 'segwit',
		},
		{
			id: 28,
			title: t('teleburn.title'),
			description: t('teleburn.description'),
			slug: 'teleburn',
		},
		{
			id: 29,
			title: t('taproot.title'),
			description: t('taproot.description'),
			slug: 'taproot',
		},
		{
			id: 30,
			title: t('utxo.title'),
			description: t('utxo.description'),
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
							Ordinals.
						</p>
					</div>
					<div className="relative overflow-hidden text-center max-w-[500px] rounded-lg mt-6 md:mt-0">
						<Image
							src={FrankenImage.src}
							alt="Bitcoin Ordinals Terminology"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>

			<div
				ref={sentinelRef}
				style={{ height: '40px', width: '100%' }}
			></div>
			<div
				className={`p-4 mx-auto sticky top-0 z-9 w-full items-center justify-center flex transition-all ${
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
	},
});
