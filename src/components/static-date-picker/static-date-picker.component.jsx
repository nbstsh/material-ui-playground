import React, { useState } from 'react';

import style from './static-date-picker.module.scss';

import { DatePicker } from '@material-ui/pickers';

const StaticDatePicker = () => {
	const [date, changeDate] = useState(new Date());

	// prettier-ignore
	return (
    <section className={style.container}>
      <DatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={(moment) => console.log(moment.format('YYYY/MM/DD hh:mm:ss'))}
      />

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
      </section>
  );
};

export default StaticDatePicker;
