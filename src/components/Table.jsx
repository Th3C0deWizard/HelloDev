function Table(props) {
	return (
		<div className="grid place-items-center ">
			<table className="my-10 text-sm text-cente shadow-[0_3px_18px_3px_#0e66b130]" id={props.id}>
				<thead className="text-3xs uppercase bg-[#0069a3] text-white font-semibold ">
					<tr className="">
						{props.headers.map((header, i) => {
							return (
								<th key={i} scope="col" className="px-6 py-3 ">
									{header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{props.data?.map((row) => {
						return (row);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
