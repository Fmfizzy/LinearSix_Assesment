require('dotenv').config();
const { google } = require('googleapis');

class CalendarFreeBusyChecker {
    constructor(apiKey) {
        this.calendar = google.calendar({
            version: 'v3',
            auth: apiKey
        });
    }

    async getFreeBusyIntervals(calendarId, startTime, endTime) {
        try {
            const request = {
                resource: {
                    timeMin: new Date(startTime).toISOString(),
                    timeMax: new Date(endTime).toISOString(),
                    items: [{ id: calendarId }]
                }
            };

            const response = await this.calendar.freebusy.query(request);
            return response.data.calendars[calendarId].busy;
        } catch (error) {
            throw new Error(`Failed to fetch free/busy intervals: ${error.message}`);
        }
    }
}


async function checkCalendarFreeBusy(calendarId, startTime, endTime) {
    const API_KEY = process.env.CALENDAR_API; 
    const checker = new CalendarFreeBusyChecker(API_KEY);
    
    try {
        const busyIntervals = await checker.getFreeBusyIntervals(
            calendarId,
            startTime,
            endTime
        );
        return busyIntervals;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

checkCalendarFreeBusy(
    process.env.CALENDAR_ID,
    '2024-05-24T00:00:00',
    '2024-05-26T00:00:00'
).then(busyIntervals => {
    console.log('Busy intervals:', busyIntervals);
}).catch(error => {
    console.error('Error:', error);
});