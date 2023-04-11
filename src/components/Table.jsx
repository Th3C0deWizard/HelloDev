function Table(props) {
	return (
		<div className="grid place-items-center sm:rounded-lg">
			<table className="my-10 text-sm text-left text-gray-400 ">
				<thead className="text-3xs uppercase bg-[#0069a3] text-white font-semibold ">
					<tr className="border border-gray-600">
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
					{props.data.map((registro, i) => {
						return (
							<tr
								key={i}
								className="bg-slate-900 border border-gray-600 hover:bg-slate-800 text-white"
							>
								{registro.map((campo, j) => {
									return (
										<td
											key={j}
											className={`px-6 py-3 font-medium ${props.styleData[j]}`}
										>
											{campo}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
