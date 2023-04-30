import React, { useEffect, useState } from "react";
import moment from "moment";
import { FC } from "react";
import { onewayApi,roundtripApi } from "services/apiServices";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import "./../../styles/style.css"
import DateInput from "./DateInput";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";
import GuestsInput from "./GuestsInput";

export interface DateRage {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
}
export interface TimeRage {
    startTime: string;
    endTime: string;
  }

export interface StaySearchFormProps {
    haveDefaultValue?: boolean;
    autoFocus?: boolean;
}

const RoundTripSearchForm: FC<StaySearchFormProps> = ({
    autoFocus = false
}) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [guestValue, setGuestValue] = useState(0);
    const [showPopover, setShowPopover] = useState(autoFocus);

    const [dateRangeValue, setDateRangeValue] = useState<any>({
        startDate: null,
        endDate: null,
      });
      const [timeRangeValue, setTimeRangeValue] = useState<any>({
        startTime: "10:00 AM",
        endTime: "10:00 PM",
      });

    const handleSubmit = async () => {
        var data = {
            "start_location": from,
            "end_location": to,
            "start_date": dateRangeValue.startDate?.format("YYYY-MM-DD"),
            "end_date": dateRangeValue.endDate?.format("YYYY-MM-DD"),
            "start_time": timeRangeValue.startTime,
            "end_time": timeRangeValue.endTime,
            "guests": guestValue
        };
        if(guestValue === 0){
            toast.error("Choose atleast 1 guest!", {
                position: toast.POSITION.TOP_CENTER
            });
        }else if(!dateRangeValue.startDate || !dateRangeValue.endDate) {
            toast.error("Please select the date!", {
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            const response = await roundtripApi(data);
            if (response.data) {
                if (response.data.response === "success") {
                    toast(response.data.response);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                } else {
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }
        }
    }

    useEffect(() => {
        setShowPopover(autoFocus);
    }, [autoFocus]);


    const renderForm = () => {
        return (
            <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
            className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
            <div className="relative flex nc-flex-1.5">
                <div
                    onClick={() => setShowPopover(false)}
                    className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
                        }`}
                >
                    <div className="text-neutral-300 dark:text-neutral-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="nc-icon-field"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <input
                            className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
                            onChange={(e) => {
                                setFrom(e.target.value);
                            }}
                            placeholder="From"
                        />
                        <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                            <span className="line-clamp-1">Start Location?</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative flex nc-flex-1.5">
                    <div
                        onClick={() => setShowPopover(false)}
                        className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
                            }`}
                    >
                        <div className="text-neutral-300 dark:text-neutral-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="nc-icon-field"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <input
                                className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
                                onChange={(e) => {
                                    setTo(e.target.value);
                                }}
                                placeholder="To"
                            />
                            <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                                <span className="line-clamp-1">End Location</span>
                            </span>
                        </div>
                    </div>
                </div>
            <RentalCarDatesRangeInput
              defaultDateValue={dateRangeValue}
              defaultTimeValue={timeRangeValue}
              onChange={(data) => {
                setDateRangeValue(data.stateDate);
                setTimeRangeValue(data.stateTimeRage);
              }}
              hasButtonSubmit={false}
            />
            {/* <DateInput
                    defaultValue={dateValue}
                    onChange={(date) => setdateValue(date)}
                    defaultFocus={dateFocused}
                    text="Start Date"
                    onFocusChange={(focus: boolean) => {
                        setDateFocused(focus);
                    }}
                    className="flex-1 "
            /> 
            <DateInput
                    defaultValue={endDateValue}
                    onChange={(date) => setEndDateValue(date)}
                    defaultFocus={endDateFocused}
                    text="End Date"
                    onFocusChange={(focus: boolean) => {
                        setEndDateFocused(focus);
                    }}
                    className="flex-1 "
            /> */}
            {/* <div className="relative flex nc-flex-1.5">
                <div
                    onClick={() => setShowPopover(true)}
                    className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
                        }`}
                >
                    <div className="text-neutral-300 dark:text-neutral-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="nc-icon-field"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <input
                            type="time"
                            className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            placeholder="Date"
                        />
                        <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                            <span className="line-clamp-1">Start Time?</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative flex nc-flex-1.5">
                <div
                    onClick={() => setShowPopover(true)}
                    className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
                        }`}
                >
                    <div className="text-neutral-300 dark:text-neutral-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="nc-icon-field"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <input
                            type="time"
                            className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            placeholder="Date"
                        />
                        <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                            <span className="line-clamp-1">End Time?</span>
                        </span>
                    </div>
                </div>
            </div> */}
            <GuestsInput
                    defaultValue={guestValue}
                    onChange={(data) => setGuestValue(data)}
                    className="flex-[1.5] "
                    hasButtonSubmit={false}
                /> 
            {/* <div className="relative flex nc-flex-1.5">
                <div
                    onClick={() => setShowPopover(false)}
                    className={`flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
                        }`}
                >
                    <div className="text-neutral-300 dark:text-neutral-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="nc-icon-field"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            />
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <input
                            type="number"
                            min="1"
                            className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                            onChange={(e) => {
                                setGuestValue(Number(e.target.value));
                            }}
                            placeholder="Guests"
                        />
                        <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                            <span className="line-clamp-1">Add Guests?</span>
                        </span>
                    </div>
                </div>
            </div> */}
            <div className="relative flex nc-flex-1.5">
                <div className="flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left">
                    <div className="pr-2 xl:pr-4">
                        <button
                            type="submit"
                            className="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
                        >
                            <span className="mr-3 md:hidden">Submit</span>
                            <i className="las la-arrow-right text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
        );
    };

    return renderForm();
};

export default RoundTripSearchForm;
