import { Link, Outlet, useLoaderData } from '@remix-run/react';

import Treatments from '../components/Treatments';
import { requireUserSession } from '../data/auth.server';
import { prisma } from '../data/prisma.server';

function TreatmentsLayoutRoute() {
	const treatments = useLoaderData();

	return (
		<>
			<Outlet />
			<h1 className='text-center text-3xl font-bold text-slate-400'>
				Your treatments
			</h1>
			<div className='text-right my-8 max-w-2xl mx-auto'>
				<Link
					to='/treatments/new'
					className='border-blue-300 px-4 py-3 border-2 text-blue-300 hover:bg-blue-300 hover:text-blue-900'
				>
					+ Add a new treatment
				</Link>
			</div>
			{treatments.length === 0 && (
				<p className='text-center my-16 text-xl'>You have no treatments yet!</p>
			)}
			<Treatments items={treatments} />
		</>
	);
}

export default TreatmentsLayoutRoute;

export async function loader({ request }) {
	await requireUserSession(request);

	return prisma.treatment.findMany();
}
