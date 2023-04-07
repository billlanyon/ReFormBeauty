// seed prisma database

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
	await prisma.user.deleteMany({});
	await prisma.newsletterSignup.deleteMany({});
	await prisma.treatment.deleteMany({});

	await prisma.treatment.create({
		data: {
			title: 'Botox Injections',
			body: "Botulinum toxin injections relax the muscles in your face to smooth out lines and wrinkles, such as crow's feet and frown lines.",
		},
	});
	await prisma.treatment.create({
		data: {
			title: 'Dermal Fillers',
			body: 'Face and lip fillers are substances injected into your face. They fill lines and wrinkles and add volume to areas such as your lips or cheeks.',
		},
	});
}

main().then(() => {
	console.log('seeded database');
	process.exit(0);
});
