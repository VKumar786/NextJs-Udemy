//@ts-nocheck

"use client";

import React, { useRef } from "react";
import btnStyle from "@/styles/button.module.css";
import eventSearchStyle from "@/styles/events-search.module.css";

const EventSearch = (props) => {
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedYear = yearRef?.current.value ?? "";
    const selectedMonth = monthRef?.current.value ?? "";

    props.onSearch(selectedMonth, selectedYear);
  };

  return (
    <form className={eventSearchStyle.form} onSubmit={submitHandler}>
      <div className={eventSearchStyle.controls}>
        <div className={eventSearchStyle.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={eventSearchStyle.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button className={btnStyle.btn}>Find Events</button>
    </form>
  );
};

export default EventSearch;
