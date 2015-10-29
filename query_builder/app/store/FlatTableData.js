Ext.define("MPAGE.store.FlatTableData", {
	extend: "univnm.ext.QueryStore",
	alias:"store.flat_table_data",
	sql:[
		"select ",
		"	atc.table_name, ",
		"	atc.column_name, ",
		"	atc.COLUMN_ID, ",
		"	data_type || chr( ",
		"		40 ",
		"	) ",
		"	|| data_length ||chr( ",
		"		41 ",
		"	) ",
		"	type ",
		"from ",
		"	all_tab_columns atc ",
		"	join table_privileges tp  on	( ",
		"		atc.TABLE_NAME = tp.TABLE_NAME ",
		"		and tp.GRANTEE ='UNMH' ",
		"	) ",
		"UNION ",
		"select ",
		"	atc.table_name, ",
		"	atc.column_name, ",
		"	atc.COLUMN_ID, ",
		"	data_type || chr( ",
		"		40 ",
		"	) ",
		"	|| data_length ||chr( ",
		"		41 ",
		"	) ",
		"	type ",
		"from ",
		"	all_tab_columns atc ",
		"	join all_tables allt  on	( ",
		"		atc.table_name = allt.table_name ",
		"		and allt.owner = 'UNMH' ",
		"	) ",
		"order by ",
		"	TABLE_NAME, ",
		"	COLUMN_ID "
	],
	groupField: 'table_name',
	autoLoad:true
	
});