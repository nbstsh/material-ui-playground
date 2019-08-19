import React, { useState } from 'react';

import style from './basic-date-time-picker.module.scss';

import { DateTimePicker } from '@material-ui/pickers';

function BasicDateTimePicker() {
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<div className={style.container}>
			<DateTimePicker
				label="DateTimePicker"
				inputVariant="outlined"
				value={selectedDate}
				onChange={handleDateChange}
			/>

			<DateTimePicker
				autoOk
				ampm={false}
				disableFuture
				value={selectedDate}
				onChange={handleDateChange}
				label="24h clock"
			/>

			<DateTimePicker
				value={selectedDate}
				disablePast
				onChange={handleDateChange}
				label="With Today Button"
				showTodayButton
			/>
		</div>
	);
}

export default BasicDateTimePicker;
