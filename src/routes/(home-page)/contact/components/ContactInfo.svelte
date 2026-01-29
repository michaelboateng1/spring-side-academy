<script>
	import { AddressBookOutline, PhoneOutline, EnvelopeOpenOutline, BadgeCheckOutline } from "flowbite-svelte-icons";
</script>

<section class="container mx-auto flex flex-wrap justify-center">
	<div>
		<iframe
			title="Our Location"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.009556855099!2d-1.6231414!3d6.6457338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb913bfadaeb6b%3A0xfa401b75304550f6!2sSpring%20Side%20Academy!5e0!3m2!1sen!2sgh!4v1768409306523!5m2!1sen!2sgh"
			width="600"
			height="500"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
	<div class="min-w-md bg-[#0f2a92] p-10 text-white">
		<div
			class="flex flex-col flex-nowrap justify-between gap-10 border-y-2 border-gray-300 px-3 py-5"
		>
			<div>
				<h2 class="mb-2 text-3xl">Address</h2>
				<div class="flex items-center justify-start gap-2">
					<AddressBookOutline class="shrink-0 h-6 w-6" />
					<p>Paraku Estate, Atasemanso , Kumasi, Ghana</p>
				</div>
			</div>
			<address>
				<div class="flex items-center justify-start gap-2 mb-2">
					<PhoneOutline class="shrink-0 h-6 w-6" />
					<p> 027 101 7170</p>
				</div>
				<div class="flex items-center justify-start gap-2">
					<EnvelopeOpenOutline class="shrink-0 h-6 w-6" />
					<p>springsideacademygh@gmail.com</p>
				</div>
			</address>
		</div>

		<div
			class="flex flex-col flex-nowrap justify-between gap-10 border-b-2 border-gray-300 px-3 py-5"
		>
			<div>
				<h2 class="mb-2 text-3xl">Director Name</h2>
				<div class="flex items-center justify-start gap-2 mb-2">
					<BadgeCheckOutline class="shrink-0 h-6 w-6" />
					<p>Director Role</p>
				</div>
			</div>
			<address>
				<div class="flex items-center justify-start gap-2 mb-2">
					<PhoneOutline class="shrink-0 h-6 w-6" />
					<p> Director Number</p>
				</div>
				<div class="flex items-center justify-start gap-2">
					<EnvelopeOpenOutline class="shrink-0 h-6 w-6" />
					<p>Director Email</p>
				</div>
			</address>
		</div>
	</div>
</section>
