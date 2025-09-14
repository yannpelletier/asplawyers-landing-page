<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.privacyPolicyTitle()}</title>
	<meta
		name="description"
		content="Politique de confidentialité de ASP Avocats inc., décrivant la collecte, l'utilisation et la protection des renseignements personnels."
	/>
</svelte:head>

<div class="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
	<Card class="mx-auto max-w-4xl">
		<CardHeader>
			<CardTitle class="text-xl font-bold sm:text-2xl md:text-3xl"
				>{m.privacyPolicyTitle()}</CardTitle
			>
		</CardHeader>
		<CardContent class="space-y-6">
			<!-- Introduction -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.introductionTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.introductionText()}</p>
			</section>

			<Separator />

			<!-- Renseignements personnels -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.personalInformationTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.personalInformationText()}</p>
			</section>

			<Separator />

			<!-- Objectifs -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.collectionPurposesTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.collectionPurposesText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.collectionPurposesList1()}</li>
					<li>{m.collectionPurposesList2()}</li>
					<li>{m.collectionPurposesList3()}</li>
					<li>{m.collectionPurposesList4()}</li>
					<li>{m.collectionPurposesList5()}</li>
					<li>{m.collectionPurposesList6()}</li>
				</ul>
			</section>

			<Separator />

			<!-- Limitation -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.limitationTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.limitationText()}</p>
			</section>

			<Separator />

			<!-- Consentement -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.consentTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.consentText()}</p>
			</section>

			<Separator />

			<!-- Retrait du consentement -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.withdrawalConsentTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.withdrawalConsentText()}</p>
				<div class="mt-4 space-y-2">
					<p class="flex items-center gap-2 text-sm sm:text-base md:text-lg">
						<Mail class="h-5 w-5 text-gray-600" />
						<a
							href="mailto:{m.contactEmail()}"
							class="text-sm text-blue-600 hover:underline sm:text-base md:text-lg"
						>
							{m.contactEmail()}
						</a>
					</p>
				</div>
			</section>

			<Separator />

			<!-- Informations collectées -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.collectedInformationTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.collectedInformationText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.collectedInformationList1()}</li>
					<li>{m.collectedInformationList2()}</li>
					<li>{m.collectedInformationList3()}</li>
					<li>{m.collectedInformationList4()}</li>
					<li>{m.collectedInformationList5()}</li>
				</ul>
			</section>

			<Separator />

			<!-- Comment nous collectons -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.collectionMethodsTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.collectionMethodsText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.collectionMethodsList1()}</li>
					<li>{m.collectionMethodsList2()}</li>
					<li>{m.collectionMethodsList3()}</li>
				</ul>
			</section>

			<Separator />

			<!-- Cookies -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.cookiesTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.cookiesText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.cookiesList1()}</li>
					<li>{m.cookiesList2()}</li>
				</ul>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.cookiesSettingsText()}</p>
			</section>

			<Separator />

			<!-- Comment nous utilisons -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.informationUseTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.informationUseText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.informationUseList1()}</li>
					<li>{m.informationUseList2()}</li>
					<li>{m.informationUseList3()}</li>
					<li>{m.informationUseList4()}</li>
					<li>{m.informationUseList5()}</li>
				</ul>
			</section>

			<Separator />

			<!-- Divulgation -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.disclosureTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.disclosureText()}</p>
				<ul class="mt-2 list-disc space-y-1 pl-5 text-sm sm:text-base md:text-lg">
					<li>{m.disclosureList1()}</li>
					<li>{m.disclosureList2()}</li>
					<li>{m.disclosureList3()}</li>
					<li>{m.disclosureList4()}</li>
					<li>{m.disclosureList5()}</li>
				</ul>
			</section>

			<Separator />

			<!-- Prestataires de services tiers -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.thirdPartyServicesTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.thirdPartyServicesText()}</p>
			</section>

			<Separator />

			<!-- Sécurité et stockage -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.securityStorageTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.securityStorageText()}</p>
			</section>

			<Separator />

			<!-- Conservation -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.retentionTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.retentionText()}</p>
			</section>

			<Separator />

			<!-- Accès et correction -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.accessCorrectionTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.accessCorrectionText()}</p>
			</section>

			<Separator />

			<!-- Modification de la politique -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.policyModificationTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.policyModificationText()}</p>
			</section>

			<Separator />

			<!-- Plainte -->
			<section>
				<h2 class="text-base font-semibold sm:text-lg md:text-xl">
					{m.complianceComplaintTitle()}
				</h2>
				<p class="mt-2 text-sm sm:text-base md:text-lg">{m.complianceComplaintText()}</p>
			</section>
		</CardContent>
	</Card>
</div>

<style>
	:global(a) {
		@apply transition-colors;
	}
</style>
