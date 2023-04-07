function Treatments({ items }) {
	return (
		<ul className='grid grid-flow-row-dense gap-8 max-w-2xl mx-auto my-12'>
			{items.map((item) => (
				<li key={item.id} data-cy='treatment-item'>
					<article className='bg-slate-800 rounded-md p-8'>
						<h3 className='font-bold text-lg mb-2 text-blue-400'>
							{item.title}
						</h3>
						<p className='text-slate-400'>{item.body}</p>
					</article>
				</li>
			))}
		</ul>
	);
}

export default Treatments;
