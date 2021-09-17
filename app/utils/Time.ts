const countTimePassed = (time: Date) => {
    let now = Date.now();
    let duration: number = (now - Date.parse(time.toISOString()))/1000;
    
    let durationInDays = duration / (3600*24);
    
    return durationInDays > 31 
        ? Math.floor(durationInDays/31) + ` month${Math.floor(durationInDays/31)>1?'s':""} ago`
        : durationInDays > 7
            ? Math.floor(durationInDays/7) + ` week${Math.floor(durationInDays/7)>1?'s':""} ago`
            : Math.floor(durationInDays) > 0
                ? Math.floor(durationInDays) + ` day${Math.floor(durationInDays)>1?'s':""} ago`
                : Math.floor(duration/(3600)) > 0
                    ? Math.floor(duration/3600) + ` hour${Math.floor(duration/3600)>1?'s':""} ago`
                    : Math.floor(duration) > 60
                        ? Math.floor(duration/60) + ` minute${Math.floor(duration/0)>1?'s':""} ago`
                        : Math.floor(duration) + ` second${Math.floor(duration)>1?'s':""} ago`;
}

export default countTimePassed;