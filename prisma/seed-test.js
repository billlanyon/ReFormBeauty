// seed prisma database

const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

export async function seed() {
	console.log('Seeding...');
	await prisma.user.deleteMany({});
	await prisma.newsletterSignup.deleteMany({});
	await prisma.treatment.deleteMany({});

	await prisma.user.create({
		data: {
			email: 'test@example.com',
			password: await hash('testpassword', 12),
		},
	});
	await prisma.newsletterSignup.create({
		data: {
			email: 'test2@example.com',
		},
	});
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
