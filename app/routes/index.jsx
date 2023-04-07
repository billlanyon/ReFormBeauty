import { Link, useLoaderData } from '@remix-run/react';
import Treatments from '../components/Treatments';
import { prisma } from '../data/prisma.server';

export default function Index() {
	const treatments = useLoaderData();

	return (
		<>
			<section className='text-center max-w-5xl mx-auto my-4'>
				<h1 className='font-bold text-2xl my-4'>ReFormBeauty App Scaffold</h1>
				<p>
					ReFormBeauty saves time and keeps customers, therapists and providers
					safe.
				</p>
			</section>
			<section className='text-center max-w-5xl mx-auto my-4'>
				<Treatments items={treatments} />
			</section>
			<section>
				<p className='text-center'>
					<Link
						to='/treatments/new'
						className='bg-blue-700 text-blue-50 rounded-sm px-8 py-4 text-lg hover:bg-blue-600'
					>
						+ Add a new treatment
					</Link>
				</p>
			</section>
		</>
	);
}

export function loader() {
	return prisma.treatment.findMany({ take: 2 });
}
