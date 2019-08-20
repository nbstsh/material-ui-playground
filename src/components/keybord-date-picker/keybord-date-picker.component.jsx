import React, { Fragment, useState } from 'react';

import style from './keybord-date-picker.module.scss';

import { KeyboardDatePicker } from '@material-ui/pickers';

function KeyboardDatePickerExample(props) {
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<div className={style.container}>
			<KeyboardDatePicker
				clearable
				value={selectedDate}
				placeholder="10/10/2018"
				onChange={date => handleDateChange(date)}
				minDate={new Date()}
				format="MM/dd/yyyy"
			/>

			<KeyboardDatePicker
				placeholder="2018/10/10"
				value={selectedDate}
				onChange={date => handleDateChange(date)}
				format="yyyy/MM/dd"
			/>
		</div>
	);
}

export default KeyboardDatePickerExample;
