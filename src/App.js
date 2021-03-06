import React from 'react';
import './App.css';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import QuickStart from './components/quick-start/quick-start.component';
import StaticDatePicker from './components/static-date-picker/static-date-picker.component';
import BasicDateTimePicker from './components/basic-date-time-picker/basic-date-time-picker';
import KeyboardDatePickerExample from './components/keybord-date-picker/keybord-date-picker.component';

function App() {
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<div className="App">
				<QuickStart />
				<StaticDatePicker />
				<BasicDateTimePicker />
				<KeyboardDatePickerExample />
			</div>
		</MuiPickersUtilsProvider>
	);
}

export default App;
