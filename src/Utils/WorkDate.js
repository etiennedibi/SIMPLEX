import { differenceInMinutes, format } from 'date-fns';

export const formatDateForChat = (date) => { 
    const today = new Date();
    const laterDate = new Date(date);
    if(differenceInMinutes(today, laterDate) < 1440) {
        return format(laterDate, 'HH:mm');
    } else {
        return format(laterDate, 'dd-MM-y');
    }
}