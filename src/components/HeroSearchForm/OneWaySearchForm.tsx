import React, { useState, useEffect } from "react";
import moment from "moment";
import { FC } from "react";
import { onewayApi } from "services/apiServices";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import "./../../styles/style.css"
import DateInput from "./DateInput";
import GuestsInput from "./GuestsInput";

export interface DateRage {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
}

export interface StaySearchFormProps {
    haveDefaultValue?: boolean;
    autoFocus?: boolean;
}

const OneWaySearchForm: FC<StaySearchFormProps> = ({
    autoFocus = false
}) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [dateValue, setdateValue] = useState<moment.Moment | null>(null);
    const [dateFocused, setDateFocused] = useState<boolean>(false);
    const [guestValue, setGuestValue] = useState(0);
    const [showPopover, setShowPopover] = useState(autoFocus);

    const handleSubmit = async () => {
        var data = {
            "start_location": from,
            "end_location": to,
            "date": dateValue?.format("YYYY-MM-DD"),
            "guests": guestValue
        };
        if(guestValue > 0){
            const response = await onewayApi(data);
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
        }else{
            toast.error("Choose atleast 1 guest!", {
                position: toast.POSITION.TOP_CENTER
            });
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
                                <span className="line-clamp-1">Start Location</span>
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
                <DateInput
                    defaultValue={dateValue}
                    onChange={(date) => setdateValue(date)}
                    defaultFocus={dateFocused}
                    onFocusChange={(focus: boolean) => {
                        setDateFocused(focus);
                    }}
                    className="flex-1 "
                /> 
                <GuestsInput
                    defaultValue={guestValue}
                    onChange={(data) => setGuestValue(data)}
                    className="flex-[1.5] "
                    hasButtonSubmit={false}
                />                         

                <div className={`relative flex`}>
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

export default OneWaySearchForm;
